import { useContext, useEffect, useId, useState, useRef } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { FilterComponent } from "./FilterList"
import { Product } from '../components/Product';
import { formatPrice } from "../utils";
import {Select, MenuItem} from "@mui/material";
export const Filters = ({ productList, subcategoriesList, brandList, nombre , setProductList}) => {

  const { setMinPrice, minPrice, subcategories, setSubcategories } = useContext(FiltersContext)
  const minPriceFilterId = useId()
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]); // this will be used to filter the products based on brands
  const [fileredProductList, setFilteredProductList] = useState([]);
  const [openFilter, setOpenFilter] = useState(true); // this will be used to filter the products based on brands
  const [products, setProducts] = useState(); // this will be used to filter the products based on brands
  const rangeInputRef = useRef(null);
  const [lowerToHigher, setLowerToHigher] = useState(false); // this will be used to filter the products based on brands
  const [higherToLower, setHigherToLower] = useState(false); // this will be used to filter the products based on brands
  const [selectValue, setSelectValue] = useState(1); // this will be used to filter the products based on brands
  // CATEGORIES OP
  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories(prev => ([...prev, category]))

    }
    // resetRangeSlider()  

  }
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setMinPrice(0);
  }

  const removeCategory = (category) => {
    if (selectedCategories.includes(category)) {
      const removedList = selectedCategories.filter((item) => (item !== category));
      setSelectedCategories(removedList);
    }
    resetRangeSlider()  
  }
  // BRANDS OP
  const addBrand = (brand) => {
    if (!selectedBrands.includes(brand)) {
      setSelectedBrands(prev => ([...prev, brand]))
    }
    resetRangeSlider()  

  }
  const resetMinPrice = () => {
    setMinPrice(0);
  };
  const resetRangeSlider = ()=>{
    rangeInputRef.current.value=0
    resetMinPrice(0)
  }
  const removeBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      const removedList = selectedBrands.filter((item) => (item !== brand));
      setSelectedBrands(removedList);
    }
    resetRangeSlider()  
  }
  const handleLowerToHigher = () => {
    setLowerToHigher(!lowerToHigher)
  }
  const handleHigherToLower = () => {
    setHigherToLower(!higherToLower)
  }

  // FILTERS CALCULATION
  const applyFilter = () => {
    // if(productList!==undefined){
    //   console.log(productList[0]?.attributes?.subcategoria?.data?.attributes?.nombre)
    //   console.log(productList[0]?.attributes?.marca?.data?.attributes?.nombre)
    //   console.log(productList[0]?.attributes?.precio)
      
    // }

    if (selectedCategories.length === 0 && selectedBrands.length === 0 && minPrice === 0 && lowerToHigher === false && higherToLower === false) {
      console.log("no hay nada seleccionado")
      return products
    }else{
      let filteredItems = []
      if(selectedCategories.length !== 0){
        filteredItems = products.filter(product => {
          return selectedCategories.includes(product?.attributes?.subcategoria?.data?.attributes?.nombre)
        })
      if(selectedBrands.length !== 0){
        filteredItems = filteredItems.filter(product => {
          return selectedBrands.includes(product?.attributes?.marca?.data?.attributes?.nombre)
        })

      }
      if(minPrice !== 0){
        filteredItems = filteredItems.filter(product => {
          return parseInt(product?.attributes?.precio) >= minPrice
        })
      }
      // higher to lower price sort
      
      // filteredItems.sort((a,b)=>(a?.attributes?.precio - b?.attributes?.precio))
      filteredItems.sort((a,b)=>(b?.attributes?.precio - a?.attributes?.precio))
      // filter by alphabetical order
      // filteredItems.sort((a,b)=>(a?.attributes?.nombre.localeCompare(b?.attributes?.nombre)))
      // filter by alphabetical order reverse
      filteredItems.sort((a,b)=>(b?.attributes?.nombre.localeCompare(a?.attributes?.nombre)))

      // lower to higher price sort
      // if(lowerToHigher){
      //   filteredItems.sort((a,b)=>(b?.attributes?.precio - a?.attributes?.precio))
      // }
      
    }
    return filteredItems
    }
    
    // return products.filter(product => {
    //   return (selectedCategories.length === 0 || selectedCategories.includes(product?.attributes?.subcategoria?.data?.attributes?.nombre)) &&
    //     (selectedBrands.length === 0 || selectedBrands.includes(product?.attributes?.marca?.data?.attributes?.nombre)) &&
    //     (minPrice === 0 || parseInt(product?.attributes?.precio) >= minPrice)
    // }

    // );
  };
  useEffect(() => {
    setProducts(productList)
  }, [productList])
  useEffect(() => {
    // console.log(selectedCategories);
    const filteredList = applyFilter();
    setFilteredProductList(filteredList);
    // console.log(filteredList)
    // console.log(selectedCategories.length === 0 && selectedBrands.length === 0 ? "aqui1" : "aqui2");
  }, [selectedCategories, selectedBrands, minPrice, products, lowerToHigher, higherToLower]);

  useEffect(() => {
    resetFilters();
  }, [nombre]);

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value
    setMinPrice(newMinPrice)
  }
  // console.log(subcategories)

  const maxPrice = fileredProductList?.reduce((max, product) => {
    if (product.attributes.precio > max) {
      return product.attributes.precio
    }
    return max
  }, 0)

  useEffect(() => {
    const rangeInput = document.getElementById(minPriceFilterId);
    if (rangeInput) {
      rangeInput.value = 0;
    }
  }, [minPriceFilterId]);

  return (
    <>
      <div className="flex gap-1   justify-center bg-blue-300 p-2 container"> 
        <div className="flex w-full  ">
          {/* FILTERS */}
          <div className=' mt-3  p-5 hidden md:block min-w-[400px] bg-pink-300  '> {/* GREEN */}
            
            <div className='border-2 rounded-lg p-4 bg-white '>

              <header className="border-b-2 pb-3">
                <div>
                  <div className="flex justify-between">
                    <div className="font-bold">Filtros</div>

                  </div>
                </div>
              </header>
              <div className=''>
                <div className="cont  p-2">
                  {/* Filter lists */}
                  <FilterComponent subset={subcategoriesList} filterName={"Categorías"} content={{ "name": "Categorías", "addElement": addCategory, "removeElement": removeCategory, "selectedElements": selectedCategories }} />
                  {brandList.includes("Unknown Brand") || brandList.includes(undefined)  ? "" : <FilterComponent subset={brandList} filterName={"Marcas"} content={{ "name": "Marcas", "addElement": addBrand, "removeElement": removeBrand, "selectedElements": selectedBrands }} />}
                  {/* <FilterComponent subset={brandsList} filterName={"Brands"} content={{"name":"brands","addElement":addBrand,"removeElement":removeBrand, "selectedElements":selectedBrands}}/> */}


                  <div className="price border-b-2 py-3">
                    <button className="flex justify-between w-full" onClick={() => { setOpenFilter(!openFilter) }}>

                      <div className="filter-name">Precio</div>
                      <div className="icon"> {openFilter ? "-" : "+"}</div>
                    </button>
                    <div className={`flex justify-start items-center ${openFilter ? "max-h-40 ":" max-h-0"}   transition-all duration-300 overflow-hidden `}>
                        <input
                        className='accent-red-500'
                        value={minPrice}
                          type='range'
                          id={minPriceFilterId}
                          min='0'
                          max={maxPrice}
                          ref={rangeInputRef}
                          onChange={handleChangeMinPrice}
                          step={100}
                        />
                        <span>${formatPrice(minPrice)}</span>
                      </div>

                  </div>

                </div>
              </div>
              
            </div> 
          </div>
          {/* PRODUCTS */}
          
          <section className=" pb-16    mt-3   max-w-[100%] bg-green-200 w-full">
            {/* Filtros dropdown */}
            <div className="p-4">
              <div className="flex justify-start items-center">
                
                <div className="font-bold"> {fileredProductList?.length} productos</div>
                {/* DROPDOWN */}
                <div>
                  
                </div>
              </div>
            </div>
              <div className=" ">
                <div className=" transition-all duration-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[15px] x max-w-sm mx-auto md:max-w-none px-2">

                  {fileredProductList?.map(product => (
                    <Product key={product.id} product={product} />
                  ))}
                </div>
              </div>
          </section>

        </div>
        
      </div>



    </>
  );
}
