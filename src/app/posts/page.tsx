"use client";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns/compareDesc";
import { useState, Fragment, useEffect, useCallback } from "react";
import PostCard from "@/components/posts/PostCard";
import { Pagination } from "@nextui-org/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function Posts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("page");
  const page = Number(queryPage);

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const [currentPage, setCurrentPage] = useState(page || 1);
  const postsPerPage = 12;

  const startIndex = (currentPage - 1) * postsPerPage;

  const endIndex = startIndex + postsPerPage;
  const displayPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = useCallback(
    (newPage: number) => {
      setCurrentPage(newPage);
      router.push(`/posts?page=${newPage}`);
    },
    [setCurrentPage, router]
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      handlePageChange(1);
    }
  }, [currentPage, totalPages, handlePageChange]);

  return (
    <Fragment>
      <div className="mx-auto w-11/12 lg:w-[70%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 py-8 gap-4">
        {displayPosts.map((post, idx) => (
          <div
            key={post._id}
            className={clsx(
              idx === 0 && "lg:col-span-2 lg:row-span-2",
              idx === 6 && "lg:row-span-2 lg:col-span-2 lg:col-end-4",
              idx === 7 && "col-start-1 row-start-4",
              idx === 8 && "row-start-5",
              idx === 9 && "row-start-6"
            )}
          >
            <PostCard key={post._id} {...post} />
          </div>
        ))}
      </div>
      <div className="mx-auto w-4/5 mt-2 mb-6">
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
          onChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
}
