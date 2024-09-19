"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@nextui-org/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = async () => {
    if (!ref.current) return;
    // @ts-ignore
    if (document.startViewTransition) {
      // @ts-ignore
      await document.startViewTransition(() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }).ready;
      // @ts-ignore
      const { top, left } = ref.current.getBoundingClientRect();
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(
        Math.max(left, right),
        Math.max(top, bottom)
      );

      const clipPathAnimate = [
        `circle(0px at ${left}px ${top}px)`,
        `circle(${maxRadius}px at ${left}px ${top}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath:
            resolvedTheme === "light"
              ? clipPathAnimate
              : clipPathAnimate.reverse(),
        },
        {
          duration: 400,
          easing: "ease-in",
          pseudoElement:
            resolvedTheme === "light"
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
        }
      );
    } else {
      setTheme(resolvedTheme === "light" ? "dark" : "light");
    }
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
        <IoMdSunny className="size-5" />
      ) : (
        <IoMdMoon className="size-5" />
      )}
    </Button>
  );
}
