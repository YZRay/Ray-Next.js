import { allPosts } from "contentlayer/generated";
import { slug } from "github-slugger";
import { parseISO } from "date-fns/parseISO";
import { format } from "date-fns/format";
import { compareDesc } from "date-fns/compareDesc";
import CategoryButton from "@/components/Categories/CategoryButton";
import CategoryChip from "@/components/Categories/CategoryChip";
import ReadButton from "@/components/Categories/ReadButton";

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
      <div className="flex gap-x-4 gap-y-2 mt-4 mb-6 flex-wrap">
        {allCategories.map((item, i) => {
          return (
            <CategoryButton key={i} slug={`/categories/${item}`} text={item} />
          );
        })}
      </div>
      <ul>
        {posts.map((item) => {
          return (
            <li
              key={item._id}
              className="flex sm:items-center flex-col sm:flex-row justify-between gap-4 first:border-0 border-t-1 py-3 sm:py-5 border-darker-100/30 dark:border-lighter-100/20"
            >
              <div className="flex-grow">
                <div className="flex md:items-center flex-wrap gap-x-4 gap-y-1 mb-2">
                  <h3 className="font-medium text-base sm:text-lg">
                    {item.title}
                  </h3>
                  {item.tags?.map((item) => (
                    <CategoryChip key={item} text={item} />
                  ))}
                </div>
                <div className="flex items-center gap-x-4 gap-y-1 flex-wrap">
                  <time
                    dateTime={item.date}
                    className="text-neutral-800 dark:text-neutral-300"
                  >
                    {format(parseISO(item.date), "MMM dd, yyyy")}
                  </time>
                  <span>{item.readTime} minutes read</span>
                </div>
              </div>
              <ReadButton slug={item.url} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Category;
