import { allPosts } from "contentlayer/generated";
import { slug } from "github-slugger";
import { compareDesc } from "date-fns/compareDesc";
import {
  CategoryButton,
  CategoryButtonGroup,
} from "@/components/Categories/CategoryButton";
import {
  CategoriesList,
  CategoriesItem,
} from "@/components/Categories/CategoriesList";

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
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const posts = sortedPosts.filter((post) => {
    if (params.slug === "all") {
      return true;
    }
    return post.tags?.some((tag) => slug(tag) === params.slug);
  });

  return (
    <section className="mx-auto w-11/12 lg:w-[70%] py-8 min-h-svh">
      <CategoryButtonGroup>
        {allCategories.map((item, i) => {
          return (
            <CategoryButton key={i} slug={`/categories/${item}`} text={item} />
          );
        })}
      </CategoryButtonGroup>
      <CategoriesList>
        {posts.map((item) => {
          return <CategoriesItem {...item} key={item._id} />;
        })}
      </CategoriesList>
    </section>
  );
};

export default Category;
