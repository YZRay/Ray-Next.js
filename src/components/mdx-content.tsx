import { useMDXComponent } from "next-contentlayer/hooks";
import { FC } from "react";
import mdxComponents from "@/lib/mdxComponents";

interface IProps {
  code: string;
}

const MDXContent: FC<IProps> = ({ code }) => {
  const Component = useMDXComponent(code);
  return <Component components={mdxComponents} />;
};

export default MDXContent;

// components/mdx-components.tsx
/**
 * Image component that uses figure tag with optional title
 */
const img = ({ src, alt, title }: React.HTMLProps<HTMLImageElement>) => {
  return (
    <figure className="flex h-fit w-fit flex-col kg-card" aria-label={alt}>
      <img src={src || ""} alt={alt} />
      {title && <figcaption className="text-center">{title}</figcaption>}
    </figure>
  );
};

/**
 * Replace the p elements with div elements, as p elements have restrictions on
 * the types of elements that can be nested inside them.
 */
const p = (props: React.HTMLProps<HTMLParagraphElement>) => {
  return <div className="my-6" {...props} />;
};

export const MDXComponents = { img, p };
