"use client";
import CategoryChip from "./CategoryChip";
import ReadButton from "./ReadButton";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import { motion } from "framer-motion";

interface Post {
  _id: string;
  title: string;
  url: string;
  tags?: string[];
  date: string;
  readTime: string;
}

const CategoriesItem = (props: Post) => {
  const { title, tags, date, readTime, url } = props;

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      exit={{ opacity: 1 }}
      transition={{ type: "spring" }}
      className="flex sm:items-center flex-col sm:flex-row justify-between gap-4 first:border-0 border-t-1 py-3 sm:py-5 border-darker-100/30 dark:border-lighter-100/20"
    >
      <div className="flex-grow">
        <div className="flex md:items-center flex-wrap gap-x-4 gap-y-1 mb-2">
          <h3 className="font-medium text-base sm:text-lg">{title}</h3>
          {tags?.map((item) => (
            <CategoryChip key={item} text={item} />
          ))}
        </div>
        <div className="flex items-center gap-x-4 gap-y-1 flex-wrap">
          <time
            dateTime={date}
            className="text-neutral-800 dark:text-neutral-300"
          >
            {format(parseISO(date), "MMMM dd, yyyyy")}
          </time>
          <span>{readTime} minutes read</span>
        </div>
      </div>
      <ReadButton slug={url} />
    </motion.li>
  );
};

const CategoriesList = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.ul>
  );
};

export { CategoriesList, CategoriesItem };
