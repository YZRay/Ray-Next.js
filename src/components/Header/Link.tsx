"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "./animation";

type LinkProps = {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: any;
};

const MyLink = ({ data, isActive, setSelectedIndicator }: LinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={"relative flex items-center"}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="size-2 bg-lighter-100 rounded-[50%] absolute -left-7"
      ></motion.div>
      <Link className="text-lighter-100" href={href}>
        {title}
      </Link>
    </motion.div>
  );
};

export default MyLink;
