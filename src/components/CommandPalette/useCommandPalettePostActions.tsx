// useCommandPalettePostActions.ts
"use client";
import { useRegisterActions } from "kbar";
import { useRouter } from "next/navigation";
import { allPosts } from "contentlayer/generated";

interface PostForCommandPalette {
  title: string;
  url: string;
}

export const useCommandPalettePostActions = () => {
  const router = useRouter();

  // 注册 KBar 的 actions
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
