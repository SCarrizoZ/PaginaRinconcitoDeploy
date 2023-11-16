import { useContext, useEffect, useId, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";

export const Filters = ({ category, filteredProducts }) => {

  const { setMinPrice, minPrice, subcategories, setSubcategories } = useContext(FiltersContext)
  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value
    setMinPrice(newMinPrice)
  }

  const maxPrice = filteredProducts?.reduce((max, product) => {
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
            <div className="categories border-b-2 py-3 ">
              <button className="flex justify-between w-full">
                <div className="filter-name">Categorías</div>
              </button>
              <div className="list">
                <div className="list-cont hidden transition-all duration-300">
                  <ul>
                    <li className="category">
                      <a href="" className="w-full flex justify-between">
                        <span className="before:content-['+']">Guitarras</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li className="category">
                      <a href="" className="w-full flex justify-between">
                        <span className="before:content-['+']">Guitarras</span>
                        <span>100</span>
                      </a>
                    </li>
                    <li className="category">
                      <a href="" className="w-full flex justify-between">
                        <span className="before:content-['+']">Guitarras</span>
                        <span>100</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="brands border-b-2 py-3">
              <button className="flex justify-between w-full">
                <div className="filter-name">Brands</div>
                <div className="icon"> + </div>
              </button>
              <div className="list hidden">
                <div>
                  <ul>
                    <li>
                      <label htmlFor="" className="flex gap-2">
                        <input type="checkbox" />
                        <span>Marca1</span>
                        <span className="ml-auto">Quantity 200</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="price border-b-2 py-3">
              <button className="flex justify-between w-full">
                <div className="filter-name">Precio</div>
              </button>
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
