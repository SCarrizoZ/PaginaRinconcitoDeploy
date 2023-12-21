import React from 'react'
import { Skeleton } from '@mui/material'
export const ProductSkeleton = () => {
  return (
    //<div className={`rounded-lg border border-[#e4e4e4] bg-white ${gap ? "mx-2" : ""} ${min_width ? "w-[200px]" : ""} h-full`}>
    //   {/** Container de la portada TOP */}
    //   <div className='border-b h-[300px] mb-4 relative overflow-hidden group transition'>
    //     <div className='w-full h-full flex justify-center'>
    //       {/* Imagenes */}
    //       <div className='w-[200px] mx-auto flex justify-center items-center'>
    //         <Link onClick={scrollToTop} to={`/producto/${id}`}>
    //           <div className='w-[200px] mx-auto flex justify-center items-center'>
    //             <img src={portada?.data?.attributes?.url} alt={nombre} className='max-h-[160px] group-hover:scale-110 duration-300' />
    //           </div>
    //         </Link>
    //       </div>
    //       {/** Botones */}
    //       <div className='absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col gap-y-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 '>
    //         {/* if stock is greater than 0 block the button */}
    //         <button onClick={() => {
    //           addToCart(({ ...product, precio }), id);
    //         }} disabled={!(stock > 0)}>
    //           <div className={`flex justify-center items-center text-white w-12 h-12  ${stock > 0 ? "bg-red-500" : " bg-red-100 cursor-not-allowed"}`}>
    //             <BsPlus className="text-3xl" />
    //           </div>
    //         </button>
    //         <Link onClick={scrollToTop} to={`/producto/${id}`} className='w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl'>
    //           <BsEyeFill />
    //         </Link>
    //         <button onClick={() => {
    //           addToWishlist(id)
    //         }}>
    //           <div className='flex justify-center items-center text-white w-12 h-12 bg-white'>
    //             <HeartAddWishlist borderColor="red" bgColor={"red"} isInWishlist={isInWishlist} key={isInWishlist.toString()} />
    //           </div>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/** Categoria, Título, y precio */}
    //   <div className='p-4'>
    //     <div className='text-sm text-gray-500 capitalize text-ellipsis overflow-hidden ...'>{subcategoria?.data?.attributes?.nombre}</div>
    //     <Link onClick={scrollToTop} to={`/producto/${id}`}>
    //       <h2 className='font-semibold mb-1 break-all ...'>{nombre}</h2>
    //     </Link>
    //     <div className={`font-semibold ${stock > 0 ? "" : "text-gray-400 flex justify-center "}`}>
    //       {/* if stock is greater than 0 show the price */}
    //       {
    //         stock > 0 ? formatPrice(precio) : "Agotado"
    //       }
    //     </div>
    //   </div>
    // </div>
    // Above is the original code to be replaced with skeleton
    <div>

      
      <Skeleton variant="rectangular" width="100%" height={300} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />

    </div>
  )
}
