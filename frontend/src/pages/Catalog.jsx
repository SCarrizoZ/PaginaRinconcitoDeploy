import { useContext } from "react"
import { FiltersContext } from "../context/FiltersContext"
import { ProductContext } from "../context/ProductContext"
import Carousel from "react-multi-carousel"
import { CustomRightArrow } from "../components/Arrows/CustomRightArrow"
import { CustomLeftArrow } from "../components/Arrows/CustomLeftArrow"
import { Product } from "../components/Product"

export const Catalog = () => {
  const { categories, brands } = useContext(FiltersContext)
  const { products } = useContext(ProductContext)
  const productList = Array.isArray(products?.data) ? products?.data : [];
  console.log(products)
  const brandsWithLogo = brands?.data?.filter(brand => brand?.attributes?.logo?.data !== null) || []
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 4
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

          <div className=" mx-auto bg-green-200 p-2 container flex">
            <div className="bg-blue-200 w-[20%]">

              {
                categories?.data?.map((category) => {
                  return (
                    <div className="capitalize" key={category?.attributes?.nombre}>
                      {category?.attributes?.nombre}
                    </div>
                  )
                })
              }
              -
              {
                brands?.data?.map((brand) => {
                  return (
                    <div className="capitalize" key={brand?.attributes?.nombre}>
                      {brand?.attributes?.nombre}
                    </div>
                  )
                })
              }
            </div>


             <div className="bg-yellow-200 w-[80%] p-2">
    
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
                    itemClass="w-[150px]"
                    customRightArrow={<CustomRightArrow />
                    }
                    customLeftArrow={
                      <CustomLeftArrow />
                    }
                  >
                    {
                      brandsWithLogo?.map((brand, index) => (
                        <div key={index} className='flex justify-center max-w-[220px]  cursor-pointer relative shadow-[0 10px 10px rgba(255,0,0,.7)] shadow-red-500 '>
                          <img className='brand-box  object-contain' src={brand?.attributes?.logo?.data?.attributes?.url} alt={brand?.attributes?.nombre} />
                        </div>
                      ))
                    }
                  </Carousel>
                </div>
              </div>
              <div>
                {/* Categorías populares */}
                <div className='flex flex-col py-10 '>
                  <div className='text-center  '>
                    <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Categorías populares</h2>
                  </div>
                  <div>
                    <Carousel
                      responsive={responsive}
                      infinite
                      arrows={true}
                      draggable={false}
                      // autoPlay
                      itemClass="w-[150px]"
                      customRightArrow={<CustomRightArrow />
                      }
                      customLeftArrow={
                        <CustomLeftArrow />
                      }
                    >
                      {
                        categories?.data?.map((category, index) => (
                          <div key={index} className='flex justify-center max-w-[220px]  cursor-pointer relative shadow-[0 10px 10px rgba(255,0,0,.7)] shadow-red-500 '>
                            <img className='brand-box  object-contain' src={category?.attributes?.imagen?.data?.attributes?.url} alt={category?.attributes?.nombre} />
                          </div>
                        ))
                      }
                    </Carousel>
                  </div>
                </div>
                <div>
                  {/* PRODUCTOS POR CADA CATEGORÍA */}
                  
                </div>
              </div>

              {/* <div className='container mx-auto py-20'>
                <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Nuevos Productos</h2>
                <div className=''>
                  <Carousel
                    responsive={responsive}
                    infinite
                    arrows={true}
                    draggable={false}
                    autoPlay
                    customRightArrow={<CustomRightArrow />
                    }
                    customLeftArrow={
                      <CustomLeftArrow />
                    }
                  >
                    {
                      brandsWithLogo?.map((brand, index) => (
                        <div key={index} className='flex justify-center'>
                          <img className='w-[150px] h-[150px] object-contain' src={brand?.attributes?.logo?.data?.attributes?.url} alt={brand?.attributes?.nombre} />
                        </div>
                      ))
                    }
                  </Carousel>
                </div>
              </div> */}
            </div> 


            {/* <div className="w-[80%]">
              <Carousel
                responsive={responsive}
                infinite
                arrows
                draggable={false}
                autoPlay
                swipeable={false}

                customRightArrow={<CustomRightArrow />}

                customLeftArrow={
                  <CustomLeftArrow />
                }
              >
                {

                  productList?.map((product, index) => (
                    <Product key={index} product={product} gap={10} min_width={false} />
                  ))
                }
              </Carousel>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  )
}


