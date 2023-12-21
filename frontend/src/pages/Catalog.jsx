import { useContext, useState } from "react"
import { FiltersContext } from "../context/FiltersContext"
import { ProductContext } from "../context/ProductContext"
import Carousel from "react-multi-carousel"
import { CustomRightArrow } from "../components/Arrows/CustomRightArrow"
import { CustomLeftArrow } from "../components/Arrows/CustomLeftArrow"
import { Product } from "../components/Product"
import { GridView } from "../components/GridView"
import { Skeleton } from "@mui/material"
import { CatalogList } from "../components/CatalogList"
import { CatalogSidebar } from "../components/Sidebar/CatalogSidebar"
// images
import guitarrasCategoria from '../img/categorias_header_images/guitarras_categoria.webp'
import tecladosPianosCategoria from '../img/categorias_header_images/teclados_pianos_categoria.webp'
import percusionCategoria from '../img/categorias_header_images/percusion_categoria.webp'
import { SidebarContext } from "../context/SidebarContext"
import { ProductList } from "../components/ProductList"
import { Link } from "react-router-dom"
export const Catalog = () => {
  const { categories = [], brands = [] } = useContext(FiltersContext)
  const { setIsCatalogOpen } = useContext(SidebarContext)
  const { products } = useContext(ProductContext)
  const productList = Array.isArray(products?.data) ? products?.data : [];




  const brandsWithLogo = brands?.data?.filter(brand => brand?.attributes?.logo?.data !== null) || []
  const categoriesArray = categories?.data?.filter(category => category?.attributes?.imagen?.data !== null) || []
  const brandsArray = brands?.data?.filter(brand => brand?.attributes?.logo?.data !== null) || []
  // Array of array of products by category
  const productsByCategory =
    categoriesArray?.map(category => {
      let products = productList?.filter(product =>
        product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre === category?.attributes?.nombre)
      products = products?.slice(0, 4)
      console.log(products)
      return products
    }
    ) || []

  console.log(productsByCategory)
  const [openFilter, setOpenFilter] = useState(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 641 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 401 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    smobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  console.log(categoriesArray)
  return (
    <section className="">
      <div className="flex justify-center">
        <div className="container">
          <div className=" mx-auto  p-2 container flex flex-col ">

            <div className=" flex">

              <div className="flex justify-center items-center  md:hidden w-full m-1">
                <button onClick={setIsCatalogOpen} className="transition-all duration-300 bg-white items-center hover:bg-gray-200 py-2 px-8 text-black font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0 p-2   gap-1" type="button" aria-label="menu">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" clipRule="evenodd" />
                  </svg>

                  <span className="text-black">Menu de catálogo</span>

                </button>
              </div>

            </div>
            <div className=" p-2">
              <h1 className="titulo text-red-500 text-5xl">
                Catálogo
              </h1>
            </div>


            <div className="flex  container p-1">


              <CatalogList categoriesArray={categoriesArray} brands={brands?.data} sidebarMode={false} />

              <div className=" md:w-[79%] container mx-auto   p-2">

                <div className='flex flex-col py-10 '>
                  <div className='text-center  '>
                    <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Las mejores marcas</h2>
                  </div>
                  <div>
                    <Carousel
                      responsive={responsive}
                      infinite
                      arrows={true}
                      draggable={false}
                      itemClass="px-2"
                      customRightArrow={<CustomRightArrow />
                      }
                      customLeftArrow={
                        <CustomLeftArrow />
                      }
                    >
                      {
                        brandsWithLogo?.map((brand, index) => (
                          <div key={index} className='flex justify-center max-w-sm  cursor-pointer  shadow-[0 10px 10px rgba(255,0,0,.7)] shadow-red-500 '>
                            <Link to={
                              {
                                pathname: "../catalogo/" + brand?.attributes?.nombre,
                                state: {
                                  brand: brand?.attributes?.nombre
                                }
                              }
                            }
                            >

                              <img className='brand-box rounded-lg  ' src={brand?.attributes?.logo?.data?.attributes?.url} alt={brand?.attributes?.nombre} />

                            </Link>

                          </div>
                        ))
                      }
                    </Carousel>
                  </div>
                </div>
                <div className=" flex justify-center flex-col p-2">
                  <div className='text-center  '>
                    <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Categorías populares</h2>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-2 lg:grid-cols-3  w-full h-[500px]  gap-4  p-1">


                    <div className="flex justify-center relative items-center  md:row-span-3 row-span-2 hover:scale-[105%] transition-transform duration-300 cursor-pointer ">

                      <div className=" w-full h-full">
                        <Link to={
                          {
                            pathname: "../categoria/Guitarras",
                            state: {
                              category: "guitarras"
                            }
                          }
                        }>

                          <img src={guitarrasCategoria} alt="guitarras" className="h-full w-full aspect-[9/16] object-cover  rounded-lg " />

                          <div className="absolute  bg-pink-300 p-2  bottom-0 w-full justify-center flex rounded-br-lg rounded-bl-lg ">

                            <span className="text-red-500 titulo text-3xl ">Guitarras</span>
                          </div>
                        </Link>
                      </div>


                    </div>


                    <div className="flex justify-center cursor-pointer  relative items-center md:row-start-2 md:col-start-2 md:col-span-2 md:row-span-2 row-start-1 col-start-2 row-span-2 hover:scale-[105%] transition-transform duration-300">
                      <div className="w-full h-full">
                        <Link to={
                          {
                            pathname: "../categoria/Teclados y Pianos",
                            state: {
                              category: "teclados y pianos"
                            }
                          }
                        }>

                          <img src={tecladosPianosCategoria} alt="teclados y pianos" className="w-full h-full md:aspect-video aspect-[9/16] object-cover rounded-lg" />
                          <div className="absolute  bg-pink-300 p-2  bottom-0 w-full justify-center flex rounded-br-lg rounded-bl-lg ">

                            <span className="text-red-500 titulo text-3xl ">Pianos y teclados</span>
                          </div>
                        </Link>
                      </div>
                    </div>



                    <div className="flex cursor-pointer justify-center relative items-center col-span-2 hover:scale-[105%] transition-transform duration-300" >
                      <div className="w-full h-full">
                        <Link to={  
                          {
                            pathname: "../categoria/Percusión",
                            state: {
                              category: "percusión"
                            }
                          }
                        }>
                        <img src={percusionCategoria} alt="percusion" className="w-full h-full aspect-square object-cover rounded-lg" />
                        <div className="absolute  bg-pink-300 p-2  bottom-0 w-full justify-center flex rounded-br-lg rounded-bl-lg ">

                          <span className="text-red-500 titulo text-3xl ">Percusión</span>
                        </div>
                        </Link>
                      </div>

                    </div>

                  </div>


                </div>
                <div>
                  <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Nuestros Productos</h2>
                  {/* skeleton gridView */}
                  {/* show Product by h2 category */}
                  {
                    categoriesArray?.map((category, index) =>


                    (
                      <div key={index} className="flex justify-center flex-col p-2 gap-4 ">
                        <h2  className='mb-6 text-3xl border-l-4 border-red-500 px-2  ' >{category?.attributes?.nombre}</h2>
                        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                          {


                            // let products = [];
                            // return products;
                            productList?.length === 0 || productList === undefined ?

                              (

                                (Array(8).fill(0).map((item, index) =>
                                (
                                  <Skeleton key={index} variant="rectangular" width={210} height={118} />
                                )))
                              )
                              :

                              (
                                // console.log("hay productos")

                                productList?.map((product,index) => (
                                  product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre === category?.attributes?.nombre ?
                                    (
                                      <Product key={index} product={product} />
                                    ) : (
                                      <></>
                                    )
                                )

                                )

                              )


                          }
                        </div>
                      </div>
                    )

                    )

                  }
                  {/* 
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      productList?.length === 0 || productList === undefined ? Array(8).fill(0).map((item, index) => (
                        <Skeleton key={index} variant="rectangular" width={210} height={118} />
                      )) : productList?.map((product) => (
                        <Product key={product?.id} product={product} />
                      ))
                    }
                  </div> */}
                  {/* <GridView products={productList} /> */}

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}


