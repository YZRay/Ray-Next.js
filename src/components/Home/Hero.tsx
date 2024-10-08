"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import { Link, Button, Divider } from "@nextui-org/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <motion.section
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="grid grid-cols-1 min-h-full justify-items-center gap-4 md:gap-2 lx:gap-0"
    >
      <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 justify-center mx-auto">
        <h1 className="font-bold sm:text-2xl text-3xl xl:text-4xl flex flex-col md:flex-row">
          Hi there,
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
                "Artist",
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
        <p className="w-full text-base xl:text-lg">
          I majored in Fine Arts.While working on my art work, I started putting
          my art creation online.
        </p>
        <p className="w-full text-base xl:text-lg">
          Additionally, I utilized my spare time to learn and enhance my skills
          in frontend development.
        </p>
        <Divider className="my-4" />
        <div className="flex gap-4 flex-wrap">
          <Button
            href="https://github.com/YZRay"
            as={Link}
            variant="shadow"
            target="_blank"
            size="lg"
            rel="noopener noreferrer"
          >
            <FaGithub className="size-6" />
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/yzray-82374b26b/"
            as={Link}
            variant="shadow"
            target="_blank"
            size="lg"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-6" />
            LinkedIn
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
