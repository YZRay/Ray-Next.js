"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = async () => {
    if (!ref.current) return;

    await document.startViewTransition(() => {
      setTheme(resolvedTheme === "light" ? "dark" : "light");
    }).ready;

    const { top, left } = ref.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left}px ${top}px)`,
          `circle(${maxRadius}px at ${left}px ${top}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-in",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  if (!mounted) return null;
  return (
    <Button
      onClick={handleThemeChange}
      variant="shadow"
      isIconOnly
      size="md"
      color={resolvedTheme === "dark" ? "warning" : "default"}
      ref={ref}
    >
      {resolvedTheme === "dark" ? (
        <IoMdSunny className="w-5 h-5" />
      ) : (
        <IoMdMoon className="w-5 h-5" />
      )}
    </Button>
  );
}
