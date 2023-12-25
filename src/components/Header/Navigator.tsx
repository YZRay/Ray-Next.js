"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const CommandPaletteToggle = dynamic(
  () => import("@/components/CommandPalette/CommandPaletteToggle"),
  {
    ssr: false,
  }
);
const ThemeSwitch = dynamic(() => import("../ThemeSwitch"), {
  ssr: false,
});
const Transition = dynamic(() => import("../Transition"), {
  ssr: false,
});
const Navigator = () => {
  const [isRouting, setIsRouting] = useState(false);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== pathname) {
      setIsRouting(true);
    }
  }, [pathname, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(pathname);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div className="w-full flex flex-col xl:flex-row xl:w-max xl:flex gap-6 items-center">
      {isRouting && <Transition />}
      <Link
        href="/"
        className={`${
          pathname === "/" ? "after:scale-x-100" : ""
        } py-1 px-2 text-lg relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
      >
        首頁
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "after:scale-x-100" : ""
        } py-1 px-2 text-lg relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
      >
        關於
      </Link>
      <Link
        href="/posts"
        className={`${
          pathname.startsWith("/posts") ? "after:scale-x-100" : ""
        }  py-1 px-2 text-lg relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-neutral-700 after:transition-transform after:duration-300 dark:after:bg-neutral-200 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
      >
        文章
      </Link>
      <ThemeSwitch />
      <CommandPaletteToggle />
    </div>
  );
};

export default Navigator;
