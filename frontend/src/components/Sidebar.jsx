import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../components/CartItem';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

export function Sidebar() {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, removeFromCart, clearAllItems, total } = useContext(CartContext);

  // Función para formatear el precio con puntos cada 3 dígitos y agregar CLP
  const formatPrice = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} CLP`;
  };


  // Calcular el subtotal en números enteros y formatear
  const subtotal = total.toFixed(0);

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Carrito de compras ({cart.length})
        </div>
        {/**Icono */}
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          <RiCloseFill className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col h-[540px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item}></CartItem>;
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4'>
        <div className='flex w-full justify-between items-center '>
          {/*Subtotal */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Subtotal:</span>
            {formatPrice(subtotal)}
          </div>
          {/*Icono para limpiar */}
          <div
            className='bg-red-500 w-12 h-12 flex justify-center items-center text-xl py-4 cursor-pointer transition-all text-white '
            onClick={() => {
              clearAllItems();
            }}
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
}
