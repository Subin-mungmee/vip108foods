"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BrandService() {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        {/* Text */}
        <div
          data-aos="fade-right"
          className="
            bg-[#077a4f]
            text-white
            rounded-xl
            px-8
            md:px-12
            py-12
            shadow-lg
          "
        >
          <span className="block text-sm tracking-[0.3em] opacity-80 mb-3">
            BRAND REGISTRATION SERVICE
          </span>

          <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
            บริการขึ้นทะเบียนผลิตภัณฑ์<br />
            อย่างถูกต้องตามกฎหมาย
          </h3>

          <p className="text-base md:text-lg leading-relaxed opacity-95">
            ครอบคลุมทั้งภายในและต่างประเทศ อาทิเช่น
            <br />
            จดแจ้งขึ้นทะเบียน อย. ตามมาตรฐานของ
            กระทรวงสาธารณสุข (Food and Drug Administration),
            <br />
            ตรวจหาโภชนาการอาหาร (Guideline Daily Amounts),
            <br />
            และยื่นจดฮาลาล (Halal Food)
          </p>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          className="
            flex
            justify-center
            items-center
            bg-gray-50
            rounded-xl
            p-8
            shadow-sm
          "
        >
          <Image
            src="/FDA-Thai.png"
            alt="FDA Thailand Registration"
            width={480}
            height={360}
            className="object-contain"
            priority
          />
        </div>
      </div>


    </section>
  );
}
