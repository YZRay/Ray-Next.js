import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { getPosts } = await import("@/posts");

  const posts = await getPosts();

  const postsSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${process.env.HOST}/posts/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: process.env.HOST || "",
      lastModified: new Date(),
    },
    ...postsSitemap,
  ];
}
