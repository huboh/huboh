import { ensureOrigin, getOrigin, getRequestUrl } from "@/lib/request";
import { NextRequest, NextResponse, type NextMiddleware } from "next/server";

export const CURRENT_URL_HEADER = "x-incoming-request-url";

/**
 * retrieves the current url from the `CURRENT_URL_HEADER` header.
 */
export const getCurrentUrl = (headers: Headers) => {
  return (
    headers.get(CURRENT_URL_HEADER) || getRequestUrl(headers)
  );
};

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/ (special page for OG tags proxying)
     * 4. /_static (inside /public)
     * 5. /_vercel (Vercel internals)
     * 6. Static files (e.g. /favicon.ico, /sitemap.xml, /robots.txt, etc.)
    */
    "/((?!api|_next/static|_next/image|_vercel|favicon.ico|robots.txt|sitemap.xml).*)",
  ]
};

/**
 * Sets the current url to the request `CURRENT_URL_HEADER` header.
 */
export const middleware: NextMiddleware = (request: NextRequest) => {
  const key = CURRENT_URL_HEADER;
  const heads = new Headers(request.headers);
  const origin = getOrigin(heads);
  const value = (
    ensureOrigin(origin, (request.url || request.nextUrl.href || getRequestUrl(heads))).toString()
  );

  heads.set(
    key,
    value
  );

  return (
    NextResponse.next({
      request: {
        headers: heads
      }
    })
  );
};