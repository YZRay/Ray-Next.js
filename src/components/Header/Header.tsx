"use client";
import React, { Fragment, useState } from "react";
import Navigator from "./Navigator";
import Headroom from "react-headroom";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <Fragment>
      <Headroom className="mb-4 xl:mb-0">
        <div className="px-2 md:px-6 lg:px-8 z-30 xl:hidden flex items-center justify-between bg-opacity-95 bg-lighter-200 dark:bg-darker-300 shadow-md py-2">
          <button
            className="text-lg p-2 right-0"
            onClick={() => setShow(!show)}
            aria-label="Toggle Navigation"
          >
            <HiBars3 className="w-8 h-8" />
          </button>
        </div>
        <Navigator toggleShow={toggleShow} show={show} />
      </Headroom>
    </Fragment>
  );
};

export default Header;
