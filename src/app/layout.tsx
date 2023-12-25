import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { ThemeProviders } from "@/components/Providers/ThemeProvider";
const CommandPalette = dynamic(() => import("@/components/CommandPalette"), {
  ssr: false,
});
const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});
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
      <body
        className={`${notoSans.className} overflow-x-hidden bg-theme-light dark:bg-theme-dark text-neutral-800 dark:text-neutral-300`}
      >
        <ThemeProviders>
          <CommandPalette>
            <Header />
            <div className="rainbow absolute top-0 left-0 right-0 bottom-0 opacity-40 hidden xl:block"></div>
            {children}
          </CommandPalette>
        </ThemeProviders>
      </body>
    </html>
  );
}
