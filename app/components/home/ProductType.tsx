"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= TYPES ================= */

interface ProductItem {
  nameTh: string;
  nameEn: string;
  img: string;
}

interface ProductTypeData {
  th: string;
  type: string;
  cover: string;
  items: ProductItem[];
}

/* ================= DATA ================= */

const productTypes: ProductTypeData[] = [
  {
    th: "พริกแกง",
    type: "CURRY PASTE",
    cover: "/TyeProduct-1.png",
    items: [
      { nameTh: "พริกแกงใต้", nameEn: "Red Curry Paste (Southern)", img: "/Product-curry-paste-1.png" },
      { nameTh: "พริกแกงน้ำยาป่า", nameEn: "Namya Curry Paste", img: "/Product-curry-paste-2.png" },
      { nameTh: "พริกแกงเผ็ด", nameEn: "Red Curry Paste", img: "/Product-curry-paste-3.png" },
      { nameTh: "พริกแกงมัสมั่น", nameEn: "Masman Curry Paste", img: "/Product-curry-paste-4.png" },
      { nameTh: "พริกแกงเขียวหวาน", nameEn: "Green Curry Paste", img: "/Product-curry-paste-5.png" },
      { nameTh: "พริกแกงต้มยำ", nameEn: "Tom Yum Curry Paste", img: "/Product-curry-paste-6.png" },
    ],
  },
  {
    th: "น้ำจิ้ม-ซอส",
    type: "SAUCE",
    cover: "/TyeProduct-2.png",
    items: [
      { nameTh: "น้ำจิ้มแจ่ว", nameEn: "Thai Dried Chili Dipping Sauce (Jaew)", img: "/Product-soure-1.png" },
      { nameTh: "น้ำจิ้มลูกชิ้น", nameEn: "Meatball Dipping Sauce", img: "/Product-soure-2.png" },
      { nameTh: "น้ำจิ้มซีฟู๊ด", nameEn: "Seafood Dipping Sauce", img: "/Product-soure-3.png" },
      { nameTh: "ซอสปรุงผัดไทย", nameEn: "Pad Thai Sauce", img: "/Product-soure-4.png" },
      { nameTh: "ซอสปรุงกะเพรา", nameEn: "Kaprao Sauce", img: "/Product-soure-5.png" },
      { nameTh: "ซอสปรุงอเนกประสงค์", nameEn: "Stir Fry Sauce", img: "/Product-soure-6.png" },
    ],
  },
  {
    th: "น้ำพริก",
    type: "CHILI SAUCE",
    cover: "/TyeProduct-3.png",
    items: [
      { nameTh: "น้ำพริกตาแดง เจ", nameEn: "Vegan Red Chili Dip", img: "/Product-banner-chili-01.png" },
      { nameTh: "น้ำพริกเผา", nameEn: "Roasted chili Dip", img: "/Product-banner-chili-02.png" },
      { nameTh: "น้ำพริกตาแดง", nameEn: "Red Chili Dip", img: "/Product-banner-chili-03.png" },
      { nameTh: "น้ำพริกปลาร้าสับผัดสุก สูตรน้ำมันมะพร้าว", nameEn: "Fermented fish spicy dip ( Jaew Bong with coconut oil )", img: "/Product-banner-chili-04.png" },
      { nameTh: "น้ำพริกนรก", nameEn: "Spicy Chili Dip", img: "/Product-banner-chili-05.png" },
      { nameTh: "น้ำพริกเห็ดหอม สูตรมังสวิรัติ", nameEn: "Vegan Shiitake Mushroom Chili Paste", img: "/Product-banner-chili-06.png" },
      { nameTh: "น้ำพริกเผา สูตรต้มยำ", nameEn: "Tom Yum Chili Paste", img: "/Product-banner-chili-07.png" },
      { nameTh: "น้ำพริกเผา สูตรมังสวิรัติ", nameEn: "Vegetarian Roasted Chili Paste", img: "/Product-banner-chili-08.png" },
    ],
  },
  {
    th: "เครื่องจิ้ม",
    type: "DIPPING",
    cover: "/TyeProduct-4.png",
    items: [
      { nameTh: "พริกเกลือ พริกสด", nameEn: "Fresh Pepper Salt Dip", img: "/Product-pigklea-1.png" },
      { nameTh: "พริกเกลือ พริกป่น", nameEn: "Cayenne Pepper Salt Dip", img: "/Product-pigklea-2.png" },
      { nameTh: "พริกเกลือ บ๊วย", nameEn: "Plum Chili Salt Dip", img: "/Product-pigklea-3.png" },
      { nameTh: "พริกสด น้ำตาลปิ๊บ", nameEn: "Chili Salt With Coconut Sugar Dip", img: "/Product-pigklea-4.png" },
      { nameTh: "แจ่ว กะปิ", nameEn: "Shrimp Paste And Fermented Fish Sauce", img: "/Product-pigklea-6.png" },
      { nameTh: "กะปิหวาน แบบแห้ง", nameEn: "Dried Sweet Shrimp Paste", img: "/Product-pigklea-7.png" },
      { nameTh: "น้ำปลาหวาน", nameEn: "Sweet Fish Sauce (Original)", img: "/Product-pigklea-8.png" },
    ],
  },
];

