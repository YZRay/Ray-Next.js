import { Post } from "contentlayer/generated";

export const pagination = (
  items: Post[],
  currentPage: number,
  itemsPerPage: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return {
    paginatedItems,
    totalPages,
    currentPage,
  };
};
