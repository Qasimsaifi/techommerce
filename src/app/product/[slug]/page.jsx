// import RecommendedProductSlider from '@/components/RecomendedProducts';
import CardSlider from '@/components/RecomendedProducts';
import SingleProduct from '@/components/SingleProduct';
import productsData from '@/app/bestSellData';
const SingleProductPage = () => {

  return (
    <>
   <SingleProduct/>
   <CardSlider cards={productsData}/>
    </>
  );
};

export default SingleProductPage;
