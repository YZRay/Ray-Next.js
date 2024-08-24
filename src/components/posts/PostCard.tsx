"use client";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Post } from "contentlayer/generated";
import { parseISO } from "date-fns/parseISO";
import { format } from "date-fns/format";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
const PostCard = (post: Post) => {
  const router = useRouter();

  return (
    <motion.div
      className="relative z-0 h-full"
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      exit={{ opacity: 1, y: 25 }}
      transition={{ type: "spring" }}
    >
      <Card
        isFooterBlurred
        className="w-full h-full dark:border-2 dark:border-darker-200"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/10">
          <p className="text-base text-white/60 uppercase font-bold">
            {post.author}
          </p>
          <h4 className="text-white font-medium text-lg md:text-xl">
            {post.title}
          </h4>
        </CardHeader>
        <Image
          alt="card background"
          className="z-0 w-full h-full object-cover"
          src={post.Image}
          loading="lazy"
          removeWrapper={true}
        />
        <CardFooter className="absolute dark:bg-darker-400/70 bg-white/20 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-sm text-lighter-200">
                <time className="text-lighter-200" dateTime={post.date}>
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </p>
              <p className="text-sm text-lighter-200">
                {post.readTime} minutes read
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              radius="full"
              size="md"
              onClick={() => router.push(post.url, { scroll: false })}
              aria-label="Read"
            >
              Read more
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PostCard;
