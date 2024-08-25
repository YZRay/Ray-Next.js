"use client";
import CategoryChip from "@/components/Categories/CategoryChip";
import ReadButton from "@/components/Categories/ReadButton";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import { motion } from "framer-motion";
import { type Post } from "@/posts";

const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {posts.map(({ slug, title, publishDate, categories }) => (
        <motion.li
          key={slug}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          exit={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
          className="flex sm:items-center flex-col sm:flex-row justify-between gap-4 first:border-0 border-t-1 py-3 sm:py-5 border-darker-100/30 dark:border-lighter-100/20"
        >
          <div className="flex-grow">
            <div className="flex md:items-center flex-wrap gap-x-4 gap-y-1 mb-2">
              <h3 className="font-medium text-base sm:text-lg">{title}</h3>
              {categories?.map((item) => (
                <CategoryChip key={item} text={item} />
              ))}
            </div>
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap">
              <time
                dateTime={publishDate}
                className="text-neutral-800 dark:text-neutral-300"
              >
                {format(parseISO(publishDate), "MMMM dd, yyyyy")}
              </time>
            </div>
          </div>
          <ReadButton slug={`/posts/${slug}`} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PostsList;
