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
    <html lang="zh-Hant-TW">
      <ThemeProviders>
        <body
          className={`${notoSans.className} overflow-x-hidden bg-theme-light dark:bg-theme-dark text-neutral-800 dark:text-neutral-300`}
        >
          <CommandPalette>
            <Header />
            <div className="rainbow absolute top-0 left-0 right-0 bottom-0 opacity-40"></div>
            {children}
          </CommandPalette>
        </body>
      </ThemeProviders>
    </html>
  );
}
