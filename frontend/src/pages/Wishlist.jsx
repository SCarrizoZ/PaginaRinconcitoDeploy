import { useParams } from "react-router-dom"
import { apiUrl } from "../../config"
import { useEffect, useState } from "react";

import { WishlistItem } from "../components/WishlistItem";
import { RiShoppingCart2Line } from "react-icons/ri";

import Skeleton from '@mui/material/Skeleton';
import { useWishlist } from "../context/WislistContext";
import { SocialShare } from "../components/SocialShare";

export const Wishlist = () => {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const { wishlist: contextWishlist } = useWishlist()

  const isLoggedIn = !!localStorage.getItem('user') && !!localStorage.getItem('token');

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`${apiUrl}/lista-deseos/${id}?populate[productos][populate][subcategoria][populate]=categoria&populate[productos][populate]=portada`);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
          // Lanzar un error con la información de estado (p.ej., 404, 500)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const wishlist = await response.json();
        setWishlist(wishlist);
      } catch (error) {
        // Aquí se capturarán tanto errores de red como errores HTTP lanzados manualmente
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlist();
  }, [id, contextWishlist]);


  // Fetch wishlist from api with id from params from `${apiUrl}/lista-deseos/${id}?populate[productos][populate]=portada`

  return (
    <>
      <div className='container mx-auto my-4 '>
        <div className='p-5 flex items-center gap-2'>
          <h2 className='text-[2rem]'>{wishlist?.data?.attributes?.nombre}</h2>
        </div>

        <div className='flex justify-center gap-[1rem]  p-2 flex-col lg:flex-row'>
          {/* ITEMS */}
          <div className={`max-w-[100%]  w-full p-2 flex flex-col gap-2 ${wishlist?.data?.attributes?.productos?.data === 0 ? "justify-center" : ""}`}>
            {/* if no products show a message */}
            {
              // Use Material UI skeleton like for loading otherwise show wishlist data

              // isLoading ? <div className='flex justify-center items-center gap-2 '>
              //   <RiShoppingCart2Line className='text-[3rem]' />
              //   <h2 className='text-[2rem]'>Cargando...</h2>
              // </div> : error ? <div className='flex justify-center items-center gap-2 '>
              //   <RiShoppingCart2Line className='text-[3rem]' />
              //   <h2 className='text-[2rem]'>Error al cargar la lista de deseos</h2>
              // </div> :
              isLoading ? Array.from(new Array(4)).map((item, index) => {
                return <div key={index} className='flex gap-2'>
                  <Skeleton variant="rectangular" width={120} height={120} />
                  <div className='flex flex-col gap-2'>
                    <Skeleton variant="text" width={500} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                    <Skeleton variant="text" width={200} height={30} />
                  </div>
                </div>
              }
              ) : error ? <div className='flex justify-center items-center gap-2 '>
                <RiShoppingCart2Line className='text-[3rem]' />
                <h2 className='text-[2rem]'>Error al cargar la lista de deseos</h2>
              </div> :
                wishlist?.data?.attributes?.productos?.data?.length !== 0 ? wishlist?.data?.attributes?.productos?.data?.map((item) => {
                  return <WishlistItem
                    key={item?.id}
                    item={item}
                    category={item?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre}
                    showDeleteButton={isLoggedIn && wishlist?.data?.id === contextWishlist?.data?.[0]?.id}
                  />
                }
                ) : <div className='flex justify-center items-center gap-2 '>
                  <RiShoppingCart2Line className='text-[3rem]' />
                  <h2 className='text-[2rem]'>La lista de deseos está vacía</h2>
                </div>
            }


          </div>
        </div>
        {wishlist?.data?.attributes?.productos?.data?.length !== 0 && <SocialShare />}
      </div>

    </>

  )
}