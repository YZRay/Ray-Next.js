"use client";
import { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import { RxCross1 } from "react-icons/rx";

const Navigator = dynamic(() => import("./Navigator"), {
  ssr: false,
});
interface IProps {
  show: boolean;
  toggleShow: () => void;
}
const MobileNav = ({ show, toggleShow }: IProps) => {
  const ModalOverlay = () => (
    <div
      className={`flex xl:hidden fixed top-0 right-0 bottom-0 left-0 bg-zinc-900/60 z-30 transition-all duration-500`}
      onClick={() => toggleShow()}
    />
  );

  useEffect(() => {
    // 在 modal 打開時禁止背景滾動
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      // 在 modal 關閉時還原背景滾動
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <Fragment>
      <div
        className={`shadow-md w-1/2 sm:w-1/3 w h-screen xl:hidden flex flex-col items-end gap-2 p-4 bg-lighter-300 dark:bg-darker-400 fixed top-0 transition-all ease-linear duration-700 z-50 ${
          show ? "right-0" : "-right-full"
        }`}
      >
        <button
          className="p-2 mb-2 hover:rotate-180 transition-all duration-300"
          onClick={() => toggleShow()}
        >
          <RxCross1 className="w-8 h-8" />
        </button>
        <Navigator toggleShow={toggleShow} />
      </div>
      {show ? <ModalOverlay /> : <></>}
    </Fragment>
  );
};

export default MobileNav;
