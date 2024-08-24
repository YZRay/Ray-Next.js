import { allPosts } from "contentlayer/generated";
import { PageModal } from "./modal";
import MDXContent from "@/components/mdx-content";
import { notFound } from "next/navigation";
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const Page = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  return (
    <PageModal title={post?.title as string}>
      <article className="w-full mx-auto py-6 mt-0 prose">
        <MDXContent code={post.body.code} />
      </article>
    </PageModal>
  );
};

export default Page;
