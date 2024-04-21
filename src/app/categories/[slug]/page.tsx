import { allPosts } from "contentlayer/generated";
import { slug } from "github-slugger";
import { Fragment } from "react";
import Link from "next/link";
import { it } from "node:test";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const categories: string[] = [];
  const paths: [{ slug: string }] = [{ slug: "all" }];

  allPosts.map((item) => {
    item.tags?.map((tag) => {
      const trimmedTag = tag.trim();
      if (!categories.includes(trimmedTag)) {
        categories.push(trimmedTag);
        paths.push({ slug: trimmedTag });
      }
    });
  });

  return paths;
}

const Category = ({ params }: Params) => {
  const allCategories = ["all"];
  allPosts.forEach((post) => {
    post.tags?.forEach((tag) => {
      const trimmedTag = tag.trim();
      if (!allCategories.includes(trimmedTag)) {
        allCategories.push(trimmedTag);
      }
    });
  });

  allCategories.sort();

  const posts = allPosts.filter((post) => {
    if (params.slug === "all") {
      return true;
    }
    return post.tags?.some((tag) => slug(tag) === params.slug);
  });

  return (
    <Fragment>
      <div className="flex gap-4">
        {allCategories.map((item, i) => {
          return (
            <Link key={i} href={`/categories/${item}`}>
              {item.toUpperCase()}
            </Link>
          );
        })}
      </div>
      {posts.map((item) => {
        return <div key={item._id}>{item.title}</div>;
      })}
    </Fragment>
  );
};

export default Category;
