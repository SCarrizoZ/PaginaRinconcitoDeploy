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
  // console.log(location)
  let currentLink = ""
  let crumbs = location.pathname.split('/').filter((crumb) => crumb !== "")
  crumbs = crumbs.map((crumb) => {

    return decodeURIComponent(crumb)

  })
  // dont work with Vinilos y CD's
  // if there are two words. that is, if there is min a space then slice and delete characters like ones: s, es, os, as, is, ', ""
  // special characters like ', ""
  // const deleteSpecialCharacters = (word) => {
  //   if (word.includes("'")) {
  //     word = word.replace("'", "")
  //   }
  //   if (word.includes('"')) {
  //     word = word.replace('"', "")
  //   }
  //   return word
  // }

  // const getSingular = (word) => {
  //   // if there is a space
  //   if (word.includes(" ")) {
  //     const wordArray = word.split(" ")
  //     // iterate over the array to delete the mentioned characters
  //     wordArray.forEach((word, index) => {

  //       if (word[word.length - 1] === "s") {
  //         // wordArray[index] = word.slice(0, word.length - 1)
  //         // delete that character
  //         wordArray[index] = deleteSpecialCharacters(word.slice(0, word.length - 1))

  //       }
  //       console.log(wordArray)
  //       // if contain es at the end delete
  //       if (word[word.length - 2] === "e" && word[word.length - 1] === "s") {
  //         // wordArray[index] = word.slice(0, word.length - 2)
  //         wordArray[index] = deleteSpecialCharacters(word.slice(0, word.length - 2))
  //         console.log(wordArray)
  //       }

  //       console.log(word)
  //     })
  //     // join the array
  //     return wordArray.join(" ")
  //     console.log(wordArray.join(" "))
  //   }
  // }


  // const getSingular = (word) => {
  //   if (word[word.length - 1] === "s") {
  //     return word.slice(0, word.length - 1)
  //   }
  //   return word
  // }
  // console.log(getSingular("Guitarras"))
  const product = findProduct(products, parseInt(crumbs[1]))
  // product category
  if (product !== undefined) {
    const category = (product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre)
    // product subcategory
    const subcategory = (product?.attributes?.subcategoria?.data?.attributes?.nombre)
    // console.log(category, subcategory)
    crumbs = [
      "categoría",
      category,
      subcategory,
      ...crumbs
    ]
    console.log(crumbs.slice(0, 3))
    console.log(getSingular(category))
    crumbs = crumbs.slice(0, 3)
    crumbs.push(getSingular(category))
  }

  // console.log(category, subcategory)
  // add category and subcategory to crumbs before product

  // if(crumbs.includes("product")){


  //   crumbs.splice(0,1)
  //   crumbs = [
  //     {"nombre":"categoría"},
  //     {"nombre":`${product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre}` , group:"categoría"},
  //     {"nombre":`${product?.attributes?.subcategoria?.data?.attributes?.nombre}`, group:"categoría"},
  //     ...crumbs]
  // }
  let fcrumbs = crumbs.filter((crumb) => crumb !== "")
  if (crumbs.includes("product")) {
    fcrumbs = crumbs.filter((crumb) => crumb !== "")
      .map((crumb, index) => {
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

    fcrumbs = crumbs.filter((crumb) => crumb !== "")
      .map((crumb) => {
        currentLink += `/${crumb}`
        return (
          <div className='crumb' key={crumb}>
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

  // console.log(getSecondToLast(fcrumbs))

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
      <div className={` sm:hidden  mx-[0.5rem] flex items-center`}>
        {/* arrow icon */}
        <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        {
          getSecondToLast(fcrumbs) || (<div className='crumb' key={"home"}>
          <Link to="/">
            Inicio
          </Link>
        </div>)
          
        }
      </div>

    </section>
  )
}
