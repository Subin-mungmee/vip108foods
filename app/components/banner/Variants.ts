import { Variants } from "framer-motion";

export const bottleWrapper: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const bottle: Variants = {
  animate: {
    y: [8, -8, 8], // ขยับนิดเดียว ไม่ดัน layout
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const leaf: Variants = {
  animate: (i: number) => ({
    x: [10, -10, 10],
    transition: {
      duration: i,
      ease: "linear",
      repeat: Infinity,
    },
  }),
};
