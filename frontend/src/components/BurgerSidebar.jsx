import { useContext, useState, useRef } from 'react';

import { IoMdArrowForward } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../components/CartItem';
import { RiPriceTag3Line,RiArrowLeftLine  } from "react-icons/ri";

import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils'
import { Link } from 'react-router-dom';
import { FiltersContext } from '../context/FiltersContext';
// import { CSSTransition } from 'react-transition-group';
// import index.css file 
import '../index.css';

export const BurgerSidebar = () => {
  const { 
          isOpen,
          setIsOpen,
          handleClose,
          isBurgerOpen,
          setIsBurgerOpen,
          handleBurgerClose
        } = useContext(SidebarContext);
  const { cart, removeFromCart, clearAllItems, total } = useContext(CartContext);
  const subtotal = total.toFixed(0);
  const {categories} = useContext(FiltersContext);
  return (
    <div
      className={`${isBurgerOpen ? 'left-0' : '-left-full'
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-[1002] px-4 lg:px-[35px]`}
    >
      {/* HEAD */}
      <div className='flex items-center justify-between py-6 border-b '>
        
        <div className='uppercase text-sm font-semibold'>
          {/* tag icon */}
          {/* <RiPriceTag3Line className='inline-block mr-2' /> */}
          Categorías
        </div>
        {/**Icono */}
        <div
          onClick={handleBurgerClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          {/* Arrow icon pls. Opposite direction pls */}
           < RiArrowLeftLine  className='text-2xl' />
           
          {/* <RiCloseFill className='text-2xl' /> */}
        </div>
      </div>
      {/* BODY */}
      <div className='flex flex-col h-[540px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b items-center'>
        {/* {cart.map((item) => {
          return <CartItem key={item.id} item={item}></CartItem>;
        })} */}
       {/* <DropdownMenu /> */}
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
      <div className='border-b'>
       CERRAR SESIÓN
       {/* <CSSTransition><div>asd</div></CSSTransition> */}
      </div>
      <div className='flex items-center justify-between py-6 border-b '>
        
        <div className='uppercase text-sm font-semibold'>
          Redes sociales
        </div>
        
      </div>
      <div className='border-b'>
       REDES
      </div>
    </div>
  )
}
