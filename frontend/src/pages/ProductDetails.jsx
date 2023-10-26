import React,{createContext, useState, useEffect, useContext} from 'react'

// Context
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { ProductContext } from '../context/ProductContext'
export const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  
  // get product by id
  const product = products.find((item)=>{
    return item.id === parseInt(id);
  });
  if(!product){
    return <section className='h-scree flex justify-center'></section>
  }
  const {title,price,description,image} = product

  console.log(product)
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col lg:flex-row items-center '>
          {/*Image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0  border m-4 rounded-lg'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
          </div>
          {/*Text */}
          <div className='flex-1 text-center lg:text-left'>
            
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{title}</h1>
            <div className='text-xl text-red-500 font-medium'></div>
            <p className='mb-8'>{description}</p>
            <button className="bg-red-500 py-4 px-8 text-white flex mb-20" onClick={()=>{addToCart(product,product.id)}}>Añadir al carrito de compras</button>
          </div>
        </div>
      </div>
    </section>
  )
}
