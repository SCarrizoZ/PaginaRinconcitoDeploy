import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils'
import { CartContext } from '../context/CartContext'
import { BsPlus } from 'react-icons/bs'
export const ListView = ({ products }) => {
  console.log(products)
  const { addToCart } = useContext(CartContext)
  return (
    <section className=' w-full flex flex-col gap-2 mt-2'>
      {
        products?.map((product) => {
          const {
            id = product?.id,
            name = product?.attributes?.nombre,
            image = product?.attributes?.portada?.data?.attributes?.url,
            price = product?.attributes?.precio,
            description = product?.attributes?.descripcion,
            category = product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre,
            stock = product?.attributes?.stock
          }
            = product

          return (
            <article key={id} className='  gap-y-4 p-4  flex flex-col rounded-lg border border-[#e4e4e4] bg-white'>
              <div className='flex gap-x-4  flex-col  lg:flex-row  '>
                {/* image */}
                <div className='  flex justify-center items-center '>
                  <Link to={`/producto/${id}`}>
                    <div className=' sm:w-[31.25rem] md:w-[350px] lg:w-[200px] mx-auto flex justify-center items-center'>
                      <img src={image} alt={name} className='max-h-[25rem] sm:max-h-none lg:max-h-[12.5rem] group-hover:scale-110 duration-300' />
                    </div>
                  </Link>
                </div>
                {/* product data */}
                <div className='flex flex-col gap-y-2  flex-1 p-4'>
                  <h4 className='text-xl font-bold'>{name}</h4>
                  <p className='text-gray-500'>{description.substring(0, 150)}...</p>
                  <p className='text-gray-500'>{category}</p>
                  <p className='text-red-500 font-medium'>{formatPrice(price)}</p>

                  <button disabled={!(stock > 0)} className={`transition-all duration-300   ${stock > 0 ? "bg-[#D40404] hover:bg-[#F80606]  text-white" : "bg-white text-black opacity-[0.6] cursor-not-allowed"} py-2 px-8  font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0`}
                    onClick={() => {
                      addToCart(({ ...product, precio: price }), id);
                    }}>
                    {
                      stock > 0 ? "Agregar al carrito" : "Agotado"
                    }
                  </button>


                </div>


              </div>
            </article>
          )
        })
      }
    </section>
  )
}
