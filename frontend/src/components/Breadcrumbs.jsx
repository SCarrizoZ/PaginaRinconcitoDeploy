import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { findProduct } from '../utils'
import { ProductContext } from '../context/ProductContext'
import { getSingular, deleteSpecialCharacters } from '../utils'
export const Breadcrumbs = () => {
  const [pageLocation, setPageLocation] = useState([])
  const { products } = useContext(ProductContext)
  const isLast = (index, crumbsList) => {
    return index === crumbs.length - 1
  }

  const location = useLocation()
  let currentLink = ""
  let crumbs = location.pathname.split('/').filter((crumb) => crumb !== "")
  crumbs = crumbs?.map((crumb) => {

    return decodeURIComponent(crumb)

  })
  const product = findProduct(products, parseInt(crumbs[1]))
  // product category
  if (product !== undefined) {
    const category = (product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre)
    // product subcategory
    const subcategory = (product?.attributes?.subcategoria?.data?.attributes?.nombre)
    crumbs = [
      "categoria",
      category,
      subcategory,
      ...crumbs
    ]

    crumbs = crumbs.slice(0, 3)
    crumbs?.push(getSingular(category))
  }

  let fcrumbs = crumbs?.filter((crumb) => crumb !== "")
  if (crumbs?.includes("producto")) {
    fcrumbs = crumbs?.filter((crumb) => crumb !== "")
      ?.map((crumb, index) => {
        currentLink += `/${crumb}`
        crumb = decodeURIComponent(crumb)
        return (
          <div className='crumb' key={index}>
            <Link className='' to={currentLink}>
              <span className='text-[0.875rem]'>
                {crumb}
              </span>
            </Link>
          </div>
        )
      }
      )
  } else {
    fcrumbs = crumbs?.filter((crumb) => crumb !== "")
      ?.map((crumb, index) => {
        currentLink += `/${crumb}`
        return (
          <div className='crumb' key={index}>
            <Link className='capitalize' to={currentLink}>{decodeURIComponent(crumb)}</Link>
          </div>
        )
      }
      )
  }
  // get second to last element
  const getSecondToLast = (array) => {
    return array[array.length - 2]
  }
  // get third to last element
  const getThirdToLast = (array) => {
    return array[array.length - 3]
  }
  // get last element
  const getLast = (array) => {
    return array[array.length - 1]
  }

  return (
    <section className={`container mx-auto  ${location.pathname === "/" ? "hidden" : ""} mb-2`}>
      <div className={` mx-[0.5rem] ${location.pathname === "/" ? "hidden" : ""} hidden sm:block`}>
        <div className='flex gap-1 breadcrumbs text-[0.875rem] text-red-600 '>
          {
            location.pathname === "/" ? null :
              <div className='crumb' key={"home"}>
                <Link to="/">
                  Inicio
                </Link>
              </div>
          }
          {
            fcrumbs
          }
        </div>
      </div>
      <div className={` sm:hidden  mx-[0.5rem] flex items-center text-red-600 `}>
        {/* arrow icon */}
        <span className='hover:opacity-[0.5] flex items-center'>
          <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>

          {
            getSecondToLast(fcrumbs) || (<div className='crumb hover:opacity-[0.5] transition-all duration-300' key={"home"}>
              <Link to="/">
                Inicio
              </Link>
            </div>)

          }
        </span>
      </div>

    </section>
  )
}