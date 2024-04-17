"use client";
import { allPosts } from "contentlayer/generated";
const { compareDesc } = require("date-fns");
import { Suspense, useState, Fragment, useEffect, useCallback } from "react";
import PostCard from "@/components/posts/PostCard";
import SkeletonCard from "@/components/posts/SkeletonCard";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Posts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryPage = searchParams.get("page");
  const page = Number(queryPage);

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const [currentPage, setCurrentPage] = useState(page || 1);
  const postsPerPage = 6;

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
      <div className="mx-auto w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3 py-8 gap-4">
        {displayPosts.map((post, idx) => (
          <div
            key={post._id}
            className={`${idx === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
          >
            <PostCard key={post._id} {...post} />
          </div>
        ))}
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
          onChange={handlePageChange}
        />
      </div>
    </Fragment>
  );
}
