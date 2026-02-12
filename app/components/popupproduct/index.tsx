"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import Currypaste from "./curry-paste";
import Sauce from "./sauce";
import ChiliSauce from "./chili-sauce";
import Dipping from "./dipping";

import "./style.css";

/* ✅ FIX สำคัญ: dynamic import */
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function Responsive() {
  const [CurryShow, setCurryShow] = useState(false);
  const [SauceShow, setSauceShow] = useState(false);
  const [ChiliShow, setChiliShow] = useState(false);
  const [DippingShow, setDippingShow] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const products = [
    {
      title: "พริกแกง",
      engTitle: "CURRY PASTE",
      img: "https://img2.pic.in.th/pic/TyeProduct-1.png",
      show: CurryShow,
      setShow: setCurryShow,
      component: <Currypaste />,
      detailLink: "/DetailCurry",
    },
    {
      title: "น้ำจิ้ม",
      engTitle: "SAUCE",
      img: "https://img5.pic.in.th/file/secure-sv1/TyeProduct-2.png",
      show: SauceShow,
      setShow: setSauceShow,
      component: <Sauce />,
      detailLink: "/pageDetailSauce",
    },
    {
      title: "น้ำพริก",
      engTitle: "CHILI SAUCE",
      img: "https://img5.pic.in.th/file/secure-sv1/TyeProduct-3.png",
      show: ChiliShow,
      setShow: setChiliShow,
      component: <ChiliSauce />,
      detailLink: "/PageDetailChilli",
    },
    {
      title: "เครื่องจิ้ม",
      engTitle: "DIPPING",
      img: "https://img5.pic.in.th/file/secure-sv1/TyeProduct-4.png",
      show: DippingShow,
      setShow: setDippingShow,
      component: <Dipping />,
      detailLink: "/pageDetailDip",
    },
  ];

  return (
    <div className="flex justify-center">
      <Slider {...settings} className="w-full max-w-7xl">
        {products.map((product, index) => (
          <div key={index} className="px-3">
            <Card
              className="bg-[#f6f7fa]"
              style={{ width: "16.5rem", height: "27rem" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Modal */}
                <Modal
                  size="lg"
                  show={product.show}
                  onHide={() => product.setShow(false)}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{product.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{product.component}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => product.setShow(false)}
                    >
                      Close
                    </Button>
                    <Button variant="primary" href={product.detailLink}>
                      Detail
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* Image */}
                <Image
                  src={product.img}
                  alt={product.title}
                  width={300}
                  height={220}
                  className="cursor-pointer"
                  onClick={() => product.setShow(true)}
                />

                <div className="text-[27px] font-bold text-[#ba2529]">
                  &#9473;
                </div>

                <Card.Body>
                  <Card.Title className="text-[#555]">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="text-[#ba2529]">
                    {product.engTitle}
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
