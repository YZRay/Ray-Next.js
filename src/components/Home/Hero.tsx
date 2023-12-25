"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 min-h-full justify-items-center gap-4 md:gap-2 lx:gap-0">
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 justify-center container mx-auto">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="font-bold sm:text-2xl text-3xl xl:text-4xl"
        >
          Hello, I&apos;m{" "}
          <TypeAnimation
            sequence={[
              "Ray",
              1000,
              "Designer",
              1000,
              "Frontend Developer",
              1000,
              "Pokemon holic",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
            className="text-rose-950 dark:text-rose-300"
          />
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-9/12 text-base xl:text-lg"
        >
          I graduated from the Department of Art Industry at National Taitung
          University.
        </motion.p>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:w-9/12 text-base xl:text-lg"
        >
          Additionally, I utilized my spare time to learn and enhance my skills
          in frontend development.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex justify-center items-center rounded-full overflow-clip drop-shadow-xl w-3/4"
      >
        <Image
          src="assets/img/avatar.webp"
          width={700}
          height={700}
          alt="avatar"
          className="w-full h-auto"
          loading="lazy"
        ></Image>
      </motion.div>
    </section>
  );
};

export default Hero;
