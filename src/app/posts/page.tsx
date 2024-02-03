"use client";
import { allPosts } from "contentlayer/generated";
const { compareDesc, format, parseISO } = require("date-fns");
import { Suspense, useState, Fragment } from "react";
import PostCard from "@/components/posts/PostCard";
import SkeletonCard from "@/components/posts/SkeletonCard";
import { Pagination } from "@nextui-org/react";

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const startIndex = (currentPage - 1) * postsPerPage;

  const endIndex = startIndex + postsPerPage;
  const displayPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <Fragment>
      <div className="mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 gap-4">
        <Suspense fallback={<SkeletonCard />}>
          {displayPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </Suspense>
      </div>
      <div className="mx-auto w-4/5">
        <Pagination
          showControls
          classNames={{
            wrapper: "mx-auto z-[0]",
            item: "bg-lighter-400 dark:bg-darker-100/20 border border-transparent text-darker-300 dark:text-lighter-200",
            prev: "bg-lighter-400 dark:bg-darker-100/20 border border-transparent text-darker-300 dark:text-lighter-200",
            next: "bg-lighter-400 dark:bg-darker-100/20 border border-transparent text-darker-300 dark:text-lighter-200",
          }}
          loop={true}
          total={totalPages}
          initialPage={currentPage}
          size="lg"
          color="primary"
          boundaries={2}
          variant="bordered"
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Fragment>
  );
}
