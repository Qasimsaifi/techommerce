import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import collectionsData from './collectionsData';
import CollectionComponent from "@/components/Collections";
import ThemesCollectionComponent from "@/components/ThemesCollection";
import themesData from './themesData'
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CollectionComponent collections={collectionsData} />
    <ThemesCollectionComponent themes={themesData}/>

    </>
  )
}
