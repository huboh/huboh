/**
 * Retrieves the parsed origin from headers.
 */
export const getOrigin = (headers: Headers) => {
  const host = headers.get("host");
  const protocol = headers.get("x-forwarded-proto") || "http";

  return (
    new URL(`${protocol}://${host}`)
  );
};

/**
 * gets a valid referer if its from our domain or defaults to host.
 */
export const getReferer = (headers: Headers) => {
  const host = headers.get("host");
  const referer = headers.get("referer");
  const protocol = headers.get("x-forwarded-proto") || "http";

  // verify it's from our domain to be safe
  if (referer && ((new URL(referer)).host === host)) {
    return referer;
  }

  return (
    `${protocol}://${host}`
  );
};

/**
 * Preserves a specified base origin while keeping the path and query parameters of a URL.
 * Useful when ensuring URLs maintain the correct local domain instead of "localhost".
 * 
 * @example
 * // Fix redirect URLs in middleware
 * const host = headers.get("host");
 * const protocol = headers.get("x-forwarded-proto") || "http";
 * const baseOrigin = new URL(`${protocol}://${host}`); // "https://auth.chaaland.local"
 * const redirectUrl = response.headers.get("location"); // might be "http://localhost:3000/dashboard"
 * 
 * response.headers.set(
 *   "location", 
 *   preserveOrigin(baseOrigin, redirectUrl).toString() // would be "https://auth.chaaland.local/dashboard"
 * );
 */
export const ensureOrigin = (baseOrigin: string | URL, url: string | URL) => {
  const parsed = (
    (url instanceof URL) ? url : new URL(url, baseOrigin)
  );
  return (
    new URL(`${parsed.pathname}${parsed.search}`, baseOrigin)
  );
};

export const getRequestUrl = (headers: Headers) => {
  const host = headers.get("host");
  const baseOrigin = getOrigin(headers);

  // try nextjs special headers first
  const search = headers.get("x-invoke-query") || "";
  const pathname = headers.get("x-invoke-path") || "";

  // if we have nextjs headers, use them
  if (pathname) {
    return ensureOrigin(baseOrigin, `${pathname}${search ? `?${search}` : ""}`);
  }

  // try getting URL from next request
  const nextUrl = headers.get("x-url");
  if (nextUrl) {
    return ensureOrigin(baseOrigin, nextUrl);
  }

  // last resort - try referer
  const referer = headers.get("referer");
  if (referer) {
    const refererUrl = new URL(referer);

    // verify it's from our domain to be safe
    if (refererUrl.host === host) {
      return ensureOrigin(baseOrigin, referer);
    }
  }

  return (
    baseOrigin
  );
};