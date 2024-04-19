"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import Image from "next/image";
import { Link, Button, Divider } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="grid grid-cols-1 xl:grid-cols-2 min-h-full justify-items-center gap-4 md:gap-2 lx:gap-0"
    >
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 justify-center mx-auto">
        <h1 className="font-bold sm:text-xl text-3xl xl:text-4xl flex flex-col md:flex-row">
          Hello,
          <div>
            I&apos;m{" "}
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
              className="text-sky-500"
            />
          </div>
        </h1>
        <p className="w-full xl:w-9/12 text-base xl:text-lg">
          I graduated from the Department of Art Industry at National Taitung
          University.
        </p>
        <p className="w-full xl:w-9/12 text-base xl:text-lg">
          Additionally, I utilized my spare time to learn and enhance my skills
          in frontend development.
        </p>
        <Divider className="my-4" />
        <div>
          <Button
            href="https://github.com/YZRay"
            as={Link}
            variant="shadow"
            target="_blank"
            size="lg"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
            Github
          </Button>
        </div>
      </div>
      <div className="flex justify-center relative items-center rounded-full overflow-clip w-3/4 aspect-square">
        <Image
          src="assets/img/avatar.webp"
          fill
          alt="avatar"
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          priority
        />
      </div>
    </motion.section>
  );
};

export default Hero;
