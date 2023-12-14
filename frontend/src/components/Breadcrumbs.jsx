import { useContext, useState} from 'react'
import { Link, useLocation} from 'react-router-dom'
import { findProduct } from '../utils'
import { ProductContext } from '../context/ProductContext'
export const Breadcrumbs = () => {
  const [pageLocation, setPageLocation] = useState([])
  const { products } = useContext(ProductContext)
  const isLast = (index,crumbsList) => {
    return index === crumbs.length - 1
  }
  console.log(products)
  const location = useLocation()
  console.log(location)
  let currentLink = ""
   // if(currentLink === "/product"){
  //   console.log(findProduct(products, 1))
  //   // add before the currentLink the following format category/CATEGORY_NAME/SUBCATEGORY_NAME/PRODUCT_NAME
  //   const product = findProduct(products, 1)

  //   currentLink = `/Categorías/${product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre}/${product?.attributes?.subcategoria?.data?.attributes?.nombre}`
    

  // }
  let crumbs = location.pathname.split('/').filter((crumb) => crumb !== "")
  const product = findProduct(products,parseInt(crumbs[1]) )
  console.log(product)
  if(crumbs.includes("product")){
    

    crumbs.splice(0,1)
    crumbs = [
      {"nombre":"categoría", group:"Categoría"},
      {"nombre":`${product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre}` , group:"Categoría"},
      {"nombre":`${product?.attributes?.subcategoria?.data?.attributes?.nombre}`, group:"Categoría"},
      ...crumbs]
  }
  console.log(crumbs)
 
  const fcrumbs= crumbs.filter((crumb) => crumb !== "")
  .map((crumb) => {
    currentLink += `/${crumb}`
    // if crumb is an object apply 
    if(typeof crumb === "object"){
      currentLink = `/${crumb.group}/${product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre}`
      console.log(isLast(crumbs.indexOf(crumb)))
      return (
        <div className='crumb capitalize ' key={crumb.nombre}>
          {/* if last desactive link */}
          {
            
            isLast(crumbs.indexOf(crumb)) ? <Link className='pointer-events-none'   >{crumb.nombre}asadsa</Link> : <Link   to={currentLink}>{crumb.nombre}</Link>
          }
          
          
          
        </div>
      )
    }
    console.log(currentLink)
    return (
      <div className='crumb' key={crumb}>
        <Link className='capitalize'   to={currentLink}>{decodeURIComponent(crumb)}</Link>
      </div>
    )

    
  }
  )
  // console.log(crumbs)
  // console.log(location)
  
  return (
    <section className={ `container mx-auto hidden sm:block ${location.pathname === "/" ? "hidden": ""}`}>
      <div className={`bg-blue-200 mx-[0.5rem] ${location.pathname === "/" ? "hidden": ""}`}>

        <div className='flex gap-1 breadcrumbs'>
          {
            location.pathname === "/"  ? null :
            <div className='crumb' key={"home"}>
              <Link to="/">Inicio</Link>
            </div>
          }
          {/* <div className='crumb' key={"home"}>
            <Link to="/">Home</Link>
          </div> */}
          {fcrumbs}
        </div>
      </div>

    </section>
  )
}
