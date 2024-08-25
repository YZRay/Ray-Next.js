import { Fragment } from "react";
import { getPosts } from "@/posts";
import PostsList from "@/components/Posts/PostsList";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <Fragment>
      <section className="mx-auto w-11/12 lg:w-[70%] py-8 min-h-svh">
        <PostsList posts={posts} />
      </section>
    </Fragment>
  );
}
