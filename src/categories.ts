export const categories = [
  "all",
  "css",
  "javascript",
  "nodejs",
  "react",
] as const;

export type Category = (typeof categories)[number];