/* ================= ARROWS ================= */

function PrevArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2
                 w-10 h-10 rounded-full bg-white shadow-md
                 text-2xl text-gray-500 hover:text-[#ba2529]
                 transition z-10"
    >
      ‹
    </button>
  );
}

function NextArrow({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2
                 w-10 h-10 rounded-full bg-white shadow-md
                 text-2xl text-gray-500 hover:text-[#ba2529]
                 transition z-10"
    >
      ›
    </button>
  );
}

/* ================= MOTION ================= */

const popupContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const popupItem = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

/* ================= COMPONENT ================= */

export default function ProductType() {
  const [mounted, setMounted] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState<ProductTypeData | null>(null);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);

    const calcSlides = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesToShow(1);
      else if (w < 1024) setSlidesToShow(2);
      else setSlidesToShow(4);
    };

    calcSlides();
    window.addEventListener("resize", calcSlides);
    return () => window.removeEventListener("resize", calcSlides);
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const openPopup = (item: ProductTypeData) => {
    setActiveType(item);
    setOpen(true);
  };

  return (
    <section className="py-20">
      {/* ===== HEADER ===== */}
      <motion.div
        className="text-center mb-14 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          ประเภท-ชนิด
        </h2>

        <h3 className="mt-2 text-xl md:text-2xl text-[#ba2529] font-semibold">
          ผลิตภัณฑ์น้ำพริกภายใต้แบรนด์ของเรา
        </h3>

        <div className="my-4 text-[#ba2529] text-2xl">━</div>

        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          ทีมผู้เชี่ยวชาญของ VIP 108 FOODS ได้ร่วมกันสร้างสรรค์ผลิตภัณฑ์น้ำพริก
          ที่หลากหลายในมาตรฐานสากล และคุณภาพที่สร้างความพึงพอใจให้กับลูกค้า
        </p>
      </motion.div>

      {/* ===== SLIDER ===== */}
      <div className="mx-auto max-w-[1200px] px-4 relative">
        <Slider {...settings}>
          {productTypes.map((item, index) => (
            <motion.div
              key={index}
              className="px-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-[#f6f7fa] rounded-xl h-[26rem]
                           flex flex-col items-center justify-center
                           cursor-pointer hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchStartX === null) return;
                  const diff = Math.abs(
                    e.changedTouches[0].clientX - touchStartX
                  );
                  if (diff > 10) return;
                  openPopup(item);
                }}
                onClick={() => openPopup(item)}
              >
                <img
                  src={item.cover}
                  alt={item.th}
                  draggable={false}
                  className="w-[70%] object-contain mb-6"
                />
                <p className="text-lg font-semibold">{item.th}</p>
                <p className="text-[#ba2529] tracking-wide">{item.type}</p>
              </motion.div>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* ===== POPUP ===== */}
      <AnimatePresence>
        {open && activeType && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-5xl
                         max-h-[85vh] overflow-y-auto
                         p-6 md:p-8 relative"
              initial={{ y: 40, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 40, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-6 text-2xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-center mb-8">
                {activeType.th}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={popupContainer}
                initial="hidden"
                animate="show"
              >
                {activeType.items.map((product, idx) => (
                  <motion.div
                    key={idx}
                    variants={popupItem}
                    whileHover={{ y: -6 }}
                    className="border rounded-xl p-4 text-center hover:shadow-lg transition"
                  >
                    <img
                      src={product.img}
                      alt={`${product.nameTh} ${product.nameEn}`}
                      draggable={false}
                      className="h-32 mx-auto mb-4 object-contain"
                    />
                    <p className="text-lg font-medium leading-snug">{product.nameTh}</p>
                    <p className="mt-1 text-lg text-[#ba2529] leading-snug">
                      {product.nameEn}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
