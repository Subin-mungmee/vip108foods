"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FactoryImages() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="-mt-10 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* ===== SECTION TITLE ===== */}
        <div className="mb-4" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            โรงงานและกระบวนการผลิต
          </h2>
          <p className="mt-1 text-md text-gray-500">
            มาตรฐานสากล เพื่อคุณภาพที่มั่นใจได้
          </p>
        </div>

        {/* ===== IMAGES ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div data-aos="fade-right">
            <Image
              src="/Pic-a2.jpg"
              alt="โรงงานผลิตน้ำพริก VIP FOODS"
              width={800}
              height={600}
              className="rounded-xl w-full h-auto object-cover"
              priority
            />
          </div>

          <div data-aos="fade-left">
            <Image
              src="/Pic-a3.jpg"
              alt="กระบวนการผลิตมาตรฐานสากล VIP FOODS"
              width={800}
              height={600}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
