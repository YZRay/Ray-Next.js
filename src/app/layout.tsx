import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProviders } from "@/components/Providers/ThemeProvider";
import CommandPalette from "@/components/CommandPalette";

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ray's Blog",
  description: "個人的學習筆記加紀錄一些有的沒的",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProviders>
        <body
          className={`${notoSans.className} bg-theme-light dark:bg-theme-dark text-neutral-800 dark:text-neutral-300`}
        >
          <CommandPalette>
            <Header />
            {children}
          </CommandPalette>
        </body>
      </ThemeProviders>
    </html>
  );
}
