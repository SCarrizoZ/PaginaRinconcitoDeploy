import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from "../api/Products.api"

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Estado del producto
  const [products, setProducts] = useState([])
  // Fetch con useEffect
  useEffect(() => {
    // metodo getProduct
    async function fetchProducts() {
      const data = await getProducts()
      console.log("sissss",data)
      setProducts(data)
      
    }
    fetchProducts()


  }, [])

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>

}

export default ProductProvider;