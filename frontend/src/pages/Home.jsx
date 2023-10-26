import React, {useContext} from 'react'
//import product context
import { ProductContext } from '../context/ProductContext'
// import components
import {Product} from "../components/Product"
import { Hero } from '../components/Hero';
export  function Home() {
  // get products from product context
  const {products}  = useContext(ProductContext);
  //console.log(products)
  const filteredProducts = products.filter(item=>{
    return item.category === "Guitarras" || item.category === "women's clothing"
  })

  //console.log(filteredProducts)
  return (
    
    <div className=''>
      <Hero/>
      {/* DISEÑO DE PRODUCTOS */}
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none'>
            {filteredProducts.map(product=>{
              // return un conjunto de divs. dentro debe haber el producto con la propiedad title
              return <Product key={product.id} product={product}/>

              
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
