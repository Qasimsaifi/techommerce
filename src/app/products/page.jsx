import dynamic from 'next/dynamic';
import productsData from "@/app/ProductData";
const AllProduct = dynamic(() => import("@/components/AllProducts"), { ssr: false });



const AllProductsPage = () => {
  return (
    <>
      <AllProduct cards={productsData} />
    </>
  );
};

export default AllProductsPage;
