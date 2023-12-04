"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigator = () => {
  const pathname = usePathname();

  return (
    <div className="w-full xl:w-max xl:flex gap-4">
      <Link
        href="/"
        className={`${
          pathname === "/" ? "bg-slate-800 text-white" : ""
        } px-4 py-3 mb-2 xl:mb-0 xl:py-1 hover:bg-slate-800 hover:text-white transition-all duration-500 rounded-md justify-center flex items-center md:gap-2 text-lg`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${
          pathname === "/about" ? "bg-slate-800 text-white" : ""
        } px-4 py-3 mb-2 xl:mb-0 xl:py-1 hover:bg-slate-800 hover:text-white transition-all duration-500 rounded-md justify-center flex items-center md:gap-2 text-lg`}
      >
        About
      </Link>
      <Link
        href="/posts"
        className={`${
          pathname.startsWith("/posts") ? "bg-slate-800 text-white" : ""
        } px-4 py-3 mb-2 xl:mb-0 xl:py-1 hover:bg-slate-800 hover:text-white transition-all duration-500 rounded-md justify-center flex items-center md:gap-2 text-lg`}
      >
        Posts
      </Link>
    </div>
  );
};

export default Navigator;
