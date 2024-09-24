"use client";
import { useState, Fragment, useEffect } from "react";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import { usePathname } from "next/navigation";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false);

    return () => {
      setIsActive(false);
    };
  }, [pathname]);

  return (
    <Fragment>
      <button
        aria-label="Toggle Navigation"
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={
          "fixed right-0 top-0 m-5 z-[60] size-16 xl:size-20 rounded-[50%] flex items-center justify-center bg-darker-500 border-darker-100 dark:bg-darker-300 border dark:border-darker-100"
        }
      >
        <div
          className={clsx(
            "w-full before:relative after:relative before:w-2/5 after:w-2/5 before:block after:block before:h-0.5 after:h-0.5 before:bg-white after:bg-white before:m-auto after:m-auto before:transition-transform after:transition-transform before:duration-300 after:duration-300 before:top-1 after:-top-1",
            {
              "before:top-0 before:-rotate-45 after:-top-px after:rotate-45":
                isActive,
            }
          )}
        ></div>
      </button>
      <AnimatePresence mode="wait">
        {isActive && <Navigation />}
      </AnimatePresence>
    </Fragment>
  );
}
