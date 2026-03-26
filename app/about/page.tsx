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
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold font-kanit tracking-wide">
                        ติดต่อเรา
                    </h1>
                    <p className="mt-4 text-lg text-white/90">
                        Professional OEM Food Manufacturer
                    </p>
                </div>
            </section>

            {/* ===== CONTENT ===== */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* ===== MAP ===== */}
                    <div className="w-full h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7702.845773512926!2d101.970432!3d15.135103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311ec94c0cef2edb%3A0xaef88c539c171528!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4p-C4teC5hOC4reC4nuC4tTEwOCDguJ_guLnguYnguJTguKrguYwg4LmB4Lit4LiZ4LiU4LmMIOC4oeC4suC4o-C5jOC5gOC4geC5h-C4lSDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1770636632499!5m2!1sth!2sth"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* ===== INFO ===== */}
                    <div className="font-kanit">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                            ข้อมูลติดต่อ
                        </h2>

                        <ul className="space-y-6 text-gray-700 text-lg leading-relaxed">

                            <li className="flex gap-4 items-start">
                                <FaMapMarkerAlt className="text-[#ba2529] mt-1 text-xl shrink-0" />
                                <span>
                                    176 หมู่บ้านค้างพลูใต้ หมู่ที่ 3
                                    ตำบลค้างพลู อำเภอโนนไทย
                                    จังหวัดนครราชสีมา 30220
                                </span>
                            </li>

                            <li className="flex gap-4 items-center">
                                <FaEnvelope className="text-[#ba2529] text-xl" />
                                vip108.foodsandmarket@gmail.com
                            </li>

                            <li className="flex gap-4 items-center">
                                <FaPhone className="text-[#ba2529] text-xl" />
                                061-424-6362
                            </li>

                            <li className="flex gap-4 items-center">
                                <FaFacebookF className="text-[#ba2529] text-xl" />
                                โรงงานน้ำพริก 
                            </li>

                            <li className="flex gap-4 items-center">
                                <FaLine className="text-[#ba2529] text-xl" />
                                0968782740
                            </li>

                        </ul>

                        {/* ===== CTA ===== */}
                        <div className="mt-10">
                            <a
                                href="https://www.google.com/maps?q=15.135103,101.970432"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full bg-[#ba2529] px-8 py-3 text-white text-lg hover:bg-[#9f1f23] transition shadow-lg"
                            >
                                เปิดโลเคชันใน Google Maps
                            </a>

                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
