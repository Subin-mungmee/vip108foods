"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "./loader.css";

const GridLoader = dynamic(
  () => import("react-spinners/GridLoader"),
  { ssr: false }
);

interface LoaderProps {
  show?: boolean;
}

export default function Loader({ show = true }: LoaderProps) {
  if (!show) return null;

  return (
    <div className="loader-wrapper">
      <Image
        src="https://img5.pic.in.th/file/secure-sv1/white-Logo-vipfood.png"
        alt="VIP FOOD loading"
        width={160}
        height={59}
        priority
      />
      <GridLoader color="#ffffff" size={15} />
    </div>
  );
}
