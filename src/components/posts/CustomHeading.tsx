type CustomHeadingProps = React.ComponentPropsWithoutRef<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> & { Component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" };
import { GoHash } from "react-icons/go";

function CustomHeading({
  Component,
  id,
  children,
  ...otherProps
}: CustomHeadingProps) {
  return (
    <Component
      id={id}
      className="group scroll-mt-24 whitespace-pre-wrap flex items-center gap-2"
      {...otherProps}
    >
      <a
        href={id && `#${id}`}
        className="inline-flex h-6 w-6 items-center justify-center text-lg no-underline decoration-0"
        aria-label="Anchor"
      >
        <GoHash className="h-4 w-4" />
      </a>
      <span className="font-bold">{children}</span>
    </Component>
  );
}

export const CustomH1 = (props: React.ComponentPropsWithoutRef<"h1">) => (
  <CustomHeading Component="h1" {...props} />
);
export const CustomH2 = (props: React.ComponentPropsWithoutRef<"h2">) => (
  <CustomHeading Component="h2" {...props} />
);
export const CustomH3 = (props: React.ComponentPropsWithoutRef<"h3">) => (
  <CustomHeading Component="h3" {...props} />
);
export const CustomH4 = (props: React.ComponentPropsWithoutRef<"h4">) => (
  <CustomHeading Component="h4" {...props} />
);
export const CustomH5 = (props: React.ComponentPropsWithoutRef<"h5">) => (
  <CustomHeading Component="h5" {...props} />
);
export const CustomH6 = (props: React.ComponentPropsWithoutRef<"h6">) => (
  <CustomHeading Component="h6" {...props} />
);
