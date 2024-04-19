"use client";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/navigation";
import { allPosts } from "contentlayer/generated";

export const useCommandPalettePostActions = () => {
  const router = useRouter();

  useRegisterActions(
    allPosts.map((post) => ({
      id: post.title,
      name: post.title,
      keywords: post.title,
      shortcut: [],
      perform: () => router.push(post.url),
      parent: "posts",
    })),
    []
  );
};
