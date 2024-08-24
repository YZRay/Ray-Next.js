"use client";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

type Props = React.ComponentPropsWithoutRef<"a">;

const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith("/");
  const isAnchorLink = href && href.startsWith("#");

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a
      className="flex items-center gap-2 py-1 decoration-0 border-b-1 border-transparent hover:border-darker-400 dark:hover:border-lighter-400 transition-all duration-300 font-semibold"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    >
      {typeof children === "string" && <FaLink className="size-4 shrink-0" />}
      {children}
    </a>
  );
};

export default CustomLink;
