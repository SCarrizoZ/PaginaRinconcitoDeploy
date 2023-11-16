import { createContext, useState, useEffect } from 'react'
import { getCategories } from '../api/Categories.api';
import { getBrands } from '../api/Brand.api';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  // Estado del producto
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [subcategories, setSubcategories] = useState([])
  // Fetch con useEffect
  useEffect(() => {
    // metodo getCategories
    async function fetchCategories() {
      const data = await getCategories()
      console.log(data)
      setCategories(data)
    }
    async function fetchBrands() {
      const data = await getBrands()
      console.log(data)
      setBrands(data)
    }
    fetchCategories()
    fetchBrands()


  }, [])

  return <FiltersContext.Provider value={{ categories, brands, minPrice, subcategories, setMinPrice, setSubcategories }}>{children}</FiltersContext.Provider>

}

export default FiltersProvider;