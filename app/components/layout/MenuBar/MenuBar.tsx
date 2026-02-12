"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./menu-bar.module.css";

export default function MenuBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <Image
            src="https://img2.pic.in.th/pic/Logo-vipfood.png"
            alt="VIP FOODS โรงงานผลิตน้ำพริก OEM"
            width={135}
            height={50}
            priority
          />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className={styles.toggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* MENU */}
        <nav className={`${styles.menu} ${open ? styles.open : ""}`}>
          <Link
            href="/"
            className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
            onClick={() => setOpen(false)}
          >
            หน้าแรก
          </Link>

          <Link
            href="/oem"
            className={`${styles.link} ${isActive("/oem") ? styles.active : ""}`}
            onClick={() => setOpen(false)}
          >
            บริการ OEM
          </Link>

          <Link
            href="/factory"
            className={`${styles.link} ${isActive("/factory") ? styles.active : ""
              }`}
            onClick={() => setOpen(false)}
          >
            โรงงาน & มาตรฐาน
          </Link>

          <Link
            href="/about"
            className={`${styles.link} ${isActive("/about") ? styles.active : ""
              }`}
            onClick={() => setOpen(false)}
          >
            เกี่ยวกับเรา
          </Link>

          {/* CTA */}
          <a
            href="https://line.me/ti/p/~Vip108Foods"
            target="_blank"
            className={styles.cta}
          >
            ขอใบเสนอราคา
          </a>
        </nav>
      </div>
    </header >
  );
}
