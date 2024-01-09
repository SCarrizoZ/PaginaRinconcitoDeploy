import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { WishlistContext, useWishlist } from '../context/WislistContext';
import { Product } from '../components/Product';
import { Hero } from '../components/Hero';
import marcas from '../img/marcas.png';
import Carousel from 'react-multi-carousel';
import { FiltersContext } from '../context/FiltersContext'
import fcar from '../img/fcar.webp';
import scar from '../img/scar.webp';
import tcar from '../img/tcar.webp';
import { CustomRightArrow } from '../components/Arrows/CustomRightArrow';
import { CustomLeftArrow } from '../components/Arrows/CustomLeftArrow';
import { Breadcrumbs } from '../components/Breadcrumbs';
// import { RightCustomButton } from '../components/Buttons/RightCustomButton';
// import { Button } from '@mui/material';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Skeleton } from '@mui/material';
// import { LeftCustomButton } from '../components/Buttons/LeftCustomButton';
export function Home() {
  // Obtén los productos del contexto
  const { brands } = useContext(FiltersContext)
  const { wishlist } = useWishlist()
  console.log("Wishlist: ", wishlist)
  const brandsWithLogo = brands?.data?.filter(brand => brand?.attributes?.logo?.data !== null)

  // console.log(brandsWithLogo)
  const { products } = useContext(ProductContext);
  const carImages = [
    fcar,
    tcar,
  ]
  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const brandsLogoArray = Array.isArray(brandsWithLogo) ? brandsWithLogo : [];
  const productsArray = Array.isArray(products?.data) ? products?.data : [];
  // console.log(brandsWithLogo)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
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
  const getFeaturedProducts = () => {
    // get products ordered by "veces_comprado" and "descuento"
    let productosOrdenados = [...productsArray]
    productosOrdenados = productsArray.sort((a, b) => {
      const aVendidos = parseInt(a?.attributes?.veces_vendido)
      const bVendidos = parseInt(b?.attributes?.veces_vendido)
      const aDescuento = parseInt(a?.attributes?.descuento)
      const bDescuento = parseInt(b?.attributes?.descuento)
      // console.log(aVendidos, bVendidos)
      // console.log(aDescuento, bDescuento)
      if (aVendidos !== bVendidos) {
        return bVendidos - aVendidos
      } else {
        return aDescuento - bDescuento
      }


      // if (a?.attributes?.veces_comprado !== b?.attributes?.veces_comprado) {
      //   // Ordenar por veces_comprado de mayor a menor
      //   return parseInt(b?.attributes?.veces_comprado) - parseInt(a?.attributes?.veces_comprado);
      // } else {
      //   // Si veces_comprado es igual, ordenar por descuento_react de menor a mayor
      //   return parseInt(a?.attributes?.descuento) - parseInt(b?.attributes?.descuento);
      // }
    }
    )

    return productosOrdenados.slice(0, 5)

  }
  const getNewProducts = () => {
    //get products by "createdAt attribute -> this is the format "2023-12-18T02:02:33.596Z"
    let productosOrdenados = [...productsArray]
    productosOrdenados = productosOrdenados.sort((a, b) => {
      const aDate = new Date(a?.attributes?.publishedAt)
      const bDate = new Date(b?.attributes?.publishedAt)
      return bDate - aDate
    }
    )

    return productosOrdenados.slice(0, 5)

  }
  console.log(getNewProducts())
  console.log(getFeaturedProducts())
  return (
    <>

      <div className='qweW'>
        <div className='  ' >
          {/* CAROUSEL */}
          <div className='  mx-auto  max-w-[1920px]  '>

            <div className=' flex   mx-auto   '>
              <Carousel
                className=''
                autoPlay
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                // swipeable only for mobile  

                // customRightArrow={<RightCustomButton elem={this}/>}
                customRightArrow={
                  <CustomRightArrow />
                }
                customLeftArrow={<CustomLeftArrow />}
                itemClass='  '
                containerClass=" w-full mx-auto "
                dotListClass="flex gap-1 pb-4"
                // customRightArrow={<CustomRightArrow />}      
                // customLeftArrow={<button className='bg-red-500'>left</button>}
                focusOnSelect={false}
                // i want dots that fills with red color when active
                infinite

                keyBoardControl
                minimumTouchDrag={100}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 1
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 1
                  }
                }}
                // rewind={false}
                // rewindWithAnimation={false}

                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                removeArrowOnDeviceType={['tablet', 'mobile', 'smobile']}
              >
                {
                  carImages.map((image, index) => {
                    return (
                      <div key={index}
                        className='bg-[#e5e7eb] justify-center flex items-center'
                      >
                        <img
                          // select image from public/images folder
                          className=
                          "aspect-square object-cover object-center sm:aspect-[unset] sm:object-fill rounded-lg"

                          src={image}
                          srcSet={
                            `
                ${image} 320w,
                ${image} 640w,
                ${image} 768w,
                ${image} 1280w,
                ${image} 1920w,
                `

                          }
                          style={{
                            display: 'block',
                            // aspectRatio: '16/9',
                            // objectFit: 'cover',
                            // height: '100vh',

                            // width: '100vh',
                          }}

                        />
                      </div>
                    )
                  })
                }



              </Carousel>
            </div>
          </div>
          {/* <Hero /> */}
        </div>
        {/* as */}


        <div className="">

          {/* DISEÑO DE PRODUCTOS */}
          <section className="" style={{}}>
            <div className="container mx-auto py-20">
              <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Productos Destacados</h2>
              <div className="">
                {/* {productsArray?.slice(0, 5).map(product => (
                  <Product key={product?.id} product={product} />
                )).slice(0, 5)} */}
                <Carousel
                  responsive={responsive}
                  infinite
                  arrows
                  draggable={false}
                  autoPlay
                  swipeable={true}
                  customRightArrow={
                    <CustomRightArrow />
                  }
                  customLeftArrow={
                    <CustomLeftArrow />}
                >
                  {
                    getFeaturedProducts().map(product => {
                      return (
                        <Product key={product?.id} product={product} gap={10} />
                      )
                    }
                    )

                    // productsArray?.map(product => {
                    //   // console.log(product)
                    //   return (
                    //     <Product key={product?.id} product={product} gap={10} />
                    //   )
                    // }
                    // ).slice(0, 5)
                  }

                </Carousel>
              </div>
            </div>
          </section>
          {/* FIN DISEÑO DE PRODUCTOS */}
        </div>

        {/* HERO */}
        <section className='flex justify-center container mx-auto'>
          {/* <Hero /> */}
        </section>
        {/* FIN CAROUSEL */}
        <section>
          <div className='container mx-auto py-20'>
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
                  getNewProducts().map(product => {
                    return (
                      <Product key={product?.id} product={product} gap={10} />
                    )
                  }
                  )
                  // productsArray?.map(product => (
                  //   <Product key={product?.id} product={product} gap={10} />
                  // )).slice(5, 10)
                }
              </Carousel>
            </div>
          </div>
        </section>
        {/* Categorías populares */}
        {/* <div className='bg-red-200 grid grid-rows-1 grid-cols-4'>
          
          <div className='bg-red-500 h-full w-full col-span-2 row-span-2'>1</div>
          <div className='bg-orange-200 h-20 w-full'>2</div>
          <div className='bg-yellow-200 h-20 w-full'>3</div>
          <div className='bg-green-200 h-20 w-full'>4</div>
          <div className='bg-blue-200 h-20 w-full'>5</div>
          <div className='bg-indigo-200 h-20 w-full'>6</div>
          <div className='bg-purple-200 h-20 w-full'>7</div>
          <div className='bg-pink-200 h-20 w-full'>8</div>



        </div> */}
        {/* <div className='flex'> */}
        {/* GRID WITH BRANDSLOGOWARRAY */}
        {/* I want that some elements take more space than others. Example: Element 1 take four cells  */}

        {/* <section className='container mx-auto py-20'>
            <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Categorías Populares</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
              {
                brandsLogoArray?.map(brand => {
                  return (
                    <div key={brand?.id} className='bg-[#e5e7eb] justify-center flex items-center'>
                      <img

                        className="rounded-lg"

                        src={brand?.attributes?.logo?.data?.attributes?.url}

                        style={{
                          display: 'block',

                        }}

                      />
                    </div>
                  )
                }
                )
              }
            </div>
          </section> */}
        {/* </div> */}
        {/* MARCAS */}
        {/* <section className="brands" style={{}}>
          <div className="container mx-auto py-20">
            <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Nuestras Marcas</h2>
            <div className="">
              {productsArray?.slice(0, 5).map(product => (
                  <Product key={product?.id} product={product} />
                )).slice(0, 5)}

              <Carousel
                responsive={
                  {
                    superLargeDesktop: {
                      breakpoint: { max: 4000, min: 1025 },
                      items: 5,
                      slidesToSlide: 1 
                    },
                    desktop: {
                      breakpoint: { max: 1024, min: 769 },
                      items: 5,
                      slidesToSlide: 1 
                    },
                    tablet: {
                      breakpoint: { max: 768, min: 641 },
                      items: 4,
                      slidesToSlide: 1 
                    },
                    mobile: {
                      breakpoint: { max: 640, min: 401 },
                      items: 2,
                      slidesToSlide: 1 
                    },
                    smobile: {
                      breakpoint: { max: 400, min: 0 },
                      items: 1,
                      slidesToSlide: 1 
                    }
                  }
                }

                infinite
                arrows={false}
                draggable={false}
                autoPlay
                centerMode={false}

                sliderClass='sm:gap-4'
                customTransition='all 1s '
                shouldResetAutoplay={false}
                rewind={false}
                rewindWithAnimation={true}
                re
              >

                {
                  brandsLogoArray?.map(brand => {
                    return (
                      <div key={brand?.id} className='bg-[#e5e7eb] justify-center flex items-center'>
                        <img
                          select image from public/images folder
                          className="rounded-lg"
                          " sm:aspect-[unset] sm:object-fill rounded-lg"

                          src={brand?.attributes?.logo?.data?.attributes?.url}
                          srcSet={
                            `

                            ${brand?.attributes?.logo?.data?.attributes?.url} 1920w,
                            `

                          }
                          style={{
                            display: 'block',
                            aspectRatio: '16/9',
                            objectFit: 'cover',
                            height: '100vh',

                            width: '100vh',
                          }}

                        />
                      </div>
                    )
                  }
                  )
                }
              </Carousel>
            </div>
          </div>
        </section> */}

      </div>

    </>
  );
}