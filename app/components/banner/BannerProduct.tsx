"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { bottle, bottleWrapper, leaf } from "./Variants";
import styles from "./styles.module.css";

const BannerProduct = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAF8] pt-3 pb-40">
      <div className="mx-auto max-w-6xl px-4">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-800"
          >
            การรับรองมาตรฐานการผลิต
          </motion.h2>

          {/* Gold Accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 h-[2px] w-28 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 text-sm md:text-base tracking-widest text-gray-500"
          >
            BEST QUALITY • CERTIFIED • GLOBAL STANDARD
          </motion.p>
        </div>

        {/* ===== CERTIFICATION LOGOS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-14 mb-28"
        >
          {[
            { src: "/GHP.png", label: "GHP" },
            { src: "/hccp-logo.png", label: "HACCP" },
            { src: "/Logo-Halan.png", label: "HALAN" },
            { src: "/tonkla.png", label: "TONKLA" },
            { src: "/FDA-Thai.png", label: "FDA" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              className="
            group
            flex flex-col items-center justify-center
            w-36 h-36
            rounded-full
            bg-white/90 backdrop-blur
            shadow-[0_18px_45px_rgba(0,0,0,0.08)]
            hover:shadow-[0_26px_60px_rgba(0,0,0,0.12)]
          "
            >
              <Image
                src={item.src}
                alt={item.label}
                width={96}
                height={96}
                className="
              object-contain
              opacity-90
              group-hover:opacity-100
              transition
            "
              />
              <span className="mt-3 text-[11px] tracking-widest text-gray-500">
                CERTIFIED
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== PRODUCT + MOTION ===== */}
        <motion.div
          className={styles.bottleWrapper}
          variants={bottleWrapper}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* PRODUCT */}
          <motion.div className={styles.bottle} variants={bottle}>
            <Image
              src="/Product-packet.png"
              alt="VIP FOODS Product"
              width={920}
              height={1140}
              priority
            />
          </motion.div>

          {/* CHILI */}
          <motion.img
            src="https://png.pngtree.com/png-clipart/20230428/ourmid/pngtree-free-vector-red-chili-pepper-realistic-single-object-on-blank-white-png-image_6741301.png"
            alt="Chili"
            className={styles.leaf}
            variants={leaf}
            custom={2}
          />

          <motion.img
            src="https://static.vecteezy.com/system/resources/previews/044/613/189/non_2x/red-hot-chili-pepper-png.png"
            alt="Chili"
            className={styles.leaf2}
            variants={leaf}
            custom={3}
          />

          <motion.img
            src="https://static.vecteezy.com/system/resources/previews/044/613/189/non_2x/red-hot-chili-pepper-png.png"
            alt="Chili"
            className={styles.leaf3}
            variants={leaf}
            custom={4}
          />
        </motion.div>
      </div>
    </section>

  );
};

export default BannerProduct;
