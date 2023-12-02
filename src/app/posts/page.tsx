import Link from "next/link";
// import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <Link href={post.url} className="mb-8">
      <h2 className="mb-1 text-xl">{post.title}</h2>
      <span>{post.author}</span>
      <span>{post.Introduction}</span>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </Link>
  );
}
const { compareDesc } = require("date-fns");
export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
