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
