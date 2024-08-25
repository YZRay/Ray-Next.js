"use client";
import CategoryChip from "@/components/Categories/CategoryChip";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import { motion, AnimatePresence } from "framer-motion";
import { type Post } from "@/posts";
import { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PostsList = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isHovered = (i: number) => hoveredIndex === i;

  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {posts.map(({ slug, title, publishDate, categories }, i) => (
        <motion.li
          key={slug}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          exit={{ opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.2 }}
          className="flex sm:items-center flex-col sm:flex-row justify-between gap-4 first:border-0 border-t-1 py-3 sm:py-5 border-darker-100/30 dark:border-lighter-100/20 relative px-2"
        >
          <div className="flex-grow z-[1]">
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
          <Button
            onClick={() => router.push(`/posts/${slug}`)}
            className="before:absolute before:inset-0 z-[1]"
            onMouseEnter={() => setHoveredIndex(i)}
          >
            Read more
          </Button>
          <AnimatePresence>
            {isHovered(i) && (
              <motion.div
                className="absolute rounded-lg bg-slate-300/30 dark:bg-slate-700/30 inset-0 w-full h-full block "
                layoutId="animated-bg"
                layout
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  layout: { duration: 0.5, type: "spring" },
                }}
              />
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PostsList;
