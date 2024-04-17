import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const Category = () => {
  return <div>page</div>;
};

export default Category;
