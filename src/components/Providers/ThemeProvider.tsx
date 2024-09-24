"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import { ReactLenis } from "lenis/react";

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ReactLenis
          root
          options={{
            duration: 1.5,
            prevent: (node) => {
              return node.id === "modal-root";
            },
          }}
        >
          {children}
        </ReactLenis>
      </ThemeProvider>
    </NextUIProvider>
  );
}
