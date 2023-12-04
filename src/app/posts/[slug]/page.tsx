import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
const { format, parseISO } = require("date-fns");
import MDXContent from "@/components/mdx-content";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";

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
    <div className="flex justify-center gap-8">
      <aside>
        <div className="hidden lg:sticky lg:top-28 lg:block">
          <TableOfContents source={post.body.raw} />
        </div>
      </aside>
      <article className="max-w-xl py-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mt-0">{post.title}</h1>
          <time dateTime={post?.date} className="uppercase font-bold">
            {format(parseISO(post?.date), "MMM dd, yyyy")}
          </time>
          <span>{post.readTime} minutes read</span>
        </div>
        <MDXContent code={post.body.code} />
      </article>
    </div>
  );
};

export default PostLayout;
