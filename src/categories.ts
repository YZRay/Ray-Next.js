export const categories = ["css", "javascript", "nodejs", "react"] as const;

export type Category = (typeof categories)[number];
