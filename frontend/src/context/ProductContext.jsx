import React,{createContext, useState, useEffect} from 'react'
import {getProducts} from "../api/Products.api"

export const ProductContext = createContext();
  
export const ProductProvider = ({children})=>{
  // product state
  const [products, setProducts] = useState([])
  // fetch with useEffect
  useEffect(  () => {
    // getProduct method
    async function fetchProducts(){
      const data = await getProducts()
      //console.log(data)
      setProducts(data)
    }
    fetchProducts()
    

  },[])

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
  
}

export default ProductProvider;