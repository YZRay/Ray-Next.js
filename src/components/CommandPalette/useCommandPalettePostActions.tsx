"use client";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/navigation";
import { getPosts } from "@/posts";

export const useCommandPalettePostActions = async () => {
  const router = useRouter();
  const posts = await getPosts();
  useRegisterActions(
    posts.map((post) => ({
      id: post.title,
      name: post.title,
      keywords: post.title,
      shortcut: [],
      perform: () => router.push(`/posts/${post.slug}`),
      parent: "posts",
    })),
    []
  );
};
