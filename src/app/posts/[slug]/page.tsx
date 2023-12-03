import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
const { format, parseISO } = require("date-fns");
import MDXContent from "@/components/mdx-content";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

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
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post?.date} className="uppercase font-bold">
          {format(parseISO(post?.date), "MMM dd, yyyy")}
        </time>
      </div>
      <MDXContent code={post.body.code} />
    </article>
  );
};

export default PostLayout;
