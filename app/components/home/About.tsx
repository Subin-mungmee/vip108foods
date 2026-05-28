"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="relative">
            {/* 🔴 Red Banner */}
            <div className="h-64 bg-[#ba2529]" />

            {/* Content Card */}
            <div className="relative -mt-40 pb-20">
                <div className="container mx-auto px-4">
                    <div
                        className="
              bg-white
              rounded-2xl
              shadow-xl
              grid
              md:grid-cols-2
              gap-10
              p-8
              md:p-14
            "
                    >
                        {/* Text */}
                        <div data-aos="fade-right">
                            <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-[#ba2529]">
                                ABOUT US
                            </span>

                            <h2 className="text-[#ba2529] text-3xl md:text-4xl font-bold mb-2">
                                บริษัท วีไอพี 108 ฟู้ดส์ แอนด์ มาร์เก็ต จำกัด
                            </h2>

                            <h4 className="text-gray-600 text-lg md:text-xl mb-4">
                                VIP 108 FOODS AND MARKET CO.,LTD.
                            </h4>

                            <div className="w-16 h-1 bg-[#ba2529] mb-6" />

                            <p className="text-gray-800 text-base md:text-[16.5px] leading-loose">
                                เป็นโรงงานผลิตอาหารประเภทน้ำพริก ดำเนินกิจการแบบ OEM
                                ตามมาตรฐาน <strong>GHP</strong> ตอบสนองความต้องการของลูกค้าได้อย่างครบวงจร
                                พร้อมให้บริการในรูปแบบ{" "}
                                <strong>ONE STOP SERVICE</strong>{" "}
                                โดยลูกค้าสามารถเลือกสินค้าจากสูตรมาตรฐานที่มีคุณภาพหลากหลายประเภท
                                ครอบคลุมทุกรสชาติ หรือคิดค้นสูตรเฉพาะภายใต้แบรนด์ของลูกค้าได้เอง
                                สามารถกำหนดคุณสมบัติ รสชาติ และกลิ่นได้ตามความต้องการ
                                พร้อมบริการขึ้นทะเบียนองค์การอาหารและยา
                                ภายใต้แบรนด์ของลูกค้าเอง
                            </p>
                        </div>

                        {/* Image */}
                        <div
                            data-aos="fade-left"
                            className="flex items-center justify-center"
                        >
                            <a
                                href="https://drive.google.com/file/d/1WGBKHb4zr2STlu7eINJd94bJDft0W0_C/preview"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Image
                                    src="/Pic video-1.png"
                                    alt="VIP 108 FOODS MARKET"
                                    width={600}
                                    height={420}
                                    className="
        rounded-xl
        shadow-lg
        transition-transform
        duration-500
        hover:scale-105
        cursor-pointer
      "
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
