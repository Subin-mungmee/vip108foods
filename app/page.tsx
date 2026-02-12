// app/page.tsx
import {
  Hero,
  ProductType,
  FactoryImages,
  About,
  Taste,
  Herobanner,
  OEMProcess,
  BrandService,
} from "@/components/home";
import BannerProduct from "@/components/banner/BannerProduct";

export default function Page() {
  return (
    <main className="flex flex-col gap-24 overflow-x-hidden">
      <Hero />
      <ProductType />
      <FactoryImages />
      <About />
      <Herobanner />
      <BannerProduct />
      <Taste />
      <OEMProcess />
      <BrandService />

    </main>
  );
}
