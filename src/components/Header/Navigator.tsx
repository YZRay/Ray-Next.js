"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { FaGithub } from "react-icons/fa6";
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
const links = [
  { path: "/", label: "首頁" },
  // { path: "/about", label: "關於" },
  { path: "/posts", label: "筆記" },
  { path: "/project", label: "專案" },
];
interface IProps {
  toggleShow: () => void;
}
const Navigator = ({ toggleShow }: IProps) => {
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
    <div className="w-full flex flex-col xl:flex-row gap-6 items-center justify-around">
      {isRouting && <Transition />}
      <nav className="flex gap-4 flex-col xl:flex-row items-center">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path ? "after:scale-x-100" : ""
            } py-1 px-2 text-lg relative after:content-[''] after:absolute after:w-full after:left-0 after:bottom-0 after:scale-x-0 after:h-[3px] rounded-lg after:bg-darker-400 after:transition-transform after:duration-300 dark:after:bg-lighter-400 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left ease-out`}
            onClick={() => toggleShow()}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex  flex-col xl:flex-row items-center gap-6">
        <div className="flex gap-4 items-center">
          {pathname !== "/" ? (
            <Button
              href="https://github.com/YZRay"
              as={Link}
              isIconOnly
              variant="shadow"
              target="_blank"
              size="md"
              className="border border-transparent dark:bg-darker-400/80 dark:border-darker-100/40"
              aria-label="Link to YZRay's GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Button>
          ) : null}
          <ThemeSwitch />
        </div>
        <CommandPaletteToggle />
      </div>
    </div>
  );
};

export default Navigator;
