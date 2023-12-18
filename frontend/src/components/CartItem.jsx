import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdRemove, IoMdAdd, IoMdClose } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils'
import { scrollToTop } from '../utils';
// Función para formatear el precio con puntos cada 3 dígitos y agregar CLP


export function CartItem({ item }) {
  // Deconstruye las propiedades del elemento del carrito de acuerdo a la nueva estructura de datos
  const { id, attributes } = item;
  const { nombre, precio, portada } = attributes;

  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Formatea el precio con puntos y agrega CLP
  const formattedPrice = formatPrice(precio);

  // Calcula el total por objeto como un número entero
  const totalPorObjeto = precio * item.amount;

  return (
    <div className='flex gap-x-4 py-2 lg:px-2 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4  p-2'>
        {/* Imagen */}
        <Link onClick={scrollToTop} to={`/producto/${id}`}>
          <img src={portada?.data?.attributes?.url} alt={nombre} className='max-w-[80px]' />
        </Link>

        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            {/** Propiedades del objeto */}
            <Link onClick={scrollToTop} to={`/producto/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover-underline '>
              {nombre.substring(0, 30)}...
            </Link>
            <div className='text-xl cursor-pointer' onClick={() => { removeFromCart(id) }}>
              {/* Icono de cierre */}
              <RiCloseCircleLine className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          {/** Cantidad */}
          <div className=' flex gap-x-2 h-[36px] text-sm'>
            {/** Incrementar-Decrementar valor */}
            <div className=' flex flex-1 max-w-[100px]   items-center h-full border text-primary font-medium '>
              <div onClick={() => { decreaseQuantity(id) }} className=' flex-1 h-full flex justify-center items-center cursor-pointer border-r'><IoMdRemove /></div>
              <div className='h-full flex justify-center items-center px-2'>{item?.amount}</div>
              <div onClick={() => increaseQuantity(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer border-l'><IoMdAdd /></div>
            </div>
            <div className='flex flex-1 justify-around items-center'>{formattedPrice}</div>
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`${formatPrice(totalPorObjeto)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}