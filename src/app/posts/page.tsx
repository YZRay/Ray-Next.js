import { Fragment } from "react";
import { getPosts } from "@/posts";
import PostsList from "@/components/Posts/PostsList";
import {
  CategoryButtonGroup,
  CategoryButton,
} from "@/components/Categories/CategoryButton";
import { categories, type Category } from "@/categories";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <Fragment>
      <section className="mx-auto w-11/12 lg:w-[70%] py-8 min-h-svh">
        <CategoryButtonGroup>
          <CategoryButton slug="/posts" text="All" />
          {categories.map((category: Category) => (
            <CategoryButton
              key={category}
              slug={`/categories/${category}`}
              text={category}
            />
          ))}
        </CategoryButtonGroup>
        <PostsList posts={posts} />
      </section>
    </Fragment>
  );
}
