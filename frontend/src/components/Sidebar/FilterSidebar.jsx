import React, { useEffect } from 'react'
import { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { RiCloseFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import { RiPriceTag3Line } from "react-icons/ri";
import { RiArrowRightSLine,RiArrowLeftSLine  } from "react-icons/ri";

import { SidebarContext } from '../../context/SidebarContext';
import { FiltersContext } from "../../context/FiltersContext";
import { CartContext } from '../../context/CartContext';

import { formatPrice } from '../../utils'

import {FilterComponent} from '../FilterList';



import { CartItem } from '../CartItem';
export const FilterSidebar = () => {
  const {
    isFilterOpen,
    setIsFilterOpen,
    handleFilterClose,
    isOpen,
    setIsOpen,
  } = useContext(SidebarContext);
  const {
    products, 
    subcategories,
    addCategory,
    removeCategory,
    addBrand,
    removeBrand,
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    selectValue,
    setSelectValue,
    brands,
    setBrands,
    filterBrands,
    setFilterBrands,
    setMinPrice
    
    } = useContext(FiltersContext);
  // console.log(filterBrands)

  useEffect(() => {
    if (isOpen) {
      setIsFilterOpen(false);
    }
  },[isOpen])
  return (
    <>

      <div
        className={`${isFilterOpen ? 'left-0' : '-left-full'
          } w-[60%] bg-red-100 fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-[1002] px-4 lg:px-[35px]`}
      >
        {/* HEAD */}
        <div className='flex items-center justify-between py-6 border-b '>

          <div className='uppercase text-sm font-semibold'>
            Filtros
          </div>
          {/**Icono */}
          
        </div>
        {/* BODY */}
        <div className='flex flex-col h-[540px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b '>
          {/* {cart.map((item) => {
            return <CartItem key={item.id} item={item}></CartItem>;
          })} */}
          {/* <DropdownMenu /> */}
          <FilterComponent subset={subcategories} filterName={"Categorías"} content={{ "name": "Categorías", "addElement": addCategory, "removeElement": removeCategory, "selectedElements": selectedCategories }}/>
          {
            filterBrands === undefined ? 
            ("") 
            : 
            (filterBrands?.includes("Unknown Brand") ? ("") : (<FilterComponent subset={filterBrands} filterName={"Marcas"} content={{ "name": "Marcas", "addElement": addBrand, "removeElement": removeBrand, "selectedElements": selectedBrands }} />))
          }
        
        </div>

        {/* FOOT */}
        <div>
          {/* Clean filters button */}
          <button
            onClick={() => {
              setSelectedCategories([])
              setSelectedBrands([])
              setSelectValue('Default')
              setMinPrice(0)
            }}
            className='w-full flex justify-center items-center p-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg'
          >
            Limpiar filtros
          </button>

        </div>

        {/* ARROW icon close */}
        <div className='bg-red-200'>
          {/* ARROW ICON */}
          <div
            onClick={handleFilterClose}
            className='cursor-pointer w-8 h-8 flex justify-center items-center absolute top-[50%] -right-2 translate-y-[-50%]  bg-white rounded-lg shadow-xl py-10 '
          >
            {
              isFilterOpen ? <RiArrowLeftSLine className='text-[1.5rem] text-red-500' /> : <RiArrowRightSLine className='text-2xl' />
            }
            
          </div>

        </div>
      </div>




    </>
  )
}
