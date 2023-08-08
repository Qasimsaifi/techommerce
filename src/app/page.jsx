import dynamic from "next/dynamic";
import productsData from "./ProductData";
import collectionsData from "./collectionsData";
import themesData from "./themesData";
import BestSellProductsData from "./BestSellProduct";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const HeroSection = dynamic(() => import("@/components/Hero"), { ssr: false });
const ThemesCollectionComponent = dynamic(
  () => import("@/components/ThemesCollection"),
  { ssr: false }
);
const BestSellingProductCard = dynamic(
  () => import("@/components/BestSellingProductCard"),
  { ssr: false }
);
const BottomCards = dynamic(() => import("@/components/BottomCard"), {
  ssr: false,
});

const CollectionComponent = dynamic(() => import("@/components/Collections"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
    <Suspense fallback={<Loading />}>

      <HeroSection />
      <CollectionComponent collections={collectionsData} />
      <ThemesCollectionComponent themes={themesData} />
      <BestSellingProductCard products={BestSellProductsData} />
      <BottomCards />
    </Suspense>
    </>
  );
}
