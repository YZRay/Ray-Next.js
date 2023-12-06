import Link from "next/link";
import { before } from "node:test";
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
    <div className="w-10/12 mx-auto py-8 mb-12 border-t-2 border-slate-400 flex justify-between">
      {prePost && (
        <Link
          className="group pb-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:scale-x-0 after:h-0.5 after:bg-slate-700 after:transition-transform after:duration-300 after:origin-bottom-left hover:after:scale-x-100 hover:after:origin-bottom-right ease-out"
          href={prePost.url}
        >
          <div className="flex items-center gap-2 pb-2">
            <IoIosArrowBack className="w-6 h-6 group-hover:text-slate-700 group-hover:-translate-x-2 transition-all duration-300" />
            <span className="text-slate-700 text-base font-bold">
              上一篇文章
            </span>
          </div>
          <h6 className="font-bold text-slate-800 text-lg">{prePost.title}</h6>
        </Link>
      )}
      {nextPost && (
        <Link
          className="group pb-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:scale-x-0 after:h-0.5 after:bg-slate-700 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out"
          href={nextPost.url}
        >
          <div className="flex items-center gap-2 flex-row-reverse pb-2">
            <IoIosArrowForward className="w-6 h-6 group-hover:text-slate-700 group-hover:translate-x-2 transition-all duration-300" />
            <span className="text-slate-700 text-base font-bold">
              下一篇文章
            </span>
          </div>
          <h6 className={`font-bold text-slate-800 text-lg`}>
            {nextPost.title}
          </h6>
        </Link>
      )}
    </div>
  );
};

export default PreviousArticle;
