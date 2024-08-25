import { categories, type Category } from "@/categories";
import { notFound } from "next/navigation";
import PostsList from "@/components/Posts/PostsList";
import { getPostsByCategory } from "@/posts";
import {
  CategoryButtonGroup,
  CategoryButton,
} from "@/components/Categories/CategoryButton";

export function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { category: category } = params;

  if (categories.indexOf(category) == -1) notFound();

  const posts = await getPostsByCategory({ category });

  return (
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
      {posts && posts.length > 0 ? (
        <PostsList posts={posts} />
      ) : (
        <div>Page not found</div>
      )}
    </section>
  );
}
