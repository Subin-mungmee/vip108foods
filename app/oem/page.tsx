import Image from "next/image";

export default function FactoryStandardPage() {
  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/HeaderOem-branding.jpg"
          alt="โรงงานผลิต OEM VIP FOODS"
          fill
          priority
          className="object-cover"
        />
      </section>

      {/* ================= HERO CONTENT ================= */}
      <section className="py-28 px-4 text-center bg-white">
        <span className="text-xs tracking-[0.35em] text-[#ba2529] font-medium uppercase">
          Factory & Standard
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl font-light leading-tight">
          โรงงานผลิต OEM
          <br />
          <span className="font-medium">มาตรฐานระดับสากล</span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          VIP FOODS คือโรงงานผลิตอาหารแบบ OEM
          ที่ให้ความสำคัญกับคุณภาพ ความปลอดภัย
          และมาตรฐานการผลิตในทุกขั้นตอน
          ตั้งแต่การพัฒนาสูตร จนถึงการส่งมอบสินค้า
        </p>

        <div className="w-20 h-px bg-[#ba2529] mx-auto mt-12" />
      </section>

      {/* ================= BANNER IMAGE ================= */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/bannerOem-body.png"
            alt="มาตรฐานโรงงาน VIP FOODS"
            width={1600}
            height={1000}
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= QUALITY STANDARD ================= 
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-xs tracking-[0.35em] text-[#ba2529] uppercase">
              Our Quality Commitment
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-light leading-tight">
              มาตรฐานที่เราใช้
              <br />
              <span className="font-medium">มากกว่าข้อกำหนดขั้นต่ำ</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              โรงงาน VIP FOODS ดำเนินการผลิตภายใต้มาตรฐาน
              GHP และ HACCP เพื่อควบคุมคุณภาพและความปลอดภัย
              ของอาหารในทุกกระบวนการ
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              ทุกขั้นตอนสามารถตรวจสอบย้อนกลับได้
              ตั้งแต่วัตถุดิบ กระบวนการผลิต
              ไปจนถึงการบรรจุและจัดส่ง
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <ul className="space-y-6 text-gray-700 leading-relaxed">
              <li>• ระบบควบคุมคุณภาพทุกล็อตการผลิต</li>
              <li>• การตรวจสอบย้อนกลับวัตถุดิบ (Traceability)</li>
              <li>• สุขอนามัยพนักงานและพื้นที่ผลิต</li>
              <li>• การบันทึกข้อมูลการผลิตอย่างเป็นระบบ</li>
              <li>• การตรวจสอบและประเมินภายในสม่ำเสมอ</li>
            </ul>
          </div>

        </div>
      </section>*/}

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.4em] text-gray-400 uppercase">
            Production Process
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            กระบวนการผลิต OEM
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            กระบวนการผลิตถูกออกแบบให้มีประสิทธิภาพ
            สะอาด ปลอดภัย และสอดคล้องกับมาตรฐานสากล
            เพื่อให้ได้สินค้าที่มีคุณภาพสม่ำเสมอ
          </p>
        </div>

        <div className="flex justify-center px-4">
          <Image
            src="/OEM-ขั้นตอน.png"
            alt="ขั้นตอนการผลิต OEM"
            width={1400}
            height={900}
            className="w-full max-w-5xl h-auto"
          />
        </div>
      </section>

      {/* ================= CERTIFICATIONS LOGO =================
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-xs tracking-[0.35em] text-gray-400 uppercase mb-3">
            Trusted & Certified
          </p>

          <h2 className="text-2xl md:text-3xl font-light">
            การรับรองมาตรฐานโรงงาน
          </h2>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 items-center">
            {[
              { src: "/GHP.png", label: "GHP" },
              { src: "/hccp-logo.png", label: "HACCP" },
              { src: "/Logo-Halan.png", label: "HALAL" },
              { src: "/tonkla.png", label: "TONKLA" },
              { src: "/FDA-Thai.png", label: "FDA" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={110}
                  height={110}
                  className="object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
                />
                <span className="mt-3 text-xs tracking-widest text-gray-600">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>  */}

      {/* ================= WHO IS IT FOR ================= */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <span className="text-xs tracking-[0.35em] text-[#ba2529] uppercase">
            Ideal For
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            โรงงานของเราเหมาะกับใคร
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
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
              <div key={i} className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="py-24 px-4 bg-white text-center">
        <Image
          src="/packaging-banner.png"
          alt="บรรจุภัณฑ์ OEM"
          width={380}
          height={280}
          className="mx-auto mb-12"
        />

        <blockquote className="text-2xl md:text-3xl italic font-light leading-relaxed max-w-3xl mx-auto">
          “คุณค่าที่ลูกค้าได้รับ
          <br />
          คือหัวใจของทุกผลิตภัณฑ์ที่เราผลิต”
        </blockquote>

        <p className="mt-8 text-sm tracking-widest text-gray-500 uppercase">
          ปรัชญาการผลิตของ VIP FOODS
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-4 bg-[#ba2529] text-white text-center">
        <h2 className="text-2xl md:text-3xl font-light">
          พร้อมเริ่มต้นผลิตแบรนด์ของคุณแล้วหรือยัง
        </h2>

        <p className="mt-4 text-white/80">
          ปรึกษาโรงงานผลิต OEM ที่ให้ความสำคัญกับคุณภาพในทุกขั้นตอน
        </p>

        <a
          href="https://line.me/ti/p/~Vip108Foods"
          target="_blank"
          className="inline-block mt-8 px-12 py-4 bg-white text-[#ba2529] rounded-full font-medium hover:bg-gray-100 transition"
        >
          ขอคำปรึกษาโรงงาน
        </a>
      </section>

      {/* ================= CLOSING IMAGE ================= */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-7xl mx-auto px-4">
          <Image
            src="/bannerOem-body-1-edit.png"
            alt="โรงงาน VIP FOODS"
            width={1600}
            height={1000}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </section>

    </main>
  );
}
