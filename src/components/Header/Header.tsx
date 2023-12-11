"use client";
import React, { Fragment, useState } from "react";
import Navigator from "./Navigator";
import Headroom from "react-headroom";
import { HiBars3 } from "react-icons/hi2";
import dynamic from "next/dynamic";
import ThemeSwitch from "../ThemeSwitch";
import CommandPaletteToggle from "@/components/CommandPalette/CommandPaletteToggle";

const MobileNav = dynamic(() => import("./MobileNav"), {
  ssr: false,
});
const Header = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <Headroom className="mb-4 xl:mb-0">
        <div className="px-2 md:px-6 lg:px-8 z-30 xl:hidden flex items-center justify-between bg-opacity-95 bg-neutral-200 dark:bg-neutral-800 shadow-md py-2">
          <button
            className="text-lg p-2 right-0 dark:text-neutral-200"
            onClick={() => setShow(!show)}
          >
            <HiBars3 className="w-8 h-8" />
          </button>
        </div>
      </Headroom>
      <Headroom>
        <div
          className={`hidden xl:w-full xl:flex rounded-md gap-1 justify-around items-center z-30 bg-opacity-95 bg-neutral-200 dark:bg-neutral-800 shadow-md py-3`}
        >
          <Navigator />
        </div>
      </Headroom>
      <MobileNav show={show} toggleShow={toggleShow} />
    </Fragment>
  );
};

export default Header;
