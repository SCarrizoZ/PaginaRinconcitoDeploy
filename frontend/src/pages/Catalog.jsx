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
export const Catalog = () => {
  const { categories = [], brands=[] } = useContext(FiltersContext)
  const { setIsCatalogOpen } = useContext(SidebarContext)
  const { products } = useContext(ProductContext)
  const productList = Array.isArray(products?.data) ? products?.data : [];
  console.log(products)
  const brandsWithLogo = brands?.data?.filter(brand => brand?.attributes?.logo?.data !== null) || []
  const categoriesArray = categories?.data?.filter(category => category?.attributes?.imagen?.data !== null) || []
  const brandsArray = brands?.data?.filter(brand => brand?.attributes?.logo?.data !== null) || []

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
  console.log(brands)
  return (
    <section className="bg-red-200">
      <div className="flex justify-center">
        <div className="container">
          <div className=" mx-auto bg-green-200 p-2 container flex flex-col ">

            <div className="bg-pink-300 flex">

              <div className="flex justify-center items-center bg-yellow-200 md:hidden w-full m-1">
                <button onClick={setIsCatalogOpen} className="transition-all duration-300 bg-white items-center hover:bg-gray-200 py-2 px-8 text-black font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0 p-2   gap-1" type="button" aria-label="menu">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" clipRule="evenodd" />
                  </svg>

                  <span className="text-black">Menu de catálogo</span>

                </button>
              </div>

            </div>
            <div className="bg-blue-300 p-2">
              <h1 className="titulo text-red-500 text-5xl">
                Catálogo
              </h1>
            </div>


            <div className="flex bg-purple-300 container p-1">

            
              <CatalogList categoriesArray={categoriesArray} brands={brandsArray} sidebarMode={false}/>

              <div className="bg-yellow-200 md:w-[79%] container mx-auto   p-2">

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
                      // autoPlay
                      // itemClass="w-[150px]"
                      customRightArrow={<CustomRightArrow />
                      }
                      customLeftArrow={
                        <CustomLeftArrow />
                      }
                    >
                      {
                        brandsWithLogo?.map((brand, index) => (
                          <div key={index} className='flex justify-center max-w-sm  cursor-pointer  shadow-[0 10px 10px rgba(255,0,0,.7)] shadow-red-500 '>
                            <img className='brand-box  ' src={brand?.attributes?.logo?.data?.attributes?.url} alt={brand?.attributes?.nombre} />
                          </div>
                        ))
                      }
                    </Carousel>
                  </div>
                </div>
                <div className="bg-orange-300 flex justify-center flex-col p-2">
                  <div className='text-center  '>
                    <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Categorías populares</h2>
                  </div>
                  {/* grid category images : guitarras categoria image must be take 3 rows and one column, vinilos categoria 2 rows and 2 columns and the rest percusion ctegoria*/}
                  <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-2 lg:grid-cols-3  w-full h-[500px] bg-pink-300 gap-4">
                    <div className="flex justify-center relative items-center bg-blue-200 md:row-span-3 row-span-2 hover:scale-[105%] transition-transform duration-300 ">
                      <img src={guitarrasCategoria} alt="guitarras" className="h-full w-full aspect-[9/16] object-cover " />
                      <div className="absolute  bg-pink-300 p-2  bottom-0 w-full justify-center flex ">

                        <span className="text-red-500 titulo text-3xl ">Guitarras</span>
                      </div>
                    </div>
                    <div className="flex justify-center  relative items-center bg-blue-200 md:row-start-2 md:col-start-2 md:col-span-2 md:row-span-2 row-start-1 col-start-2 row-span-2 hover:scale-[105%] transition-transform duration-300">
                      <img src={tecladosPianosCategoria} alt="teclados y pianos" className="w-full h-full md:aspect-video aspect-[9/16] object-cover" />
                      <div className="absolute  bg-pink-300 p-2  bottom-0 w-full justify-center flex ">

                        <span className="text-red-500 titulo text-3xl ">Pianos y teclados</span>
                      </div>
                    </div>
                    <div className="flex justify-center relative items-center bg-blue-200 col-span-2 hover:scale-[105%] transition-transform duration-300" >
                      <img src={percusionCategoria} alt="percusion" className="w-full h-full aspect-square object-cover" />
                      <div className="absolute  bg-pink-300 p-2  bottom-0 w-full justify-center flex ">

                        <span className="text-red-500 titulo text-3xl ">Percusión</span>
                      </div>
                    </div>
                  </div>


                </div>
                <div>
                  <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Productos Populares</h2>
                  {/* skeleton gridView */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                      productList?.length === 0 || productList === undefined ? Array(8).fill(0).map((item, index) => (
                        <Skeleton key={index} variant="rectangular" width={210} height={118} />
                      )) : productList?.map((product) => (
                        <Product key={product?.id} product={product} />
                      ))
                    }
                  </div>
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


