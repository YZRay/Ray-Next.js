import { defineDocumentType, makeSource } from "contentlayer/source-files";

import rehypeAutolinkHeadings, {
  type Options as AutolinkOptions,
} from "rehype-autolink-headings";
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { s } from "hastscript";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    Image: { type: "string", required: false },
    Introduction: { type: "string", required: true },
    excerpt: {
      type: "string",
      required: true,
    },
    author: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readTime: {
      type: "string",
      resolve: (post) => {
        const wordsPerMinute = 200;
        const noOfWords = post.body.raw.split(/\s/g).length;
        const minutes = noOfWords / wordsPerMinute;
        const readTime = Math.ceil(minutes);
        return readTime;
      },
    },
  },
}));

export default makeSource({
  // folder in which we will store our content mdx files
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      /**
       * Adds ids to headings
       */
      rehypeSlug,
      [
        /**
         * Adds auto-linking button after h1, h2, h3 headings
         */
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h2", "h3"],
          properties: { class: "heading-link" },
          content: s(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              width: "24",
              height: "24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "aria-label": "Anchor link",
            },
            [
              s("line", { x1: "4", y1: "9", x2: "20", y2: "9" }),
              s("line", { x1: "4", y1: "15", x2: "20", y2: "15" }),
              s("line", { x1: "10", y1: "3", x2: "8", y2: "21" }),
              s("line", { x1: "16", y1: "3", x2: "14", y2: "21" }),
            ]
          ),
        } satisfies Partial<AutolinkOptions>,
      ],
      [
        /**
         * Enhances code blocks with syntax highlighting, line numbers,
         * titles, and allows highlighting specific lines and words
         */
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "one-dark-pro",
          },
          grid: false,
          keepBackground: false,
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word"];
          },
        } as Partial<
          PrettyCodeOptions & { onVisitHighlightedWord(node: any): void }
        >,
      ],
    ],
  },
});
