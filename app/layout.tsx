import { ReactNode } from "react";
import localFont from "next/font/local";

import Navbar from "@/app/home/components/Navbar";
import Footer from "@/app/home/components/Footer";

import "@/app/globals.css";

const vazir = localFont({
  src: "../assets/vazirmatn-v33.003/fonts/webfonts/Vazirmatn[wght].woff2",
  variable: "--font-vazir",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
