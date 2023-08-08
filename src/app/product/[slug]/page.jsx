import dynamic from 'next/dynamic';
import productsData from "@/app/ProductData";
const CardSlider = dynamic(() => import("@/components/RecomendedProducts"), { ssr: false });
const SingleProduct = dynamic(() => import("@/components/SingleProduct"), { ssr: false });

const SingleProductPage = ({ params }) => {
  return (
    <>
      <SingleProduct filterLink={params.slug} productData={productsData}/>
      <CardSlider cards={productsData} />
    </>
  );
};

export default SingleProductPage;
