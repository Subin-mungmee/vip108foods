"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="
          relative w-full
          aspect-[21/9]
          max-h-[55svh] sm:max-h-[65svh] md:max-h-[80vh] lg:max-h-screen
        "
      >
        <Image
          src="/hero.jpg"
          alt="โรงงานผลิตน้ำพริก OEM VIP FOODS"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
            sm:object-[50%_45%]
            md:object-[50%_40%]
            lg:object-center
          "
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <h1 className="sr-only">
        โรงงานผลิตน้ำพริก OEM มาตรฐานสากล VIP FOODS
      </h1>
    </section>
  );
}
