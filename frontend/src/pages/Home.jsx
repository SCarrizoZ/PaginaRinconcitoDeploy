import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { Hero } from '../components/Hero';
import marcas from '../img/marcas.png';
import Carousel from 'react-multi-carousel';
// import { RightCustomButton } from '../components/Buttons/RightCustomButton';
import { Button } from '@mui/material';
import { RiArrowRightSLine } from 'react-icons/ri';
// import { LeftCustomButton } from '../components/Buttons/LeftCustomButton';
export function Home() {
  // Obtén los productos del contexto
  const { products } = useContext(ProductContext);
  
  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const productsArray = Array.isArray(products?.data) ? products?.data : [];
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
  return (
    <>
      
      <div className='qweW'>
        <div className='flex justify-center'>

          

            <Hero  />
          
        </div>
        
        <div className="">
        
          {/* DISEÑO DE PRODUCTOS */}
          <section className="" style={{  }}>
            <div className="container mx-auto py-20">
              <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Productos Destacados</h2>
              <div className="">
                {/* {productsArray?.slice(0, 5).map(product => (
                  <Product key={product?.id} product={product} />
                )).slice(0, 5)} */}
                <Carousel
                 responsive={responsive} 
                 infinite 
                 arrows ={true}
                 draggable={false} 
                 autoPlay 
                 customRightArrow={ <button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 right-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                  <RiArrowRightSLine className='text-2xl text-red-500' />
                  </button>
                  }
                customLeftArrow={<button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 left-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                  <RiArrowRightSLine className='text-2xl text-red-500 transform rotate-180' />
                  </button>}
                 >
                  {productsArray?.map(product => (
                    <Product key={product?.id} product={product} gap={10} />
                  ))}
                </Carousel>
                
                
              </div>
            </div>
          </section>
          {/* FIN DISEÑO DE PRODUCTOS */}
          
          
        </div>
        {/* CAROUSEL */}
        <section>
            <div className='bg-red-200 flex justify-center  container mx-auto'>
              <Carousel
              autoPlay
                className='w-full  bg-red-200'
                additionalTransfrom={0}
                arrows
                
                
                autoPlaySpeed={3000}
                centerMode={false}
                // customRightArrow={<RightCustomButton elem={this}/>}
                customRightArrow={ <button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 right-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                <RiArrowRightSLine className='text-2xl text-red-500' />
                </button>
                }
              customLeftArrow={<button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 left-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                <RiArrowRightSLine className='text-2xl text-red-500 transform rotate-180' />
                </button>}
                containerClass=" w-full h-auto"
                dotListClass="flex gap-1 pb-1"
                // customRightArrow={<CustomRightArrow />}      
                // customLeftArrow={<button className='bg-red-500'>left</button>}
                focusOnSelect={false}
                // i want dots that fills with red color when active
                
                infinite
                itemClass="p-4 "
                keyBoardControl
                minimumTouchDrag={80}
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

              >
                <img
                  // select image from public/images folder

                  src={"https://static.wixstatic.com/media/06c2ca_8f8c0c16492441c79d505227e8e6472e~mv2.png/v1/fill/w_1810,h_797,al_c,q_85,usm_0.66_1.00_0.01/06c2ca_8f8c0c16492441c79d505227e8e6472e~mv2.png"}
                  style={{
                    display: 'block',
                    height: 'auto',
                    margin: 'auto',
                    width: '100%'
                  }}
                  className='aspect-w-3 aspect-h-4'
                />
                <img
                  // select image from public/images folder

                  src={"https://static.wixstatic.com/media/06c2ca_e3f7b1877f33459eb68bfbffe07ac818~mv2.png/v1/fill/w_1810,h_797,al_c,q_85,usm_0.66_1.00_0.01/06c2ca_e3f7b1877f33459eb68bfbffe07ac818~mv2.png"}
                  style={{
                    display: 'block',
                    height: 'auto',
                    margin: 'auto',
                    width: '100%'
                  }}
                />
                <img
                  // select image from public/images folder

                  src={"https://static.wixstatic.com/media/06c2ca_abd0ae3785654739acd2f20354c1c67f~mv2.png/v1/fill/w_1810,h_797,al_c,q_85,usm_0.66_1.00_0.01/06c2ca_abd0ae3785654739acd2f20354c1c67f~mv2.png"}
                  style={{
                    display: 'block',
                    height: 'auto',
                    margin: 'auto',
                    width: '100%'
                  }}
                />

              </Carousel>
            </div>
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
                customRightArrow={<button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 right-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                  <RiArrowRightSLine className='text-2xl text-red-500' />
                </button>
                }
                customLeftArrow={<button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 left-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                  <RiArrowRightSLine className='text-2xl text-red-500 transform rotate-180' />
                </button>}
              >
                {productsArray?.map(product => (
                  <Product key={product?.id} product={product} gap={10} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>
        {/* Categorías populares */}
        <section>
          <div className='container mx-auto py-20'>
            <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Categorías Populares</h2>
            <div className=''>
              <Carousel
                responsive={responsive}
                infinite
                arrows={true}
                draggable={false}
                autoPlay
                customRightArrow={<button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 right-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                  <RiArrowRightSLine className='text-2xl text-red-500' />
                </button>
                }
                customLeftArrow={<button className='hover:bg-gray-100 cursor-pointer w-8 h-8 flex justify-center items-center  absolute top-1/2 left-4 max-w-4  bg-white rounded-lg shadow-xl py-10'>
                  <RiArrowRightSLine className='text-2xl text-red-500 transform rotate-180' />
                </button>}
              >
                {productsArray?.map(product => (
                  <Product key={product?.id} product={product} gap={10} />
                ))}
              </Carousel>
            </div>
          </div>
        </section>

        {/* MARCAS */}
        <section style={{ backgroundColor: "#000000" }}>
          <h2 className='titulo text-center pt-6' style={{ fontSize: 39, color: "#F80606" }}>Nuestras Marcas</h2>
          <img src={marcas} alt="marcas" />
        </section>
        {/* FIN MARCAS */}
      </div>
    </>
  );
}