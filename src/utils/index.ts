export const joinClassStrings = (...classNames: string[]) => (
  classNames.reduce((a, b) => `${a.trim() + " " + b.trim()}`.trim(), "")
);