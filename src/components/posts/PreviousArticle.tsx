import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Post {
  _raw: {
    flattenedPath: string;
  };
  title: string;
  url: string;
  excerpt: string;
  author: string;
}
const PreviousArticle = ({
  allPosts,
  params,
}: {
  allPosts: Post[];
  params: { slug: string };
}) => {
  const postIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === params.slug
  );
  const postLength = allPosts.length;

  //設定上下篇文章
  const prevPostIndex = allPosts[postIndex - 1];
  const prePost = prevPostIndex
    ? { title: prevPostIndex.title, url: prevPostIndex._raw.flattenedPath }
    : {
        title: allPosts[postLength - 1].title,
        url: allPosts[postLength - 1].url,
      };
  const nextPostIndex = allPosts[postIndex + 1];
  const nextPost = nextPostIndex
    ? { title: nextPostIndex.title, url: nextPostIndex._raw.flattenedPath }
    : { title: allPosts[0].title, url: allPosts[0].url };

  return (
    <div className="w-10/12 mx-auto py-8 mb-12 border-t-2 border-neutral-400 flex flex-col justify-between md:flex-row">
      {prePost && (
        <Link
          className="group pb-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:scale-x-0 after:h-0.5 after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-left hover:after:scale-x-100 hover:after:origin-bottom-right ease-out"
          href={prePost.url}
        >
          <div className="flex items-center gap-2 pb-2">
            <IoIosArrowBack className="w-6 h-6 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 group-hover:-translate-x-2 transition-all duration-300" />
            <span className="text-neutral-700 dark:text-neutral-200 text-base font-bold">
              上一篇文章
            </span>
          </div>
          <h6 className="font-bold text-neutral-800 dark:text-neutral-200 text-lg w-fit">
            {prePost.title}
          </h6>
        </Link>
      )}
      {nextPost && (
        <Link
          className="group pb-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:scale-x-0 after:h-0.5 after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out"
          href={nextPost.url}
        >
          <div className="flex items-center gap-2 flex-row-reverse pb-2">
            <IoIosArrowForward className="w-6 h-6 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 group-hover:translate-x-2 transition-all duration-300" />
            <span className="text-neutral-700 dark:text-neutral-200 text-base font-bold">
              下一篇文章
            </span>
          </div>
          <h6
            className={`font-bold text-neutral-800 dark:text-neutral-200 text-lg w-fit ms-auto`}
          >
            {nextPost.title}
          </h6>
        </Link>
      )}
    </div>
  );
};

export default PreviousArticle;
