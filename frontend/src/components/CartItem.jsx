import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
// Icons
import { IoMdRemove,IoMdAdd, IoMdClose } from 'react-icons/io'
import {RiCloseCircleLine} from 'react-icons/ri'
// Context
import { CartContext} from '../context/CartContext';
export  function CartItem({item}) {
  const {id,image,category,title,price,user,num_reviews,count_in_stock,created,amount} = item;
  const {removeFromCart, increaseQuantity,decreaseQuantity} = useContext(CartContext);
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/*Image*/}
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className='max-w-[80px]' />
        </Link>

        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            {/**Item's properties*/}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover-underline'>
              {title}
            </Link>
            <div className='text-xl cursor-pointer' onClick={()=>{removeFromCart(id)}}>
              {/* Close icon */}
              <RiCloseCircleLine className='text-gray-500 hover:text-red-500  transition'/>
            </div>
        </div>
        {/**Quantity */}
        <div className=' flex gap-x-2 h-[36px] text-sm'>

          {/**Increment-decrement value */}
          <div className=' flex flex-1 max-w-[100px]   items-center h-full border text-primary font-medium '>
            <div onClick={()=>{decreaseQuantity(id)}} className=' flex-1 h-full flex justify-center items-center cursor-pointer border-r'><IoMdRemove/></div>
            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
            <div onClick={()=>increaseQuantity(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer border-l'><IoMdAdd/></div>
          </div>
          <div className='flex flex-1 justify-around items-center'>${price}</div>
          <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(item.price * amount).toFixed(2)}`}</div>
        </div>
        </div>
      </div>
    </div>
  )
}
