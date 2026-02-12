"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Taste() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const dips = [
    "/dip-1.jpg",
    "/dip-2.jpg",
    "/dip-3.jpg",
    "/dip-4.jpg",
    "/dip-5.jpg",
    "/dip-6.jpg",
    "/dip-7.jpg",
    "/dip-8.jpg",
  ];

  return (
    <section className="pt-0 pb-14 bg-[#f7f7f7] -mt-8 overflow-x-hidden">
      {/* Heading */}
      <div
        className="text-center mb-8 max-w-4xl mx-auto px-4"
        data-aos="zoom-in"
      >
        <span className="inline-block mb-1 text-xs tracking-widest text-[#ba2529] font-medium">
          OEM PRODUCT RANGE
        </span>

        <h1 className="text-[#2f2f2f] text-3xl md:text-4xl font-semibold mb-2">
          ประเภทและรสชาติของน้ำพริก
        </h1>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          สูตรมาตรฐานและสูตรเฉพาะ สำหรับการผลิตแบบ OEM
          ภายใต้มาตรฐานโรงงานที่ได้รับการรับรอง
        </p>
      </div>

      {/* Grid Images */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-8
          max-w-6xl
          mx-auto
          px-4
        "
      >
        {dips.map((dip, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 80}
            className="
              bg-white
              border
              border-gray-200
              rounded-lg
              p-4
              flex
              flex-col
              items-center
              shadow-sm
              hover:shadow-md
              transition-shadow
            "
          >
            <div className="w-full mb-3">
              <Image
                src={dip}
                alt={`dip-${index + 1}`}
                width={600}
                height={600}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-contain w-full h-auto"
              />
            </div>

            <div className="text-sm text-gray-500 tracking-wide">
              OEM Chili Paste
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
