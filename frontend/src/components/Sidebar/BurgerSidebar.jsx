import { useContext } from 'react';
import { RiInstagramLine, RiFacebookCircleLine, RiWhatsappLine } from "react-icons/ri";
import { IoMdArrowForward } from 'react-icons/io';
import { RiArrowLeftLine } from "react-icons/ri";
import { SidebarContext } from '../../context/SidebarContext';
import { Link } from 'react-router-dom';
import { FiltersContext } from '../../context/FiltersContext';
import Heart from '../Icons/Heart';

import { ToastContext } from '../../context/ToastProvider';

import TransitionsModal from '../LoginModal'
import { useWishlist } from '../../context/WislistContext';
import { getToken, getUser } from '../../utils';

export const BurgerSidebar = () => {
  const {
    isBurgerOpen,
    handleBurgerClose
  } = useContext(SidebarContext);

  const { wishlist } = useWishlist()
  const showToast = useContext(ToastContext);
  const isLoggedIn = getUser() && getToken();

  const { categories } = useContext(FiltersContext);
  return (
    <div
      className={`${isBurgerOpen ? 'left-0' : '-left-full '
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-[1002] px-4 lg:px-[35px] flex flex-col `}
    >
      {/* HEAD */}
      <div className='flex items-center justify-between py-6 border-b '>

        <div className='uppercase text-sm font-semibold'>
          Categorías
        </div>
        {/**Icono */}
        <div
          onClick={handleBurgerClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          < RiArrowLeftLine className='text-2xl' />
        </div>
      </div>
      {/* BODY */}
      <div className='flex flex-col h-[380px] lg:h-[450px] overflow-y-auto overflow-x-hidden border-b items-center '>
        {
          categories?.data?.map((category) => {
            return (
              <Link key={category.id} to={`/categoria/${category?.attributes?.nombre}`} className='hover:bg-gray-200 w-full flex items-center justify-between py-4 border-b' onClick={handleBurgerClose}>
                <div className='w-8 h-8  justify-center items-center order-1 hidden sm:block'>
                  <IoMdArrowForward className='text-xl' />
                </div>
                <div className='ml-2 text-sm font-semibold'>
                  {category?.attributes?.nombre}
                </div>
              </Link>
            )
          })
        }

      </div>

      {/* FOOT */}
      <div className='flex items-center justify-between py-6 border-b '>

        <div className='uppercase text-sm font-semibold'>
          Configuración
        </div>

      </div>
      <div className='border-b py-4 px-2 flex gap-3 items-center'>
        <TransitionsModal onClick={handleBurgerClose} />
        <div className=''>
          {isLoggedIn && wishlist?.data?.[0]?.id
            ?
            (
              <div>
                <Link to={`/lista-deseo/${wishlist?.data?.[0]?.id}`}>
                  <Heart borderColor="red" bgColor={"red"} />
                </Link>
              </div>
            )
            :
            (
              <div onClick={() => { showToast("Inicia sesión para acceder a tu lista de deseos", "info") }}>
                <Heart borderColor="red" bgColor={"red"} />
              </div>
            )
          }
        </div>
      </div>
      {/* Link to Wishlist by ID */}

      {/* REDES */}
      <div className='border-b '>
        <div className='uppercase text-sm font-semibold  w-full '>
          {/* REDES ICON */}
          <div className='flex justify-center items-center gap-3 ml-auto  py-4'>
            <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
              <a href="https://www.facebook.com/PlanetaR.calama" target="_blank" rel="noopener noreferrer">
                <RiFacebookCircleLine className='text-white text-2xl' />
              </a>
            </div>
            <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
              <a href="https://www.instagram.com/rinconcito.musical/" target="_blank" rel="noopener noreferrer">
                <RiInstagramLine className='text-white text-2xl' />
              </a>
            </div>

            <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
              <a href="https://wa.me/569978525843" target="_blank" rel="noopener noreferrer">
                <RiWhatsappLine className='text-white text-2xl' />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
