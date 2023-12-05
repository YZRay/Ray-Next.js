import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
const { format, parseISO } = require("date-fns");
import MDXContent from "@/components/mdx-content";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  // throw new Error(`Post not found for slug: ${params.slug}`);

  const { excerpt, title, date } = post;

  const description = excerpt;

  // const ogImage = {
  //   url: `${process.env.HOST}/blog/${slug}/og.png`,
  // };

  return {
    title,
    description,
    // openGraph: {
    //   type: 'article',
    //   url: `${process.env.HOST}/blog/${slug}`,
    //   title,
    //   description,
    //   publishedTime: date,
    //   images: [ogImage],
    // },
    // twitter: {
    //   title,
    //   description,
    //   images: ogImage,
    //   card: 'summary_large_image',
    // },
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  // throw new Error(`Post not found for slug: ${params.slug}`);
  const postIndex = allPosts.findIndex(
    (post) => post._raw.flattenedPath === params.slug
  );
  //設定上下篇文章
  const prevPostIndex = allPosts[postIndex - 1];
  const prePost = prevPostIndex
    ? { title: prevPostIndex.title, url: prevPostIndex._raw.flattenedPath }
    : null;
  const nextPostIndex = allPosts[postIndex + 1];
  const nextPost = nextPostIndex
    ? { title: nextPostIndex.title, url: nextPostIndex._raw.flattenedPath }
    : null;

  return (
    <div className="flex justify-center gap-8 mt-4">
      <aside>
        <div className="hidden lg:sticky lg:top-28 lg:block">
          <TableOfContents source={post.body.raw} />
        </div>
      </aside>
      <div className="w-11/12 md:max-w-3xl xl:max-w-5xl">
        <article className="w-10/12 mx-auto py-6 mt-0">
          <div className="pb-6 border-b-1 border-slate-600 text-center">
            <h1 className="text-4xl text-slate-800 font-bold mt-2">
              {post.title}
            </h1>
            <div className="flex flex-col mt-4 gap-2">
              <time
                dateTime={post?.date}
                className="uppercase font-bold text-slate-800"
              >
                {format(parseISO(post?.date), "MMM dd, yyyy")}
              </time>
              <span className="text-slate-600">
                {post.readTime} minutes read
              </span>
            </div>
          </div>
          <MDXContent code={post.body.code} />
        </article>
        <div className="w-10/12 mx-auto py-8 mb-12 border-t-2 border-slate-400 flex">
          {prePost && (
            <Link className="group" href={prePost.url}>
              <h6 className="font-bold text-slate-800 text-lg">
                {prePost.title}
              </h6>
              <div className="flex items-center gap-2">
                <IoIosArrowBack className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="text-slate-700 text-base">上一篇文章</span>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link className="group" href={nextPost.url}>
              <h6 className="font-bold text-slate-800 text-lg">
                {nextPost.title}
              </h6>
              <div className="flex items-center gap-2">
                <span className="text-slate-700 text-base">下一篇文章</span>
                <IoIosArrowForward className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostLayout;
