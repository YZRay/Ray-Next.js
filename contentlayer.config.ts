import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  disableImportAliasWarning: true,
  baseUrl: ".",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    Image: { type: "string", required: false, default: "/assets/img/git.webp" },
    excerpt: {
      type: "string",
      required: true,
    },
    author: { type: "string", required: true, default: "Ray" },
    tags: {
      type: "list",
      of: { type: "string" },
    },
    isPublished: { type: "boolean", default: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: "string",
      resolve: (post) => {
        const wordsPerMinute = 100;
        const noOfWords = post.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));

const codeOptions = {
  theme: "one-dark-pro",
  grid: false,
};

export default makeSource({
  // folder in which we will store our content mdx files
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      [
        // @ts-ignore
        rehypePrettyCode,
        codeOptions,
      ],
    ],
  },
});
