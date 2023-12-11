"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../ThemeSwitch";
import CommandPaletteToggle from "@/components/CommandPalette/CommandPaletteToggle";

const Navigator = () => {
  const pathname = usePathname();

  return (
    <div className="w-full xl:w-max xl:flex gap-4 items-center">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "bg-neutral-700 text-white dark:bg-neutral-600 dark:text-neutral-50"
            : ""
        } px-4 py-3 mb-2 xl:mb-0 xl:py-1 hover:bg-neutral-600 hover:dark:bg-neutral-600 dark:text-neutral-100 hover:text-white transition-all duration-500 rounded-full justify-center flex items-center md:gap-2 text-lg font-semibold`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about"
            ? "bg-neutral-700 text-white dark:bg-neutral-600 dark:text-neutral-50"
            : ""
        } px-4 py-3 mb-2 xl:mb-0 xl:py-1 hover:bg-neutral-600 hover:dark:bg-neutral-600 dark:text-neutral-100 hover:text-white transition-all duration-500 rounded-full justify-center flex items-center md:gap-2 text-lg font-semibold`}
      >
        About
      </Link>
      <Link
        href="/posts"
        className={`${
          pathname.startsWith("/posts")
            ? "bg-neutral-700 text-white dark:bg-neutral-600 dark:text-neutral-50"
            : ""
        } px-4 py-3 mb-2 xl:mb-0 xl:py-1 hover:bg-neutral-600 hover:dark:bg-neutral-600 dark:text-neutral-100 hover:text-white transition-all duration-500 rounded-full justify-center flex items-center md:gap-2 text-lg font-semibold`}
      >
        Posts
      </Link>
      <ThemeSwitch />
      <CommandPaletteToggle />
    </div>
  );
};

export default Navigator;
