import {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'; 
import { GridView } from '../components/GridView';
export const ProductByBrand = () => {
  const { nombre } = useParams();
  const { products =[]} = useContext(ProductContext);
  // filter products by brand
  const productsByBrand = products?.data?.filter(product => product?.attributes?.marca?.data?.attributes?.nombre === nombre)
  console.log(productsByBrand)
  return (
    <div className="container mx-auto flex flex-col gap-3">
      <div className='border-l-4 border-red-500 px-2 mx-2'>

        <h1 className=' text-[2rem]'>{nombre}</h1>
      </div>
      <div className=' my-5'>

        <GridView products={productsByBrand} />
      </div>
    </div>
  )
}
