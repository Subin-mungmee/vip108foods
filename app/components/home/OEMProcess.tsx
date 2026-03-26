"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  { title: "RESEARCH & DEVELOPMENT", img: "/icon-oem/1-research.png" },
  { title: "DESIGN & MEDIA PRODUCTION", img: "/icon-oem/2-graphic.png" },
  { title: "COSMETIC PLANNING & FILLING", img: "/icon-oem/3-cosmetic.png" },
  { title: "PACKAGING TEST", img: "/icon-oem/4-packaging.png" },
  { title: "PRINTING & SCREENING", img: "/icon-oem/5-printing-screen.png" },
  { title: "CERTIFICATED DOCUMENT", img: "/icon-oem/6-certificate.png" },
];

export default function OEMProcess() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <>
      {/* ================= OEM PROCESS ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#9b1c1f] to-[#ba2529] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

        {/* Title */}
        <div data-aos="fade-up" className="relative text-center text-white mb-20">
          <span className="text-sm md:text-base tracking-[0.45em] opacity-80 block mb-4">
            OEM MANUFACTURING PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            Original Equipment Manufacturer
          </h2>
        </div>

        {/* Steps */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="
                group flex flex-col items-center text-center text-white
                bg-white/10 backdrop-blur-md
                rounded-2xl px-6 py-8
                border border-white/15
                hover:bg-white/15 transition-all duration-300
              "
            >
              <div className="w-20 h-20 flex items-center justify-center mb-6">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="object-contain opacity-90 group-hover:opacity-100 transition"
                />
              </div>

              <span className="text-sm md:text-base leading-snug tracking-wide font-medium">
                {index + 1}. {step.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BRAND SERVICE ================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-20 px-4 items-center">

          {/* Image */}
          <div
            data-aos="fade-right"
            className="flex justify-center md:justify-start scale-110 md:scale-125"
          >
            <Image
              src="/groupbrand-your-branding.png"
              alt="OEM Brand Service"
              width={820}
              height={560}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Content */}
          <div data-aos="fade-left">
            <span className="text-sm tracking-[0.4em] text-[#ba2529] font-medium block mb-6">
              ALL-IN-ONE BRAND SERVICE
            </span>

            <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
              จบครบทุกขั้นตอน
              <br />
              <span className="font-medium">สร้างแบรนด์ในที่เดียว</span>
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-xl">
              ให้บริการผลิตแบบ OEM ครอบคลุมตั้งแต่การพัฒนาสูตร
              การออกแบบ การผลิต และการบรรจุ
              พร้อมการจัดเตรียมเอกสารรับรอง
              ภายใต้มาตรฐานโรงงานที่ได้รับการรับรองในระดับสากล
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 mb-14 text-base">
              <ul className="space-y-3">
                <li>— Research & Development</li>
                <li>— Design & Media Production</li>
                <li>— Cosmetic Planning & Filling</li>
              </ul>
              <ul className="space-y-3">
                <li>— Packaging Test</li>
                <li>— Printing & Screening</li>
                <li>— Certificated Document</li>
              </ul>
            </div>

            {/* CTA */}
            <a
              href="https://line.me/ti/p/~Vip108Foods"
              className="
                inline-flex items-center justify-center
                border border-[#077a4f]
                text-[#077a4f]
                px-14 py-4
                rounded-full
                text-base font-medium tracking-wide
                hover:bg-[#077a4f] hover:text-white
                transition
                focus:outline-none focus:ring-2 focus:ring-[#077a4f]/40
              "
            >
              ปรึกษาฟรีกับโรงงาน
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
