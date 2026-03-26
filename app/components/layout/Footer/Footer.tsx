"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaLine,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section className="bg-gradient-to-r from-[#077a4f] to-[#0a8f60] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6">
            ตอบโจทย์การสร้างแบรนด์ของท่าน
            <br className="hidden md:block" />
            ด้วยทีมงานมืออาชีพของเรา
          </h2>

          <p className="text-base md:text-lg opacity-95 max-w-3xl mx-auto mb-10">
            ครบทุกขั้นตอน ตั้งแต่พัฒนาสูตร การผลิต การขึ้นทะเบียน อย.
            จนถึงการสร้างแบรนด์ให้เติบโตอย่างยั่งยืน
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/about"
              className="
                inline-flex items-center justify-center
                bg-white text-[#077a4f]
                font-semibold
                px-8 py-4
                rounded-full
                shadow-lg
                hover:scale-105
                transition
              "
            >
              ปรึกษาฟรีกับโรงงาน
            </a>

            <a
              href="/oem"
              className="
                inline-flex items-center justify-center
                border border-white/80
                px-8 py-4
                rounded-full
                font-medium
                hover:bg-white hover:text-[#077a4f]
                transition
              "
            >
              ดูบริการ OEM
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#ba2529] text-white">
        {/* ===== Social Bar ===== */}
        <div className="border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm tracking-wide opacity-90">
              ติดต่อสอบถาม
            </span>

            <div className="flex items-center gap-4 text-lg">
              <a href="#" className="hover:opacity-70 transition"><FaFacebookF /></a>
              <a href="#" className="hover:opacity-70 transition"><FaTwitter /></a>
              <a href="#" className="hover:opacity-70 transition"><FaGoogle /></a>
              <a href="#" className="hover:opacity-70 transition"><FaInstagram /></a>
              <a href="#" className="hover:opacity-70 transition"><FaLinkedin /></a>
              <a href="#" className="hover:opacity-70 transition"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* ===== Main Footer ===== */}
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo */}
          <div>
            <Image
              src="/white-Logo-vipfood.png"
              alt="VIP 108 FOODS MARKET"
              width={150}
              height={55}
              className="mb-4"
            />
            <p className="font-medium mb-2">VIP 108 FOODS MARKET</p>
            <p className="text-sm leading-relaxed opacity-90">
              โรงงานผลิตอาหารประเภทน้ำพริก แบบ OEM
              มาตรฐาน GHP ให้บริการครบวงจร
              ตอบโจทย์ทุกแบรนด์
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h6 className="font-semibold mb-4 tracking-wide">
              VIP 108 FOODS
            </h6>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="/" className="hover:underline">หน้าแรก</a></li>
              <li><a href="/oem" className="hover:underline">บริการของเรา</a></li>
              <li><a href="/about" className="hover:underline">เกี่ยวกับเรา</a></li>
              <li><a href="#" className="hover:underline">ประเภทน้ำพริก</a></li>
            </ul>
          </div>

          {/* Product Types */}
          <div>
            <h6 className="font-semibold mb-4 tracking-wide">
              ประเภทสินค้า
            </h6>
            <ul className="space-y-2 text-sm opacity-90">
              <li>พริกแกง</li>
              <li>น้ำจิ้ม</li>
              <li>น้ำพริก</li>
              <li>เครื่องจิ้ม</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-semibold mb-4 tracking-wide">
              ติดต่อเรา
            </h6>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex gap-2">
                <FaHome className="mt-1 shrink-0" />
                <span>
                  176 หมู่ 3 ต.ค้างพลู อ.โนนไทย
                  จ.นครราชสีมา 30220.
                </span>
              </li>
              <li className="flex gap-2">
                <FaEnvelope />
                vip108.foodsandmarket@gmail.com
              </li>
              <li className="flex gap-2">
                <FaPhone />
                061-424-6362
              </li>
              <li className="flex gap-2">
                <FaLine />
                0968782740
              </li>
            </ul>
          </div>
        </div>

        {/* ===== Copyright ===== */}
        <div className="bg-black/10 text-center text-sm py-4">
          © 2025 Copyright{" "}
          <a
            href="https://www.vip108foods-market.com/"
            className="underline hover:opacity-80"
          >
            VIP108FOODSMARKET.COM
          </a>
        </div>
      </footer>
    </>
  );
}
