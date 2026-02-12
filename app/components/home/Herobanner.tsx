"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="w-full overflow-hidden">
      <Image
        data-aos="fade-up"
        src="/hero-banner.jpg"
        alt="โรงงานรับผลิตอาหาร OEM"
        width={1920}
        height={700}
        priority
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
