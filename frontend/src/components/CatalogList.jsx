import  { useState, useContext } from 'react'
import { Skeleton } from "@mui/material"
import { Link } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
export const CatalogList = ({categoriesArray=[],brands , sidebarMode}) => {
  const [openFilter, setOpenFilter] = useState(true); // this will be used to filter the products based on brands
  const [openBrandList, setOpenBrandList] = useState(true); // this will be used to filter the products based on brands
  const {setIsCatalogOpen} = useContext(SidebarContext)
  // console.log(categoriesArray, brands)
  // console.log(sidebarMode)
  // const [categoriesArray, setCategoriesArray] = useState([]);

  return (
    <>
      <div className={`md:flex md:flex-col ${sidebarMode ? "w-full":"hidden w-[19%]"} p-2   gap-3 `}>
        <div>

          <div className="bg-red-300 flex items-center justify-between p-2 w-full">

            <h3 className="text-white font-bold">Categorías</h3>
            {/* arrow icon that rotate 180 when openFilter change */}
            <div className="flex justify-center items-center cursor-pointer" onClick={() => { setOpenFilter(!openFilter) }}>
              <svg className={`w-4 h-4 transform ${openFilter ? "rotate-180" : "rotate-0"}  transition-all duration-500`} viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 101.414-1.414l-7-7A1 1 0 0010 3z" clipRule="evenodd" className='' />
              </svg>
            </div>
          </div>
          <div className={`list-cont  ${openFilter ? "max-h-[500px] " : " max-h-0"}   transition-all duration-500 overflow-auto  `}>
            <ul className="bg-red-50 flex flex-col gap-1">
              {/* skeleton */}
              {
                categoriesArray?.length === 0 || categoriesArray === undefined ? Array(8).fill(0).map((item, index) => (
                  <div key={index} className="px-[0.25rem] py-[0.5rem]">

                    <Skeleton  variant="rectangular" width={210} height={24} />
                  </div>
                )) : categoriesArray?.map((category) => (
                  <div className="capitalize px-[0.25rem] py-[0.5rem] hover:text-red-500 cursor-pointer" key={category?.attributes?.nombre}>
                    {/* can i delete catalog from url? */}
                    <Link onClick={()=>{setIsCatalogOpen(false)}} to={`../categoría/${category?.attributes?.nombre}`} >
                      {category?.attributes?.nombre}
                    </Link>
                    {/* <Link to={`categoría/${category?.attributes?.nombre}`} >
                      {category?.attributes?.nombre}
                    </Link> */}
                  </div>
                ))
              }
              {/* {
                      categories?.data?.map((category) => {
                        return (
                          <div className="capitalize px-[0.25rem] py-[0.5rem]" key={category?.attributes?.nombre}>
                            {category?.attributes?.nombre}
                          </div>
                        )
                      })
                    } */}
            </ul>
          </div>
        </div>
        <div>

          <div className="bg-red-300 flex items-center justify-between p-2">

            <h3 className="text-white font-bold">Marcas</h3>
            {/* arrow icon that rotate 180 when openFilter change */}
            <div className="flex justify-center items-center cursor-pointer" onClick={() => { setOpenBrandList(!openBrandList) }}>
              <svg className={`w-4 h-4 transform ${openBrandList ? "rotate-180" : "rotate-0"}  transition-all duration-500`} viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 101.414-1.414l-7-7A1 1 0 0010 3z" clipRule="evenodd" className='' />
              </svg>
            </div>
          </div>
          <div className={`list-cont  ${openBrandList ? "max-h-[500px] " : " max-h-0"}   transition-all duration-500 overflow-auto  `}>

            <ul className="bg-red-50">
              {/* skeleton */}
              {
                brands?.length === 0 || brands === undefined ? Array(9).fill(0).map((item, index) => (
                  <div  key={index} className="px-[0.25rem] py-[0.5rem]">

                    <Skeleton variant="rectangular" width={210} height={24} />
                  </div>
                )) : brands?.map((brand) => (
                  <div className="capitalize px-[0.25rem] py-[0.5rem] " key={brand?.attributes?.nombre}>
                    {brand?.attributes?.nombre}
                  </div>
                ))
              }
              {/* {
                      brands?.data?.map((brand) => {
                        return (
                          <div className="capitalize px-[0.25rem] py-[0.5rem]" key={brand?.attributes?.nombre}>
                            {brand?.attributes?.nombre}
                          </div>
                        )
                      })
                    } */}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
