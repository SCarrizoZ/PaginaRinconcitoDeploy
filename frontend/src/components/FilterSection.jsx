import { useContext, useEffect, useId, useState, useRef } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { FilterComponent } from "./FilterList"
import { Product } from './Product';
import { formatPrice } from "../utils";
import { Select, MenuItem } from "@mui/material";
import Carousel from "react-multi-carousel";
import { SidebarContext } from "../context/SidebarContext";

export const Filters = ({ productList, subcategoriesList, brandList, nombre, setProductList }) => {

  const { setMinPrice,
    minPrice,
    subcategories,
    setSubcategories,
    brands,
    setBrands,
    filteredProductList,
    setFilteredProductList,
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    selectValue,
    setSelectValue,
    products,
    setProducts,

    applyFilter,
    applySort,
    rangeInputRef,
    resetFilters,
    resetRangeSlider,

    addBrand,
    removeBrand,
    addCategory,
    removeCategory,
    filterBrands,
    setFilterBrands
  } = useContext(FiltersContext)
  const { isFilterOpen, setIsFilterOpen } = useContext(SidebarContext)
  const minPriceFilterId = useId()
  const [openFilter, setOpenFilter] = useState(true); // this will be used to filter the products based on brands

  // const [filteredProductList, 
  console.log(products)

  // NO MODIFICAR
  useEffect(() => {
    setSubcategories(subcategoriesList)
    setFilterBrands(brandList)
  }, [subcategoriesList, brandList]);
  console.log(brandList)
  useEffect(() => {
    resetFilters();
  }, [nombre]);

  useEffect(() => {
    // console.log(selectedCategories);

    let filteredList = applyFilter();
    // applySort(filteredList,selectValue);
    console.log(filteredList)
    setFilteredProductList(filteredList);
    // console.log(filteredList)
    // console.log(selectedCategories.length === 0 && selectedBrands.length === 0 ? "aqui1" : "aqui2");
  }, [selectedCategories, selectedBrands, minPrice, products]);

  useEffect(() => {
    console.log(selectValue)
    let newList = [...filteredProductList]
    newList = applySort(newList)
    setFilteredProductList(newList)
  }, [selectValue]);

  useEffect(() => {
    setProducts(productList)
  }, [productList])

  useEffect(() => {
    const rangeInput = document.getElementById(minPriceFilterId);
    if (rangeInput) {
      rangeInput.value = 0;
    }
  }, [minPriceFilterId]);

  const maxPrice = filteredProductList?.reduce((max, product) => {
    if (product.attributes.precio > max) {
      return product.attributes.precio
    }
    return max
  }, 0)

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value
    setMinPrice(newMinPrice)
  }
  return (
    <>
      <div className="flex flex-col gap-1   justify-center bg-blue-300 px-2 py-10 container">

        <div className="flex w-full  ">
          {/* FILTERS */}
          <div className='   p-5 hidden md:block min-w-[350px] bg-pink-300  '> {/* GREEN */}

            <div className='border-2 rounded-lg p-3 bg-orange-200 '>

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
                  {brandList.includes("Unknown Brand") || brandList.includes(undefined) ? "" : <FilterComponent subset={brandList} filterName={"Marcas"} content={{ "name": "Marcas", "addElement": addBrand, "removeElement": removeBrand, "selectedElements": selectedBrands }} />}
                  {/* <FilterComponent subset={brandsList} filterName={"Brands"} content={{"name":"brands","addElement":addBrand,"removeElement":removeBrand, "selectedElements":selectedBrands}}/> */}


                  <div className="price border-b-2 py-3">
                    <button className="flex justify-between w-full" onClick={() => { setOpenFilter(!openFilter) }}>

                      <div className="filter-name">Precio</div>
                      <div className="icon"> {openFilter ? "-" : "+"}</div>
                    </button>
                    <span>${formatPrice(minPrice)}</span>
                    <div className={`flex justify-start items-center ${openFilter ? "max-h-40 " : " max-h-0"}   transition-all duration-300 overflow-hidden `}>
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
                      {/* <span>${formatPrice(minPrice)}</span> */}
                    </div>

                  </div>

                </div>
              </div>
              {/* Clear filters button */}
              <button
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedBrands([])
                  setSelectValue('Default')
                  setMinPrice(0)
                }}
                className='w-full flex justify-center items-center p-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg'
              >
                Limpiar filtros
              </button>

            </div>
          </div>
          {/* PRODUCTS */}

          <section className="       max-w-[100%] bg-green-200 w-full">
            {/* Filtros dropdown */}
            <div className="p-4">
              {/* CATEGORY NAME */}
              <div className="bg-orange-200 flex items-center gap-2">
                <div className="font-bold text-2xl">{nombre}</div>
                <span className="font-bold">({filteredProductList?.length} productos)</span>
              </div>
              {/* FILTERS */}
              <div className="flex justify-start items-center bg-red-200 p-4">


                {/* filtros mobile button with filter icon*/}
                <div onClick={() => { setIsFilterOpen(!isFilterOpen) }} className="flex justify-center items-center">
                  <button className="flex justify-center items-center p-2 bg-pink-400 rounded-lg gap-2 md:hidden">
                    {/* filter icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                    <div className="icon">Filtros</div>
                  </button>
                </div>

                {/* DROPDOWN */}
                <div className="ml-auto">
                  <div className="sorting__widget text-end">
                    <select className="w-50" value={selectValue} onChange={
                      (e) => {
                        if (e.target.value === 'ascending') {
                          setSelectValue('ascending')
                        }
                        else if (e.target.value === 'descending') {
                          setSelectValue('descending')
                        }
                        else if (e.target.value === 'high-price') {
                          setSelectValue('high-price')
                        }
                        else if (e.target.value === 'low-price') {
                          setSelectValue('low-price')
                        }
                        else {
                          console.log("aaaaa")
                          setSelectValue('Default')
                        }
                      }
                    }>
                      <option value={"Default"}>Predeterminado</option>
                      <option value="ascending">Alfabéticamente, A-Z</option>
                      <option value="descending">Alfabéticamente, Z-A</option>
                      <option value="high-price">Mayor a menor precio</option>
                      <option value="low-price">Menor a mayor precio</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* SELECTED FILTERS */}
              {/* if there are more than three filters put text on that say N more categories */}

              <div className="bg-slate-200 max-w-[500px]">

                <div className="flex container">

                </div>
              </div>
            </div >

            <div className={`bg-yellow-200 ${filteredProductList?.length === 0 ? "h-[500px] p-2":""}  flex justify-center items-center` }>

              {
                filteredProductList?.length ===0 ?
                  (<div className="text-center font-bold text-2xl  ">
                    No hay productos disponibles con los filtros proporcionados.
                  </div>)
                  :
                  (
                    <div className={`p-2   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[15px]  max-w-sm  sm:max-w-none px-2 mx-auto`}>

                      {filteredProductList?.map(product => (
                        <Product key={product.id} product={product} />
                      ))}
                    </div>
                  )
              }

            </div>
          </section>

        </div>

      </div>



    </>
  );
}
