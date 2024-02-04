"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 right-full w-screen h-screen bottom-0 z-[9999] bg-lighter-400 dark:bg-darker-400"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 right-full w-screen h-screen bottom-0 z-[998] bg-lighter-300 dark:bg-darker-300"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 right-full w-screen h-screen bottom-0 z-[997] bg-lighter-200 dark:bg-darker-200"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
