"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import classes from "./button.module.css";
import { FaArrowDown } from "react-icons/fa";
const CollapseButton = () => {
  const buttonContent = ["😂", "😒", "😎", "😵", "😴"];
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex flex-col gap-1 items-center justify-center h-72 relative">
      <span className="animate-bounce flex flex-col items-center">
        點我！
        <FaArrowDown />
      </span>
      <div className="flex items-center justify-center">
        <Button
          className={`rounded-[50%] relative z-[1] ${classes["toggle-btn"]} transition-all duration-300`}
          size="icon"
          variant="default"
          aria-label="demo"
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          ✖️
        </Button>
        <nav
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            classes["nav-item"]
          } ${collapse ? classes["collapse"] : ""}`}
        >
          {buttonContent.map((item, index) => (
            <Button
              key={index}
              variant="default"
              aria-label="demo"
              size="icon"
              className={`offset-path-[100px] rounded-[50%] ${classes["btn-item"]}`}
            >
              {item}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CollapseButton;
