import { ReactNode } from "react";
import { Vazirmatn } from "next/font/google";

import Navbar from "@/app/home/components/Navbar";
import Footer from "@/app/home/components/Footer";

import "@/app/globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
