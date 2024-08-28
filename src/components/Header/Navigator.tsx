"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";
import ThemeSwitch from "../ThemeSwitch";
import { RxCross1 } from "react-icons/rx";
import { Fragment } from "react";

const links = [
  { path: "/", label: "首頁" },
  // { path: "/about", label: "關於" },
  { path: "/posts", label: "筆記" },
  { path: "/project", label: "小專案" },
  // { path: "/art", label: "繪畫" },
];
interface IProps {
  show: boolean;
  toggleShow: () => void;
}
const Navigator = ({ show, toggleShow }: IProps) => {
  const pathname = usePathname();

  const ModalOverlay = () => (
    <div
      className={`flex xl:hidden fixed top-0 right-0 bottom-0 h-screen left-0 bg-zinc-900/60 z-30 transition-all duration-300`}
      onClick={() => toggleShow()}
    />
  );

  return (
    <Fragment>
      <div
        className={`xl:w-full flex flex-col xl:flex-row xl:relative xl:gap-6 xl:justify-around xl:h-auto items-center w-1/2 sm:w-1/3 h-screen gap-2 p-4  bg-lighter-300 dark:bg-darker-400 fixed top-0 transition-all ease-linear duration-250 z-50 right-0 ${
          show ? "translate-x-0" : "translate-x-full xl:translate-x-0"
        }`}
      >
        <button
          className="inline-block xl:hidden p-2 mb-2 hover:rotate-180 transition-all duration-300"
          onClick={() => toggleShow()}
        >
          <RxCross1 className="w-8 h-8" />
        </button>
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
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </Fragment>
  );
};

export default Navigator;
