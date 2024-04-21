import { Priority } from "kbar";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { AiFillProject } from "react-icons/ai";
import { FaPenSquare, FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";

export const useActions = () => {
  const router = useRouter();
  const { setTheme } = useTheme();
  const actions = [
    // Page section
    {
      id: "home",
      name: "首頁",
      keywords: "home homepage index 首頁",
      perform: () => router.push("/"),
      icon: <HiHome className="h-6 w-6" />,
      section: {
        name: "頁面",
        priority: Priority.HIGH,
      },
    },
    // {
    //   id: "about",
    //   name: "關於",
    //   keywords: "about 關於",
    //   perform: () => router.push("/about"),
    //   icon: <HiPuzzle className="h-6 w-6" />,
    //   section: {
    //     name: "頁面",
    //     priority: Priority.HIGH,
    //   },
    // },
    {
      id: "projects",
      name: "專案",
      perform: () => router.push("/project"),
      keywords: "side sideProjects project work",
      icon: <AiFillProject className="h-6 w-6" />,
      section: "頁面",
    },
    {
      id: "posts",
      name: "筆記",
      keywords: "posts article 貼文 筆記 文章 note 寫作 search words",
      icon: <FaPenSquare className="h-6 w-6" />,
      section: "搜尋筆記",
    },
    // 筆記分類
    {
      id: "categories",
      name: "分類",
      keywords: "categories posts 筆記分類 分類",
      icon: <BiSolidCategoryAlt className="h-6 w-6" />,
      section: "搜尋筆記",
    },
    {
      id: "categories-js",
      name: "JavaScript",
      keywords: "JavaScript javascript typescript TypeScript",
      perform: () => router.push("/categories/javascript"),
      icon: <RiJavascriptFill className="h-6 w-6" />,
      parent: "categories",
      section: "搜尋筆記",
    },
    {
      id: "categories-react",
      name: "React",
      keywords: "React react Nextjs next",
      perform: () => router.push("/categories/react"),
      icon: <FaReact className="h-6 w-6" />,
      parent: "categories",
      section: "搜尋筆記",
    },
    {
      id: "categories-nodejs",
      name: "Nodejs",
      keywords: "nodejs node javascript",
      perform: () => router.push("/categories/nodejs"),
      icon: <FaNode className="h-6 w-6" />,
      parent: "categories",
      section: "搜尋筆記",
    },
    {
      id: "categories-css",
      name: "Css / Scss",
      keywords: "Css Scss",
      perform: () => router.push("/categories/css"),
      icon: <FaCss3Alt className="h-6 w-6" />,
      parent: "categories",
      section: "搜尋筆記",
    },
    // - Theme toggle
    {
      id: "theme",
      name: "切換主題",
      keywords: "change toggle theme mode color 切換 更換 顏色 主題 模式",
      icon: <HiLightBulb className="h-6 w-6" />,
      section: "操作",
    },
    {
      id: "theme-light",
      name: "明亮模式",
      keywords: "theme light white mode color 顏色 主題 模式 明亮 白色",
      perform: () => setTheme("light"),
      icon: <IoMdSunny className="h-6 w-6" />,
      parent: "theme",
      section: "操作",
    },
    {
      id: "theme-dark",
      name: "暗黑模式",
      keywords: "theme dark black mode color 顏色 主題 模式 暗黑 黑色 深夜",
      perform: () => setTheme("dark"),
      icon: <IoMdMoon className="h-6 w-6" />,
      parent: "theme",
      section: "操作",
    },
  ];

  return actions;
};
