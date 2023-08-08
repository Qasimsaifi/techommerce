import AllProduct from '@/components/AllProducts'
import productsData from '@/app/bestSellData';


const AllProductsPage = () => {
  return (
    <>
    <AllProduct cards={productsData}/>
    </>
  )
}

export default AllProductsPage