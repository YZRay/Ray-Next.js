"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../ThemeSwitch";
import CommandPaletteToggle from "@/components/CommandPalette/CommandPaletteToggle";

const Navigator = () => {
  const pathname = usePathname();

  return (
    <div className="w-full xl:w-max xl:flex gap-6 items-center">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "after:scale-x-100" : ""
        } py-1 px-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "after:scale-x-100" : ""
        } py-1 px-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
      >
        About
      </Link>
      <Link
        href="/posts"
        className={`${
          pathname.startsWith("/posts") ? "after:scale-x-100" : ""
        }  py-1 px-2 relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
      >
        Posts
      </Link>
      <ThemeSwitch />
      <CommandPaletteToggle />
    </div>
  );
};

export default Navigator;
