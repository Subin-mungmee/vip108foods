
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutUs() {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="relative">
            {/* Red Banner */}
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
                                ตามมาตรฐาน <strong>GHP</strong>{" "}
                                ตอบสนองความต้องการของลูกค้าได้อย่างครบวงจร
                                พร้อมให้บริการในรูปแบบ{" "}
                                <strong>ONE STOP SERVICE</strong>{" "}
                                โดยลูกค้าสามารถเลือกสินค้าจากสูตรมาตรฐานที่มีคุณภาพหลากหลายประเภท
                                ครอบคลุมทุกรสชาติ หรือคิดค้นสูตรเฉพาะภายใต้แบรนด์ของลูกค้าได้เอง
                                สามารถกำหนดคุณสมบัติ รสชาติ และกลิ่นได้ตามความต้องการ
                                พร้อมบริการขึ้นทะเบียนองค์การอาหารและยา
                                ภายใต้แบรนด์ของลูกค้าเอง
                            </p>
                        </div>

                        {/* Video Preview */}
                        <div
                            data-aos="fade-left"
                            className="flex items-center justify-center w-full"
                        >
                            <div className="relative w-full max-w-[600px] overflow-hidden rounded-xl shadow-lg">
                                {isPlaying ? (
                                    <video
                                        src="https://acswnhcaohzcsrju.public.blob.vercel-storage.com/VIP-108-FOODS-AND-MARKET.mp4"
                                        controls
                                        autoPlay
                                        playsInline
                                        preload="metadata"
                                        className="block w-full h-auto"
                                    >
                                        เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
                                    </video>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying(true)}
                                        aria-label="เล่นวิดีโอ VIP 108 FOODS AND MARKET"
                                        className="group relative block w-full cursor-pointer overflow-hidden"
                                    >
                                        {/* Cover Image */}
                                        <Image
                                            src="/Pic video-1.png"
                                            alt="VIP 108 FOODS AND MARKET"
                                            width={600}
                                            height={420}
                                            priority
                                            className="
                                                block
                                                w-full
                                                h-auto
                                                object-cover
                                                transition-transform
                                                duration-500
                                                group-hover:scale-105
                                            "
                                        />

                                        {/* Dark Overlay + Play Button */}
                                        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/35">
                                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="#ba2529"
                                                    className="ml-1 h-8 w-8"
                                                >
                                                    <path d="M7 4.5v15l12-7.5-12-7.5z" />
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
