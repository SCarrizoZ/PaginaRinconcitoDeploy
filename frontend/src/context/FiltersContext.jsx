import { createContext, useState, useEffect, useContext, useRef } from 'react'
import { getCategories } from '../api/Categories.api';
import { getBrands } from '../api/Brand.api';
import { ProductContext } from './ProductContext';
export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  // const { products } = useContext(ProductContext)
  const rangeInputRef = useRef(null);
  // Estado del producto
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [filterBrands, setFilterBrands] = useState([]) // this will be used to filter the products based on brands
  const [minPrice, setMinPrice] = useState(0)
  const [subcategories, setSubcategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]); // this will be used to filter the products based on brands
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [selectValue, setSelectValue] = useState('Default');
  const [products, setProducts] = useState([])
  const [gridView , setGridView] = useState(false)
  useEffect(() => {
    // console.log(brands)
  }, [brands])
  // reset filters
  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setMinPrice(0)
    setSelectValue('Default')
  }
  // Range Slider
  const resetRangeSlider = ()=>{
    rangeInputRef.current.value=0
    setMinPrice(0);
  }
  // BRANDS OPERATIONS
  const addBrand = (brand) => {
    if (!selectedBrands?.includes(brand)) {
      setSelectedBrands(prev => ([...prev, brand]))
    }
    resetRangeSlider()  
    setSelectValue('Default')

  }
  const removeBrand = (brand) => {
    if (selectedBrands?.includes(brand)) {
      const removedList = selectedBrands?.filter((item) => (item !== brand));
      setSelectedBrands(removedList);
    }
    resetRangeSlider()  
    setSelectValue('Default')
  }
  // CATEGORY OPERATIONS
  const addCategory = (category) => {
    if (!selectedCategories?.includes(category)) {
      setSelectedCategories(prev => ([...prev, category]))

    }
    resetRangeSlider()  
    setSelectValue('Default')

  }
  const removeCategory = (category) => {
    if (selectedCategories?.includes(category)) {
      const removedList = selectedCategories?.filter((item) => (item !== category));
      setSelectedCategories(removedList);
    }
    resetRangeSlider()  
    setSelectValue('Default')
  }

  // filters and sort
  const applyFilter = () => {
 
    if (selectedCategories?.length === 0 && selectedBrands?.length === 0 && minPrice === 0 ) {
      // console.log("no hay nada seleccionado")
      return products
    }
    else{
      // console.log("hay algo seleccionado")
      
      let filteredItems = products
      if(selectedCategories?.length !== 0){
        filteredItems = filteredItems?.filter(product => {
          return selectedCategories?.includes(product?.attributes?.subcategoria?.data?.attributes?.nombre)
        })
      }
      // console.log("POS-CAT: ",filteredItems)
      if(selectedBrands?.length !== 0){
        filteredItems = filteredItems?.filter(product => {
          return selectedBrands?.includes(product?.attributes?.marca?.data?.attributes?.nombre)
        })
      }
      // console.log("POS-BR: ",filteredItems)

      if(minPrice !== 0){
        filteredItems = filteredItems?.filter(product => {
          return parseInt(product?.attributes?.precio) >= minPrice
        })
      }
      return filteredItems
    }
  };
  const applySort = (newList) => {
    // console.log(selectValue)
    if(selectValue === 'ascending'){
      newList = newList.sort((a,b)=>(a?.attributes?.nombre.localeCompare(b?.attributes?.nombre)))
      
    }
    else if(selectValue === 'descending'){
      newList = newList.sort((a,b)=>(b?.attributes?.nombre.localeCompare(a?.attributes?.nombre)))
    }
    else if(selectValue === 'high-price'){
      newList = newList.sort((a,b)=>(parseInt(b?.attributes?.precio) - parseInt(a?.attributes?.precio)))
    }
    else if(selectValue === 'low-price'){
      newList = newList.sort((a,b)=>(parseInt(a?.attributes?.precio) - parseInt(b?.attributes?.precio)))
    }else if(selectValue === 'Default'){
      newList = products
    }
    return newList
  }
  


  // Fetch con useEffect
  useEffect(() => {
    // metodo getCategories
    async function fetchCategories() {
      const data = await getCategories()
      // console.log(data)
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

  return <FiltersContext.Provider value={{ 
                                          categories, 
                                          brands, 
                                          minPrice, 
                                          subcategories, 
                                          setBrands,
                                          setMinPrice, 
                                          setSubcategories, 
                                          filteredProductList, 
                                          setFilteredProductList,
                                          selectedCategories, 
                                          setSelectedCategories,
                                          selectedBrands,
                                          setSelectedBrands,
                                          
                                          addBrand,
                                          removeBrand,
                                          addCategory,
                                          removeCategory,
                                          applyFilter,
                                          applySort,
                                          selectValue,
                                          setSelectValue,
                                          products,
                                          setProducts,
                                          resetFilters,
                                          rangeInputRef,
                                          resetRangeSlider,
                                          filterBrands,
                                          setFilterBrands,
                                          gridView,
                                          setGridView
                                           }}>{children}</FiltersContext.Provider>

}

export default FiltersProvider;