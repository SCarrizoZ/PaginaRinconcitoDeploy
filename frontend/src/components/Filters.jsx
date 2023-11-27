import { useContext, useEffect, useId, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";
import FilterList from "./FilterList";

export const Filters = ({ products }) => {

  const { setMinPrice, minPrice, subcategories, setSubcategories } = useContext(FiltersContext)
  const minPriceFilterId = useId()
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]); // this will be used to filter the products based on brands
  const [fileredProductList, setFilteredProductList] = useState([]);
  // CATEGORIES OP
  const addCategory = (category) => {
    if(!selectedCategories.includes(category)){
        setSelectedCategories(prev => ([...prev, category]))
        
    }   
    // resetRangeSlider()  
    
  }
  console.log(selectedCategories)
  const removeCategory = (category) => {
    if(selectedCategories.includes(category)){
        const removedList = selectedCategories.filter((item) => (item !== category));
        setSelectedCategories(removedList);
    }
    // resetRangeSlider()  
  }
  // BRANDS OP
  const addBrand = (brand) => {
    if(!selectedBrands.includes(brand)){
        setSelectedBrands(prev => ([...prev, brand]))
    }
    // resetRangeSlider()  
    
  }
  const removeBrand = (brand) => {
    if(selectedBrands.includes(brand)){
        const removedList = selectedBrands.filter((item) => (item !== brand));
        setSelectedBrands(removedList);
    } 
    // resetRangeSlider()  
  }
  const applyFilter = () => {
    if (selectedCategories.length === 0 && selectedBrands.length === 0 && minPrice === 0) {
        return products?.data;
    }
    // if(selectedCategories.length ===0 && selectedBrands.length ===0 && minPrice!=0){

    //   resetMinPrice()
    // }

    return products?.data.filter(item =>
        
        {
          return (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(item.brand)) &&
        (minPrice === 0 || item.price >= minPrice)}
    );
  };
  
  useEffect(() => {
    console.log(selectedCategories);
    const filteredList = applyFilter();
    setFilteredProductList(filteredList);
    // console.log(selectedCategories.length === 0 && selectedBrands.length === 0 ? "aqui1" : "aqui2");
}, [selectedCategories, products?.data, selectedBrands, minPrice]);

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
      <div className="container mx-auto px-4 w-[300px] border-2 mt-5">
        <header className="border-b-2 pb-3">
          <div>
            <div className="flex justify-between">
              <div className="font-bold">Filtros</div>
            </div>
          </div>
        </header>
        <div>
          <div className="cont">
            {/* CATEGORIES */}
            <FilterList content={{name:"Categorias",selectedElements:selectedCategories,addElement:addCategory,removeElement:removeCategory}} subset={subcategories} filterName="Categorias" />
            {/* BRANDS */}
            {/* PRICE */}
            <div className="price border-b-2 py-3">
              <p className="flex justify-between w-full">
                <div className="filter-name">Precio</div>
              </p >
              <input
                type='range'
                id={minPriceFilterId}
                min='0'
                max={maxPrice}
                onChange={handleChangeMinPrice}
              />
              <span>${minPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
