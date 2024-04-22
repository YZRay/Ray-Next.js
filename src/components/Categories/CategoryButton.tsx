"use client";
import { Link, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CategoryButton = ({ slug, text }: { slug: string; text: string }) => {
  const pathname = usePathname();
  const slugName = pathname === slug;
  const router = useRouter();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      transition={{ type: "spring" }}
      exit={{
        opacity: 1,
        scale: 1,
      }}
    >
      <Button
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
        onClick={() => router.push(slug)}
      >
        {text}
      </Button>
    </motion.div>
  );
};

const CategoryButtonGroup = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex gap-x-4 gap-y-2 mt-4 mb-6 flex-wrap"
    >
      {children}
    </motion.div>
  );
};

export { CategoryButton, CategoryButtonGroup };
