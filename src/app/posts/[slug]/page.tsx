import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
const { format, parseISO } = require("date-fns");
import MDXContent from "@/components/mdx-content";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import PreviousArticle from "@/components/PreviousArticle";

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

  return (
    <div className="block lg:flex justify-center gap-8 mt-4">
      <aside>
        <div className="hidden lg:sticky lg:top-28 lg:block">
          <TableOfContents source={post.body.raw} />
        </div>
      </aside>
      <div className="w-11/12 md:max-w-3xl mx-auto lg:mx-0 xl:max-w-5xl">
        <article className="w-10/12 mx-auto py-6 mt-0">
          <div className="pb-6 border-b-1 border-neutral-600 dark:border-neutral-100 text-center">
            <h1 className="text-4xl text-neutral-800 dark:text-neutral-300 font-bold mt-2">
              {post.title}
            </h1>
            <div className="flex flex-col mt-4 gap-2">
              <time
                dateTime={post?.date}
                className="uppercase font-bold text-neutral-800 dark:text-neutral-300"
              >
                {format(parseISO(post?.date), "MMM dd, yyyy")}
              </time>
              <span className="text-neutral-600 dark:text-neutral-400">
                {post.readTime} minutes read
              </span>
            </div>
          </div>
          <MDXContent code={post.body.code} />
        </article>
        <PreviousArticle allPosts={allPosts} params={params} />
      </div>
    </div>
  );
};

export default PostLayout;
