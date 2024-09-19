import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProviders } from "@/components/Providers/ThemeProvider";
import Header from "@/components/Header/Header";

const notoSans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
const isProduction = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://ray-next-psi.vercel.app/"),
  openGraph: {
    title: "Ray's Blog",
    description: "個人的學習筆記加紀錄一些有的沒的",
    url: "https://ray-next-psi.vercel.app/",
    siteName: "Ray's Blog",
    locale: "zh-TW",
    type: "website",
    // images: [
    //   {
    //     url: "/assets/og.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Ray's Blog",
    //   },
    // ],
  },
  title: {
    template: "%s | Ray's Blog",
    default: "Ray's Blog",
  },
  description: "個人的學習筆記加紀錄一些有的沒的",
  // icons: [
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "32x32",
  //     url: "/assets/favicon-32x32.png",
  //   },
  //   {
  //     rel: "icon",
  //     type: "image/png",
  //     sizes: "16x16",
  //     url: "/assets/favicon-16x16.png",
  //   },
  //   {
  //     rel: "apple-touch-icon",
  //     sizes: "180x180",
  //     url: "/assets/apple-touch-icon.png",
  //   },
  // ],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant-TW" suppressHydrationWarning={true}>
      <body
        className={`${notoSans.className} overflow-x-hidden bg-theme-light dark:bg-theme-dark`}
      >
        <ThemeProviders>
          <Header />
          <div className="rainbow absolute top-0 left-0 right-0 bottom-0 opacity-40 hidden xl:block"></div>
          {children}
          {modal}
          <div id="modal-root"></div>
        </ThemeProviders>
      </body>
      {isProduction && <GoogleAnalytics gaId="G-4K2VLYRT3K" />}
    </html>
  );
}
