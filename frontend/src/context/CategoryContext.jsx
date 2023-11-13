import React, { createContext, useState, useEffect } from 'react'
import { getCategories } from '../api/Categories.api';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  // Estado del producto
  const [categories, setCategories] = useState([])
  // Fetch con useEffect
  useEffect(() => {
    // metodo getCategories
    async function fetchCategories() {
      const data = await getCategories()
      console.log(data)
      setCategories(data)
    }
    fetchCategories()


  }, [])

  return <CategoryContext.Provider value={{ categories }}>{children}</CategoryContext.Provider>

}

export default CategoryProvider;