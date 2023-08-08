import dynamic from "next/dynamic";
import collectionsData from "./collectionsData";
import productsData from "./bestSellData";
import themesData from "./themesData";

const HeroSection = dynamic(() => import("@/components/Hero"), { ssr: false });
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
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
    <main>
      <HeroSection />
      <CollectionComponent collections={collectionsData} />
      <ThemesCollectionComponent themes={themesData} />
      <BestSellingProductCard products={productsData} />
      <BottomCards />
    </main>
  );
}
