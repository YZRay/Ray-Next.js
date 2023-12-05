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
    <div className="w-10/12 mx-auto py-8 mb-12 border-t-2 border-slate-400 flex">
      {prePost && (
        <Link className="group" href={prePost.url}>
          <h6 className="font-bold text-slate-800 text-lg">{prePost.title}</h6>
          <div className="flex items-center gap-2">
            <IoIosArrowBack className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="text-slate-700 text-base">上一篇文章</span>
          </div>
        </Link>
      )}
      {nextPost && (
        <Link className="group" href={nextPost.url}>
          <h6 className="font-bold text-slate-800 text-lg">{nextPost.title}</h6>
          <div className="flex items-center gap-2">
            <span className="text-slate-700 text-base">下一篇文章</span>
            <IoIosArrowForward className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default PreviousArticle;
