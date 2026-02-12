"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Product1 from "../img-pic/Product-soure-1.png";
import Product2 from "../img-pic/Product-soure-2.png";
import Product3 from "../img-pic/Product-soure-3.png";

export default function SauceProducts() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {/* Item 1 */}
        <div className="text-center">
          <Image
            src={Product1}
            alt="น้ำจิ้ม แจ่ว Thai Dried Chili Dipping Sauce (Jaew)"
            className="mx-auto"
            priority
          />
          <p className="mt-2 text-sm">
            น้ำจิ้ม แจ่ว
            <br />
            <span className="text-gray-500">
              Thai Dried Chili Dipping Sauce (Jaew)
            </span>
          </p>
        </div>

        {/* Item 2 */}
        <div className="text-center">
          <Image
            src={Product2}
            alt="น้ำจิ้ม ลูกชิ้น Meatball Dipping Sauce"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำจิ้ม ลูกชิ้น
            <br />
            <span className="text-gray-500">
              Meatball Dipping Sauce
            </span>
          </p>
        </div>

        {/* Item 3 */}
        <div className="text-center">
          <Image
            src={Product3}
            alt="น้ำจิ้ม ซีฟู๊ด Seafood Dipping Sauce"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำจิ้ม ซีฟู๊ด
            <br />
            <span className="text-gray-500">
              Seafood Dipping Sauce
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
