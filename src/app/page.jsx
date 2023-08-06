import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import collectionsData from './collectionsData';
import CollectionComponent from "@/components/Collections";
export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CollectionComponent collections={collectionsData} />

    </>
  )
}
