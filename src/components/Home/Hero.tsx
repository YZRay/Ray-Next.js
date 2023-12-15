"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="font-bold sm:text-2xl text-3xl xl:text-4xl">
          Hello, I'm{" "}
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
        </h1>
        <p>
          I graduated from the Department of Art Industry at National Taitung
          University.
        </p>
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
