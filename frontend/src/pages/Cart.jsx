import { useState, useEffect, useContext }  from 'react'

import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils'
import { Link } from 'react-router-dom'
import { RiCloseFill } from 'react-icons/ri'
import { FiTrash2 } from 'react-icons/fi'
import { CartItem } from '../components/CartItem'

import { SidebarContext } from '../context/SidebarContext'

import { Header } from '../components/Header'

export const Cart = () => {
  const {cart, setCart} = useContext(CartContext)
  
  return (
    <div className='container mx-auto my-4 '>
      {/* CART TITUL */}
      <div className='p-5 '>
        <h2 className='text-[2rem]'>Tu carrito de compras ({cart.length } artículos únicos)</h2>
      </div>
      <div className='flex bg-pink-200 p-4'>
        {/* ITEMS */}
        <div className='bg-blue-300 w-[50%]'>
          {
            cart.map((item) => {
              return <CartItem key={item.id} item={item}></CartItem>;
            })

          }
        </div>
        {/* SUMM */}
        <div className='bg-green-300 w-full'>
          <div className='bg-gray-300 m-4 p-4 sticky top-[112px] md:top-[152px]'>
            <h2 className='text-[2rem]'>Resumen de compra</h2>
            <div className='flex justify-between items-center'>
              <h3>Subtotal</h3>
              <h3>{formatPrice(1000)}</h3>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Envío</h3>
              <h3>{formatPrice(1000)}</h3>
            </div>
            <div className='flex justify-between items-center'>
              <h3>Total</h3>
              <h3>{formatPrice(1000)}</h3>
            </div>
            <div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Finalizar compra
              </button>
            </div>
          </div>
        </div>

      </div>
      {/* COM */}
      <div className='bg-orange-300 p-5 flex items-center gap-4'>
        {/* Seguir comprando button */}
        <div>
          <Link to='/' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Seguir comprando
          </Link>
        </div>
        {/* Clear cart button */}
        <div className=''>
          <button onClick={()=>{setCart([])}} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  )
}
