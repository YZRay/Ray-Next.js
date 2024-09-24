import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./animation";
import MyLink from "./Link";
import ThemeSwitch from "../ThemeSwitch";
import Curve from "./Curve";
import Link from "next/link";

const navItems = [
  { href: "/", title: "首頁" },
  // { href: "/about",title: "關於" },
  { href: "/posts", title: "筆記" },
  { href: "/project", title: "小專案" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={
        "h-dvh bg-darker-200 dark:bg-darker-400 fixed right-0 top-0 text-white z-50"
      }
    >
      <Curve />
      <nav className={"h-full p-20 xl:p-24 flex flex-col justify-between"}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={"flex flex-col text-2xl xl:text-3xl gap-4 mt-20"}
        >
          {navItems.map((data, index) => {
            return (
              <MyLink
                key={index}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                data={{ ...data, index }}
              />
            );
          })}
          <ThemeSwitch />
        </div>
        <div className="flex w-full text-sm text-lighter-200 gap-5 justify-between">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yzray-82374b26b/"
          >
            LinkedIn
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/YZRay"
          >
            Github
          </Link>
        </div>
      </nav>
    </motion.div>
  );
}
