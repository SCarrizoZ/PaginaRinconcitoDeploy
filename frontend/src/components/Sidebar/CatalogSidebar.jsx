import { useContext } from "react"
import { Link } from "react-router-dom"
import { SidebarContext } from "../../context/SidebarContext"
import { FiltersContext } from "../../context/FiltersContext"
import { RiArrowLeftLine } from "react-icons/ri"
import { CatalogList } from "../CatalogList"

export const CatalogSidebar = () => {
  const {
    isCatalogOpen,
    setIsCatalogOpen,
    handleCatalogClose
  } = useContext(SidebarContext)
  const { categories = [], brands = [] } = useContext(FiltersContext)
  return (
    <div
      className={`${isCatalogOpen ? 'left-0' : '-left-full '
        } w-full sm:w-[40vw] bg-purple-300 overflow-y-auto fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-[1002] px-4 lg:px-[35px] flex flex-col `}
    >
      {/* HEAD */}
      <header className='flex items-center justify-between py-6 border-b bg-red-300'>

        <div className='uppercase text-sm font-semibold'>
          {/* tag icon */}
          {/* <RiPriceTag3Line className='inline-block mr-2' /> */}
          Catálogo
        </div>
        {/**Icono */}
        <div
          onClick={handleCatalogClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          {/* Arrow icon pls. Opposite direction pls */}
          < RiArrowLeftLine className='text-2xl' />

          {/* <RiCloseFill className='text-2xl' /> */}
        </div>
      </header>
      {/* BODY */}
      <div className='flex flex-col  border-b items-center   bg-green-100  p-1'>

        <div className="p-2 bg-white w-full">
          <CatalogList categoriesArray={categories?.data} brands={brands?.data} sidebarMode={true} />
        </div>
        {/* {
          categories?.data?.map((category) => {
            return (
              <Link key={category.id} to={`/categoría/${category?.attributes?.nombre}`} className='hover:bg-gray-200 w-full flex items-center justify-between py-4 border-b' onClick={handleCatalogClose}>
                <div className='w-8 h-8  justify-center items-center order-1 hidden sm:block'>
 
                </div>
                <div className='ml-2 text-sm font-semibold'>
                  {category?.attributes?.nombre}
                </div>
              </Link>
            )
          })
        } */}

      </div>

      {/* FOOT */}

      {/* REDES */}

    </div>
  )
}
