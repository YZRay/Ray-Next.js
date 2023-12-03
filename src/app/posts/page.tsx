import Link from "next/link";
import { allPosts, Post } from "contentlayer/generated";
const { compareDesc, format, parseISO } = require("date-fns");

function PostCard(post: Post) {
  return (
    <Link href={post.url} className="mb-8">
      <h2 className="mb-1 text-xl">{post.title}</h2>
      {post.tags &&
        post.tags.map((tag) => (
          <span key={tag} className="text-sm text-gray-600">
            {tag}
          </span>
        ))}
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <span>{post.readTime} minutes read</span>
      <span>{post.author}</span>
      <span>{post.excerpt}</span>
    </Link>
  );
}

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto w-4/5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-8">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
