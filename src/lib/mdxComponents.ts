import CustomPre from "@/components/posts/CustomPre";
import {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
} from "@/components/posts/CustomHeading";
import CustomLink from "@/components/posts/CustomLink";
import CustomSnippet from "@/components/MdxComponent/CustomSnippet";

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
};

export default mdxComponents;
