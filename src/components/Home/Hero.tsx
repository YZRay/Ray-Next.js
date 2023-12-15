"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-full">
      <div className="w-full h-full">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center h-full container mx-auto">
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
                "Artist",
                1300,
                "Designer",
                1300,
                "Frontend Developer",
                1300,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I graduated from the Department of Art Industry at National Taitung
            University.
          </motion.p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          inventore rerum? Eaque soluta nulla, earum possimus qui voluptatibus
          sit quasi!
        </p>
      </div>
    </section>
  );
};

export default Hero;
