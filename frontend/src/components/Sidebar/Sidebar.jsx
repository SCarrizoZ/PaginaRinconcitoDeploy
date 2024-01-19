import { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../CartItem';
import { SidebarContext } from '../../context/SidebarContext';
import { CartContext } from '../../context/CartContext';
import { formatPrice } from '../../utils'
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from "react-icons/ri";
import { scrollToTop } from '../../utils';
export function Sidebar() {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, removeFromCart, clearAllItems, total } = useContext(CartContext);


  const handleSidebarClose = () => {
    handleClose();
    scrollToTop();
  }
  // Función para formatear el precio con puntos cada 3 dígitos y agregar CLP



  // Calcular el subtotal en números enteros y formatear
  const subtotal = total.toFixed(0);

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-full'
        } w-full  fixed top-0  shadow-2xl md:w-[40vw] xl:max-w-[30vw] bg-green-300 h-full p-2 transition-all duration-300 z-[1002] px-4 lg:px-[35px] bg-white `}
    >
      <div className='flex items-center justify-between py-6 border-b    '>
        <div className='uppercase text-sm font-semibold order-1 '>
          Carrito de compras ({cart.length})
        </div>
        {/**Icono */}
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center '
        >
          <RiArrowRightLine className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col h-[300px] md:h-[400px] lg:h-[300px] xl:h-[500px] overflow-y-auto overflow-x-hidden border-b bg-pink-200 '>
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
            className='bg-red-500 hover:bg-red-600 w-12 h-12 flex justify-center items-center text-xl py-4 cursor-pointer transition-all text-white rounded-lg '
            onClick={() => {
              clearAllItems();
            }}
          >
            <FiTrash2 />
          </div>
        </div>
        {/* See cart  */}
        <Link
        onClick={handleSidebarClose}
          to='/carrito'
          className='bg-red-500 hover:bg-red-600 w-full py-3 flex justify-center items-center text-xl cursor-pointer transition-all text-white rounded-lg'
        >
          <span>Ver carrito</span>
          <IoMdArrowForward className='ml-2' />
        </Link>
      </div>
    </div>
  );
}
