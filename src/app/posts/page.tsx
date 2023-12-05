import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  CardFooter,
} from "@nextui-org/react";
const { compareDesc, format, parseISO } = require("date-fns");

function PostCard(post: Post) {
  // {post.tags &&
  //   post.tags.map((tag) => (
  //     <span key={tag} className="text-sm text-gray-600">
  //       {tag}
  //     </span>
  //   ))}

  return (
    <Link href={post.url}>
      <Card
        isFooterBlurred
        className="w-full h-full col-span-12 sm:col-span-7 dark:border dark:border-white/30"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start bg-black/10">
          <p className="text-base text-white/60 uppercase font-bold">
            {post.author}
          </p>
          <h4 className="text-white font-medium text-xl">{post.title}</h4>
        </CardHeader>
        <Image
          isBlurred
          alt="card background"
          className="z-0 w-full h-full object-cover"
          src={post.Image}
        />
        <CardFooter className="absolute dark:bg-black/50 bg-white/20 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-sm dark:text-white/90 text-slate-200">
                <time dateTime={post.date}>
                  {format(parseISO(post.date), "LLLL d, yyyy")}
                </time>
              </p>
              <p className="text-sm dark:text-white/90 text-slate-200">
                {post.readTime} minutes read
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Read more
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8 gap-4">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
