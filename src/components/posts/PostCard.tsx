"use client";
import { Card, CardHeader, Image, Button, CardFooter } from "@nextui-org/react";
import { Post } from "contentlayer/generated";
const { compareDesc, format, parseISO } = require("date-fns");
import { useRouter } from "next/navigation";

const PostCard = (post: Post) => {
  const router = useRouter();
  return (
    <div className="relative z-0">
      <Card
        isFooterBlurred
        className="w-full h-full col-span-12 sm:col-span-7 dark:border-2 dark:border-darker-200"
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
          isBlurred
          alt="card background"
          className="z-0 w-full h-full object-cover"
          src={post.Image}
          loading="lazy"
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
          <Button
            radius="full"
            size="md"
            onClick={() => router.push(post.url)}
            aria-label="Read"
          >
            Read more
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
