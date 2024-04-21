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

// Custom components/renderers to pass to MDX.
const mdxComponents = {
  pre: CustomPre,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  h6: CustomH6,
  a: CustomLink,
  Snippet: CustomSnippet,
  CodeEmbed: CodeEmbed,
};

export default mdxComponents;
