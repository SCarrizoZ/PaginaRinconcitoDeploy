import {useContext} from 'react'
import { Link } from 'react-router-dom'
import {formatPrice} from '../utils'
import { CartContext } from '../context/CartContext'
import { BsPlus } from 'react-icons/bs'
export const ListView = ({ products }) => {
  console.log(products)
  const { addToCart } = useContext(CartContext)
  return (
    <section className='bg-red-300 w-full flex flex-col gap-2'>
      {
        products?.map((product) => {
          const {
            id = product.id,
            name = product?.attributes?.nombre,
            image = product?.attributes?.portada?.data?.attributes?.url,
            price = product?.attributes?.precio,
            description = product?.attributes?.descripcion,
            category = product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre
          }
            = product
          return (
            <article key={id} className='  gap-y-4 p-4 bg-yellow-200 flex flex-col'>
              <div className='flex gap-x-4 bg-orange-200 flex-col  lg:flex-row  '>
                {/* image */}
                <div className='  flex justify-center items-center bg-green-300'>
                  <Link  to={`/product/${id}`}>
                    <div className=' sm:w-[31.25rem] md:w-[350px] lg:w-[200px] mx-auto flex justify-center items-center'>
                      <img src={image} alt={name} className='max-h-[25rem] sm:max-h-none lg:max-h-[12.5rem] group-hover:scale-110 duration-300' />
                    </div>
                  </Link>
                </div>
                {/* product data */}
                <div className='flex flex-col gap-y-2 bg-purple-300 flex-1 p-4'>
                  <h4 className='text-xl font-bold'>{name}</h4>
                  <p className='text-gray-500'>{description.substring(0, 150)}...</p>
                  <p className='text-gray-500'>{category}</p>
                  <p className='text-red-500 font-medium'>{formatPrice(price)}</p>
                  
                  <button className='transition-all duration-300 bg-red-500 hover:bg-[#D40404] py-2 px-8 text-white font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0 max-w-sm self-end' onClick={() => {
                    addToCart(({ ...product, price }), id);
                  }}>
                    Añadir al carrito
                  </button>
                  {/* <Link to={`/products/${id}`} className='text-white bg-black px-4 py-2 rounded-md'>Details</Link> */}
                </div>
              </div>
            </article>
          )
        })
      }
    </section>
  )
}
