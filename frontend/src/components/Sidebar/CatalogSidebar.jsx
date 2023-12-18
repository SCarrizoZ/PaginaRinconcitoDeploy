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
        } w-full sm:w-[40vw] bg-white overflow-y-auto fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-[1002] px-4 lg:px-[35px] flex flex-col `}
    >
      {/* HEAD */}
      <header className='flex items-center justify-between py-6 border-b'>

        <div className='uppercase text-sm font-semibold'>
          Catálogo
        </div>
        {/**Icono */}
        <div
          onClick={handleCatalogClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          < RiArrowLeftLine className='text-2xl' />

        </div>
      </header>
      {/* BODY */}
      <div className='flex flex-col  border-b items-center  p-1'>

        <div className="p-2 w-full">
          <CatalogList categoriesArray={categories?.data} brands={brands?.data} sidebarMode={true} />
        </div>

      </div>

      {/* FOOT */}

      {/* REDES */}

    </div>
  )
}
