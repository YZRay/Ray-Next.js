"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-12 min-h-full">
      <div className="flex flex-col col-span-7 gap-2 md:gap-4 lg:gap-5 justify-center container mx-auto">
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
              1300,
              "Designer",
              1300,
              "Frontend Developer",
              1300,
              "Pokemon holic",
              1300,
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
      <div className="col-span-5">
        <Image
          src="assets/img/avatar.png"
          width={700}
          height={700}
          alt="avatar"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
