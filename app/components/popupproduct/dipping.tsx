"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Product1 from "../img-pic/Product-pigklea-1.png";
import Product2 from "../img-pic/Product-pigklea-2.png";
import Product3 from "../img-pic/Product-pigklea-3.png";
import Product4 from "../img-pic/Product-pigklea-4.png";
import Product5 from "../img-pic/Product-pigklea-6.png";
import Product6 from "../img-pic/Product-pigklea-7.png";
import Product7 from "../img-pic/Product-pigklea-8.png";

export default function PigKleaProducts() {
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
            alt="พริกเกลือ พริกสด Fresh Pepper Salt Dip"
            className="mx-auto"
            priority
          />
          <p className="mt-2 text-sm">
            พริกเกลือ พริกสด
            <br />
            <span className="text-gray-500">
              Fresh Pepper Salt Dip
            </span>
          </p>
        </div>

        {/* Item 2 */}
        <div className="text-center">
          <Image
            src={Product2}
            alt="พริกเกลือ พริกป่น Cayenne Pepper Salt Dip"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกเกลือ พริกป่น
            <br />
            <span className="text-gray-500">
              Cayenne Pepper Salt Dip
            </span>
          </p>
        </div>

        {/* Item 3 */}
        <div className="text-center">
          <Image
            src={Product3}
            alt="พริกเกลือ บ๊วย Plum Chili Salt Dip"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกเกลือ บ๊วย
            <br />
            <span className="text-gray-500">
              Plum Chili Salt Dip
            </span>
          </p>
        </div>

        {/* Item 4 */}
        <div className="text-center">
          <Image
            src={Product4}
            alt="พริกสด น้ำตาลปิ๊บ Chili Salt With Coconut Sugar Dip"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกสด น้ำตาลปิ๊บ
            <br />
            <span className="text-gray-500">
              Chili Salt With Coconut Sugar Dip
            </span>
          </p>
        </div>

        {/* Item 5 */}
        <div className="text-center">
          <Image
            src={Product5}
            alt="แจ่ว กะปิ Shrimp Paste And Fermented Fish Sauce"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            แจ่ว กะปิ
            <br />
            <span className="text-gray-500">
              Shrimp Paste And Fermented Fish Sauce
            </span>
          </p>
        </div>

        {/* Item 6 */}
        <div className="text-center">
          <Image
            src={Product6}
            alt="กะปิหวาน แบบแห้ง Dried Sweet Shrimp Paste"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            กะปิหวาน แบบแห้ง
            <br />
            <span className="text-gray-500">
              Dried Sweet Shrimp Paste
            </span>
          </p>
        </div>

        {/* Item 7 */}
        <div className="text-center">
          <Image
            src={Product7}
            alt="น้ำปลาหวาน Sweet Fish Sauce (Original)"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำปลาหวาน
            <br />
            <span className="text-gray-500">
              Sweet Fish Sauce (Original)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
