import React from "react";
import { SiTailwindcss, SiJavascript, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

interface SkillIcons {
  [key: string]: React.ReactNode;
}

const skillIcons: SkillIcons = {
  tailwindcss: <SiTailwindcss className="w-6 h-6" />,
  react: <FaReact className="w-6 h-6" />,
  nextjs: <TbBrandNextjs className="w-6 h-6" />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
};

const GetSkillIcon = (skill: string) => {
  const normalizedSkill = skill.toLowerCase();
  return skillIcons[normalizedSkill] || null;
};

export default GetSkillIcon;
