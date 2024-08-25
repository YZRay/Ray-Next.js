import type { MDXComponents } from "mdx/types";
import CustomPre from "@/components/Posts/CustomPre";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from "@/components/Posts/CustomHeading";
import CustomLink from "@/components/Posts/CustomLink";
import CustomSnippet from "@/components/MdxComponent/CustomSnippet";
import CodeEmbed from "@/components/MdxComponent/CodeEmbed";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: CustomPre,
    a: CustomLink,
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    h4: CustomH4,
    h5: CustomH5,
    h6: CustomH6,
    Snippet: CustomSnippet,
    CodeEmbed: CodeEmbed,
    ...components,
  };
}
