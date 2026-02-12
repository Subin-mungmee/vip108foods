"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Product1 from "../img-pic/Product-banner-chili-01.png";
import Product2 from "../img-pic/Product-banner-chili-02.png";
import Product3 from "../img-pic/Product-banner-chili-03.png";
import Product4 from "../img-pic/Product-banner-chili-04.png";
import Product5 from "../img-pic/Product-banner-chili-05.png";
import Product6 from "../img-pic/Product-banner-chili-06.png";
import Product7 from "../img-pic/Product-banner-chili-07.png";

export default function Products() {
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
            alt="น้ำพริกนรก Spicy Chili Dip"
            className="mx-auto"
            priority
          />
          <p className="mt-2 text-sm">
            น้ำพริกนรก
            <br />
            <span className="text-gray-500">Spicy Chili Dip</span>
          </p>
        </div>

        {/* Item 2 */}
        <div className="text-center">
          <Image
            src={Product2}
            alt="น้ำพริกเผา สูตรน้ำมันมะกอก"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำพริกเผา สูตรน้ำมันมะกอก
            <br />
            <span className="text-gray-500">
              Roasted Chili Dip With Olive Oil
            </span>
          </p>
        </div>

        {/* Item 3 */}
        <div className="text-center">
          <Image
            src={Product3}
            alt="น้ำพริกตาแดง"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำพริกตาแดง
            <br />
            <span className="text-gray-500">Red Chili Dip</span>
          </p>
        </div>

        {/* Item 4 */}
        <div className="text-center">
          <Image
            src={Product4}
            alt="น้ำพริกปลาร้าสับผัดสุก สูตรต้นตำรับ"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำพริกปลาร้าสับผัดสุก สูตรต้นตำรับ
            <br />
            <span className="text-gray-500">
              Fermented Fish Spicy Dip (Jaew Bong Original)
            </span>
          </p>
        </div>

        {/* Item 5 */}
        <div className="text-center">
          <Image
            src={Product5}
            alt="น้ำพริกเผา"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำพริกเผา
            <br />
            <span className="text-gray-500">Roasted Chili Dip</span>
          </p>
        </div>

        {/* Item 6 */}
        <div className="text-center">
          <Image
            src={Product6}
            alt="น้ำพริกเผา กลิ่นแมงดา"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำพริกเผา กลิ่นแมงดา
            <br />
            <span className="text-gray-500">
              Chili Dip, Ground Water Bug Smell
            </span>
          </p>
        </div>

        {/* Item 7 */}
        <div className="text-center">
          <Image
            src={Product7}
            alt="น้ำพริกตาแดง กลิ่นแมงดา"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            น้ำพริกตาแดง กลิ่นแมงดา
            <br />
            <span className="text-gray-500">
              Red Chili Dip, Ground Water Bug Smell
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
