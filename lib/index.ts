/**
 * properly formats multiple class names
 * @param classNames 
 */
export const joinClassStrings = (...classNames: (string | undefined)[]) => (
  classNames.reduce((a, b) => `${(a || "").trim() + " " + (b || "").trim()}`.trim(), "")
);