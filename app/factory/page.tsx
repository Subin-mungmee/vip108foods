import Image from "next/image";

export default function FactoryPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-28 px-4 text-center bg-gradient-to-b from-gray-50 to-white">
        <span className="text-xs tracking-[0.35em] text-[#ba2529] font-medium uppercase">
          Factory & Standards
        </span>

        <h1 className="mt-5 text-4xl md:text-5xl font-light leading-tight">
          โรงงานผลิตมาตรฐาน
          <br />
          <span className="font-medium">ระดับสากล</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          โรงงานผลิตอาหาร OEM ภายใต้มาตรฐาน GHP / HACCP
          ครอบคลุมความสะอาด ความปลอดภัย และคุณภาพในทุกขั้นตอน
        </p>

        <div className="w-20 h-[2px] bg-[#ba2529] mx-auto mt-10" />
      </section>

      {/* ================= FACTORY MAIN ================= */}
      <section className="px-4 py-16 md:py-20">
        <div className="max-w-7xl mx-auto relative">
          <Image
            src="/F-1.jpg"
            alt="โรงงานผลิตมาตรฐาน"
            width={1600}
            height={1000}
            className="rounded-2xl shadow-xl"
            priority
          />

          <div className="absolute bottom-5 left-5 bg-black/60 text-white px-5 py-2.5 rounded-lg text-sm tracking-wide">
            การผลิตภายใต้มาตรฐานสากล
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-20 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] text-gray-400 uppercase">
            Certifications
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-light">
            มาตรฐานการรับรองโรงงาน
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            การันตีคุณภาพ ความปลอดภัย และความน่าเชื่อถือ
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center">
            {[
              { src: "/GHP.png", label: "GHP" },
              { src: "/hccp-logo.png", label: "HACCP" },
              { src: "/Logo-Halan.png", label: "HALAL" },
              { src: "/tonkla.png", label: "TONKLA" },
              { src: "/FDA-Thai.png", label: "FDA" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:-translate-y-1 transition"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={110}
                  height={110}
                  className="object-contain"
                />
                <span className="mt-2.5 text-xs font-medium tracking-widest text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY CONTROL ================= */}
      <section className="py-20 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="text-xs tracking-[0.4em] text-gray-400 uppercase">
              Quality Control
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-light">
              ระบบควบคุมคุณภาพ
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed">
              ทุกกระบวนการผลิตอยู่ภายใต้ระบบ GHP / HACCP
              ตั้งแต่วัตถุดิบจนถึงการส่งมอบ
            </p>

            <ul className="mt-5 space-y-2.5 text-gray-700">
              <li>• ตรวจสอบวัตถุดิบก่อนผลิต</li>
              <li>• ควบคุมความสะอาดทุกพื้นที่</li>
              <li>• ตรวจสอบคุณภาพก่อนจัดส่ง</li>
              <li>• ระบบ Traceability ตรวจสอบย้อนหลังได้</li>
            </ul>
          </div>

          <div className="relative">
            <Image
              src="/IMG_2907.jpg"
              alt="Quality Control"
              width={700}
              height={500}
              className="rounded-xl shadow-lg"
            />

            <Image
              src="/IMG_2810.jpg"
              alt="Process Detail"
              width={400}
              height={260}
              className="absolute -bottom-8 -left-8 rounded-xl shadow-xl border-4 border-white hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCTION PROCESS ================= */}
      <section className="py-20 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <span className="text-xs tracking-[0.4em] text-gray-400 uppercase">
            Production Process
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-light">
            ขั้นตอนการผลิต
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { img: "/IMG_2934.jpg", title: "Raw Material" },
            { img: "/IMG_2582.jpg", title: "Cooking & Mixing" },
            { img: "/IMG_2634.jpg", title: "Quality inspection" },
            { img: "/IMG_2425.jpg", title: "environmental control room" },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="mt-3 text-xs tracking-widest text-gray-700">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-xs tracking-[0.4em] text-gray-400 uppercase">
            Factory Gallery
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-light">
            บรรยากาศภายในโรงงาน
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "/IMG_3784.jpg",
            "/IMG_2907.jpg",
            "/IMG_2934.jpg",
            "/IMG_2582.jpg",
            "/IMG_2634.jpg",
            "/IMG_2425.jpg",
          ].map((img, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md group"
            >
              <Image
                src={img}
                alt="Factory Gallery"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="bg-white pb-16 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto relative">
          <Image
            src="/IMG_2634.jpg"
            alt="Factory Closing"
            width={1600}
            height={900}
            className="rounded-2xl shadow-xl"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 text-white px-8 py-5 rounded-xl text-lg tracking-wide">
              พร้อมเป็นพาร์ทเนอร์การผลิตของคุณ
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
