import Image from "next/image";

export default function FactoryStandardPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <Image
          src="/HeaderOem-branding.jpg"
          alt="โรงงานผลิต OEM VIP FOODS"
          fill
          priority
          className="object-cover"
        />
      </section>
      {/* ================= HERO CONTENT ================= */}
      <section className="py-16 md:py-28 px-4 text-center bg-white">
        <span className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] text-[#ba2529] font-medium uppercase">
          Factory & Standard
        </span>

        <h1 className="mt-4 md:mt-6 text-2xl md:text-5xl font-light leading-snug md:leading-tight">
          โรงงานผลิต OEM
          <br />
          <span className="font-medium">มาตรฐานระดับสากล</span>
        </h1>

        <p className="mt-6 md:mt-8 max-w-xl md:max-w-3xl mx-auto text-sm md:text-lg text-gray-600 leading-relaxed">
          VIP FOODS คือโรงงานผลิตอาหารแบบ OEM
          ที่ให้ความสำคัญกับคุณภาพ ความปลอดภัย
          และมาตรฐานการผลิตในทุกขั้นตอน
          ตั้งแต่การพัฒนาสูตร จนถึงการส่งมอบสินค้า
        </p>

        <div className="w-16 md:w-20 h-px bg-[#ba2529] mx-auto mt-8 md:mt-12" />
      </section>

      {/* ================= BANNER IMAGE ================= */}
      <section className="px-4 py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/bannerOem-body.png"
            alt="มาตรฐานโรงงาน VIP FOODS"
            width={1600}
            height={1000}
            className="w-full h-auto rounded-xl md:rounded-2xl shadow-md md:shadow-lg"
          />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <span className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-400 uppercase">
            Production Process
          </span>

          <h2 className="mt-3 md:mt-4 text-2xl md:text-4xl font-light">
            กระบวนการผลิต OEM
          </h2>

          <p className="mt-4 md:mt-6 text-sm md:text-base text-gray-600 max-w-md md:max-w-2xl mx-auto leading-relaxed">
            กระบวนการผลิตถูกออกแบบให้มีประสิทธิภาพ
            สะอาด ปลอดภัย และสอดคล้องกับมาตรฐานสากล
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/OEM-ขั้นตอน.png"
            alt="ขั้นตอนการผลิต OEM"
            width={1400}
            height={900}
            className="w-full max-w-5xl h-auto"
          />
        </div>
      </section>

      {/* ================= WHO IS IT FOR ================= */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.35em] text-[#ba2529] uppercase">
            Ideal For
          </span>

          <h2 className="mt-3 md:mt-4 text-2xl md:text-4xl font-light">
            โรงงานของเราเหมาะกับใคร
          </h2>

          <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-left">
            {[
              {
                title: "เจ้าของแบรนด์",
                desc: "ที่ต้องการผลิตสินค้าอาหารภายใต้แบรนด์ของตนเอง ด้วยโรงงานที่ได้มาตรฐาน",
              },
              {
                title: "ผู้เริ่มต้นธุรกิจ",
                desc: "ที่ต้องการคำแนะนำด้านสูตร การผลิต และบรรจุภัณฑ์แบบครบวงจร",
              },
              {
                title: "แบรนด์ส่งออก",
                desc: "ที่ต้องการโรงงานที่มีเอกสารและมาตรฐานรองรับตลาดสากล",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 md:p-8 rounded-xl md:rounded-2xl">
                <h3 className="text-base md:text-lg font-medium mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="py-16 md:py-24 px-4 bg-white text-center">
        <Image
          src="/packaging-banner.png"
          alt="บรรจุภัณฑ์ OEM"
          width={380}
          height={280}
          className="mx-auto mb-8 md:mb-12 w-40 md:w-auto"
        />

        <blockquote className="text-lg md:text-3xl italic font-light leading-relaxed max-w-xl md:max-w-3xl mx-auto">
          “คุณค่าที่ลูกค้าได้รับ
          <br />
          คือหัวใจของทุกผลิตภัณฑ์ที่เราผลิต”
        </blockquote>

        <p className="mt-6 md:mt-8 text-xs md:text-sm tracking-widest text-gray-500 uppercase">
          ปรัชญาการผลิตของ VIP FOODS
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 md:py-20 px-4 bg-[#ba2529] text-white text-center">
        <h2 className="text-xl md:text-3xl font-light">
          พร้อมเริ่มต้นผลิตแบรนด์ของคุณแล้วหรือยัง
        </h2>

        <p className="mt-3 md:mt-4 text-sm md:text-base text-white/80">
          ปรึกษาโรงงานผลิต OEM ที่ให้ความสำคัญกับคุณภาพในทุกขั้นตอน
        </p>

        <a
          href="https://line.me/ti/p/~Vip108Foods"
          target="_blank"
          className="inline-block mt-6 md:mt-8 px-8 md:px-12 py-3 md:py-4 bg-white text-[#ba2529] rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition"
        >
          ขอคำปรึกษาโรงงาน
        </a>
      </section>

      {/* ================= CLOSING IMAGE ================= */}
      <section className="bg-white pt-6 md:pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-4">
          <Image
            src="/bannerOem-body-1-edit.png"
            alt="โรงงาน VIP FOODS"
            width={1600}
            height={1000}
            className="w-full h-auto rounded-lg md:rounded-xl shadow-sm md:shadow-md"
          />
        </div>
      </section>

    </main>
  );
}