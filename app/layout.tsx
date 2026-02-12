import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Thai,
  Anuphan,
} from "next/font/google";
import "./globals.css";

import MenuBar from "@/components/layout/MenuBar/MenuBar";
import Footer from "@/components/layout/Footer/Footer";


/* ===== Fonts ===== */

// ไทย (ฟอนต์หลัก)
const anuphan = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap",
});

// ไทย (สำรอง / เอกสาร)
const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-thai",
  display: "swap",
});

// อังกฤษ / UI
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// โค้ด
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ===== SEO : GLOBAL ===== */
export const metadata: Metadata = {
  title: {
    default: "โรงงานผลิตน้ำพริก OEM มาตรฐานสากล | VIP FOODS",
    template: "%s | VIP FOODS",
  },
  description:
    "โรงงานผลิตน้ำพริก OEM รับสร้างแบรนด์ครบวงจร ได้มาตรฐาน GHP / HACCP พร้อมส่งออกทั้งในและต่างประเทศ โดย VIP FOODS",
  keywords: [
    "โรงงานผลิตน้ำพริก",
    "น้ำพริก OEM",
    "รับผลิตน้ำพริก",
    "โรงงาน OEM อาหาร",
    "สร้างแบรนด์น้ำพริก",
  ],
  authors: [{ name: "VIP FOODS" }],
};

/* ===== Root Layout ===== */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`
        scroll-smooth
        ${anuphan.variable}
        ${notoThai.variable}
        ${geistSans.variable}
        ${geistMono.variable}
      `}
    >
      <body
        className="
          antialiased
          bg-white
          text-gray-900
        "
      >
        <MenuBar />

        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
