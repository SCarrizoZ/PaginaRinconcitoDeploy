import React from 'react'
import { Product } from './Product'
export const GridView = ({ products }) => {
  // console.log(products)
  return (
    <div className={`p-2   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[15px]  max-w-sm  sm:max-w-none px-2 mx-auto`}>

      {products?.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
