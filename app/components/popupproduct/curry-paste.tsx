"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ProdoctCurry1 from "../img-pic/Product-curry-paste-1.png";
import ProdoctCurry2 from "../img-pic/Product-curry-paste-2.png";
import ProdoctCurry3 from "../img-pic/Product-curry-paste-3.png";
import ProdoctCurry4 from "../img-pic/Product-curry-paste-4.png";
import ProdoctCurry5 from "../img-pic/Product-curry-paste-5.png";

export default function CurryProducts() {
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
            src={ProdoctCurry1}
            alt="พริกแกงใต้ Red Curry Paste (Southern)"
            className="mx-auto"
            priority
          />
          <p className="mt-2 text-sm">
            พริกแกงใต้
            <br />
            <span className="text-gray-500">
              Red Curry Paste (Southern)
            </span>
          </p>
        </div>

        {/* Item 2 */}
        <div className="text-center">
          <Image
            src={ProdoctCurry2}
            alt="พริกแกงน้ำยาป่า Namya Curry Paste"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกแกงน้ำยาป่า
            <br />
            <span className="text-gray-500">
              Namya Curry Paste
            </span>
          </p>
        </div>

        {/* Item 3 */}
        <div className="text-center">
          <Image
            src={ProdoctCurry3}
            alt="พริกแกงเผ็ด Red Curry Paste"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกแกงเผ็ด
            <br />
            <span className="text-gray-500">
              Red Curry Paste
            </span>
          </p>
        </div>

        {/* Item 4 */}
        <div className="text-center">
          <Image
            src={ProdoctCurry4}
            alt="พริกแกงมัสมั่น Masman Curry Paste"
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกแกงมัสมั่น
            <br />
            <span className="text-gray-500">
              Masman Curry Paste
            </span>
          </p>
        </div>

        {/* Item 5 */}
        <div className="text-center">
          <Image
            src={ProdoctCurry5}
            alt="พริกแกงเขียวหวาน Green Curry Paste."
            className="mx-auto"
          />
          <p className="mt-2 text-sm">
            พริกแกงเขียวหวาน
            <br />
            <span className="text-gray-500">
              Green Curry Paste
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
