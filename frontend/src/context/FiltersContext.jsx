import { createContext, useState, useEffect, useContext } from 'react'
import { getCategories } from '../api/Categories.api';
import { getBrands } from '../api/Brand.api';
import { ProductContext } from './ProductContext';
export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const { products } = useContext(ProductContext)
  // Estado del producto
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [subcategories, setSubcategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]); // this will be used to filter the products based on brands
  const [filteredProductList, setFilteredProductList] = useState([]);
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
      // console.log(data)
      setBrands(data)
    }
    fetchCategories()
    fetchBrands()


  }, [])

  return <FiltersContext.Provider value={{ categories, 
                                           brands, 
                                           minPrice, 
                                           subcategories, 
                                           setMinPrice, 
                                           setSubcategories, 
                                           filteredProductList, 
                                           setFilteredProductList }}>{children}</FiltersContext.Provider>

}

export default FiltersProvider;