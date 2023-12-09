
import { SocialShare } from './SocialShare';
import {Heart} from './Icons/Heart'
import { formatPrice } from '../utils'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
export const SingleProduct = (product) => {
  const precio = product?.precio
  const singleProduct = product?.product
  const { addToCart } = useContext(CartContext);
  return (
    <section className='pt-32 pb-12 lg:py-32 flex items-center  '>

      <div className="flex flex-col  mx-auto p-4 bg-white rounded ">
        <div className='flex flex-col lg:flex-row  px-2 py-10 -lg w-full  '>
          {/* Imagen */}
          {/* <div className='flex flex-col '>
                    <div className=' flex-col border hidden lg:block '>
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
                    </div>
                  </div> */}
          {/* IMAGES */}
          <div className=' flex gap-3 p-2 '>
            <div>
              {/* OTHER RELATED IMAGES */}
              <div>
                <div className=' flex-col  hidden md:flex gap-1 '>
                  <img className=' cursor-pointer outline outline-1 hover:outline-red-500 hover:outline-2  max-w-[100px] lg:max-w-[100px] rounded-lg  border-black' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                  <img className='cursor-pointer outline outline-1 hover:outline-red-500 hover:outline-2 max-w-[100px] lg:max-w-[100px] rounded-lg border-black' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
                </div>
              </div>
              <div>

              </div>
            </div>
            <div className='self-center lg:self-auto   justify-center items-center  lg:mb-0 border  rounded-lg mx-auto md:ml-auto border-black border-opacity-[30%]'>
              <img className=' sm:max-w-lg md:max-w-lg ' src={singleProduct?.attributes?.portada?.data?.attributes?.url} alt={singleProduct?.attributes?.nombre} />
            </div>

          </div>
          {/* Texto */}
          <div className='flex flex-col gap-3    p-4  lg:max-w-[400px]  '>
            <h1 className='text-[26px] font-medium  max-w-[450px] '>{singleProduct?.attributes?.nombre}</h1>
            {/* check stock */}
            {
              singleProduct?.attributes?.stock > 0 ?
                <div className='text-green-500 font-bold uppercase'>En stock</div>
                :
                <div className='text-red-500 font-bold uppercase'>Sin stock</div>
            }
            <div className='text-xl text-[#F80606] font-semibold'>{`${formatPrice(precio)}`}</div>
            <p className='mb-8 text-[1rem] font-normal'>{singleProduct?.attributes?.descripcion}</p>

            <div className='flex justify-end items-center lg:justify-end gap-3  p-1'>
              <button className="transition-all duration-300 hover:bg-[#F80606] bg-[#D40404] py-2 px-8 text-white font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0"
                onClick={() => { addToCart({ ...singleProduct, precio }, singleProduct?.attributes?.id); }}>
                Agregar al carrito
              </button>
              {/* heart icon wishlist  only icon*/}
              <div className='border border-black rounded-lg p-1 mx-auto sm:mx-0'>
                <Heart borderColor={"black"} bgColor={"#FB6F6F"} />
              </div>


            </div>
          </div>
        </div>
        <SocialShare />
      </div>

    </section>
  )
}
