import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import collectionsData from './collectionsData';
import CollectionComponent from "@/components/Collections";
import ThemesCollectionComponent from "@/components/ThemesCollection";
import productsData from "./bestSellData";
import themesData from './themesData'
import BestSellingProductCard from "@/components/BestSellingProductCard";
import BottomCards from "@/components/BottomCard";
export default function Home() {
  return (
    <>
    <HeroSection/>
    <CollectionComponent collections={collectionsData} />
    <ThemesCollectionComponent themes={themesData}/>
    <BestSellingProductCard products={productsData} />
    <BottomCards/>
    </>
  )
}
