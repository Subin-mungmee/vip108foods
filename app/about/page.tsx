"use client";

import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaFacebookF,
    FaLine,
} from "react-icons/fa";

export default function ContactPage() {
    return (
        <main className="w-full bg-white">

            {/* ===== HERO ===== */}
            <section className="bg-gradient-to-r from-[#ba2529] to-[#8f1c1f] text-white">
                <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16 md:py-20 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-kanit tracking-wide">
                        ติดต่อเรา
                    </h1>

                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90">
                        Professional OEM Food Manufacturer.
                    </p>
                </div>
            </section>


            {/* ================================================= */}
            {/* ===== VIDEO BANNER ============================== */}
            {/* ================================================= */}

            <section className="w-full bg-black">

                <div className="w-full max-w-[1920px] mx-auto">

                    <div
                        className="
                            relative
                            w-full
                            h-[320px]
                            sm:h-[380px]
                            md:h-[430px]
                            lg:h-[500px]
                            xl:h-[560px]
                            overflow-hidden
                        "
                    >

                        <iframe
                            src="https://drive.google.com/file/d/1WGBKHb4zr2STlu7eINJd94bJDft0W0_C/preview?autoplay=1"
                            className="absolute inset-0 w-full h-full border-0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            loading="eager"
                            title="VIP 108 FOODS MARKET"
                        />

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* ===== CONTACT CONTENT =========================== */}
            {/* ================================================= */}

            <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-16 md:py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">


                    {/* ===== MAP ===== */}

                    <div className="w-full">

                        <div
                            className="
                                w-full
                                h-[360px]
                                sm:h-[420px]
                                md:h-[460px]
                                lg:h-[500px]
                                rounded-2xl
                                overflow-hidden
                                shadow-xl
                                border
                                border-gray-200
                            "
                        >

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7702.845773512926!2d101.970432!3d15.135103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311ec94c0cef2edb%3A0xaef88c539c171528!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4p-C4teC5hOC4reC4nuC4tTEwOCDguJ_guLnguYnguJTguKrguYwg4LmB4Lit4LiZ4LiU4LmMIOC4oeC4suC4o-C5jOC5gOC4geC5h-C4lSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1770636632499!5m2!1sth!2sth"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            />

                        </div>

                    </div>


                    {/* ===== INFO ===== */}

                    <div className="font-kanit">

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-7 sm:mb-8">
                            ข้อมูลติดต่อ
                        </h2>


                        <ul className="space-y-5 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">


                            {/* Address */}

                            <li className="flex gap-4 items-start">

                                <FaMapMarkerAlt className="text-[#ba2529] mt-1 text-xl shrink-0" />

                                <span>
                                    176 หมู่บ้านค้างพลูใต้ หมู่ที่ 3
                                    ตำบลค้างพลู อำเภอโนนไทย
                                    จังหวัดนครราชสีมา 30220
                                </span>

                            </li>


                            {/* Email */}

                            <li className="flex gap-4 items-center">

                                <FaEnvelope className="text-[#ba2529] text-xl shrink-0" />

                                <a
                                    href="mailto:vip108.foodsandmarket@gmail.com"
                                    className="break-all hover:text-[#ba2529] transition"
                                >
                                    vip108.foodsandmarket@gmail.com
                                </a>

                            </li>


                            {/* Phone */}

                            <li className="flex gap-4 items-center">

                                <FaPhone className="text-[#ba2529] text-xl shrink-0" />

                                <a
                                    href="tel:0614246362"
                                    className="hover:text-[#ba2529] transition"
                                >
                                    061-424-6362
                                </a>

                            </li>


                            {/* Facebook */}

                            <li className="flex gap-4 items-center">

                                <FaFacebookF className="text-[#ba2529] text-xl shrink-0" />

                                <a
                                    href="https://www.facebook.com/VIP108Food"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#ba2529] transition"
                                >
                                    โรงงานน้ำพริก
                                </a>

                            </li>


                            {/* LINE */}

                            <li className="flex gap-4 items-center">

                                <FaLine className="text-[#ba2529] text-xl shrink-0" />

                                <a
                                    href="https://line.me/ti/p/~0968782740"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#ba2529] transition"
                                >
                                    0968782740
                                </a>

                            </li>

                        </ul>


                        {/* ===== CTA ===== */}

                        <div className="mt-8 sm:mt-10">

                            <a
                                href="https://www.google.com/maps?q=15.135103,101.970432"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    bg-[#ba2529]
                                    px-7
                                    sm:px-8
                                    py-3
                                    text-base
                                    sm:text-lg
                                    text-white
                                    hover:bg-[#9f1f23]
                                    transition
                                    shadow-lg
                                "
                            >
                                <FaMapMarkerAlt />
                                เปิดโลเคชันใน Google Maps
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}