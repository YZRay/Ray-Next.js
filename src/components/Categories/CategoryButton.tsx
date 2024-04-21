"use client";
import { Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const CategoryButton = ({ slug, text }: { slug: string; text: string }) => {
  const pathname = usePathname();

  const slugName = pathname === slug;

  return (
    <Button
      href={slug}
      as={Link}
      radius="full"
      size="lg"
      className={clsx(
        "hover:scale-105 transition-all bg-transparent ease duration-200 border border-darker-600 text-darker-600 dark:border-lighter-100 dark:text-lighter-100 font-medium tracking-widest uppercase",
        {
          "bg-darker-400 text-lighter-100 dark:bg-lighter-500 dark:text-darker-200":
            slugName,
        }
      )}
    >
      {text}
    </Button>
  );
};

export default CategoryButton;
