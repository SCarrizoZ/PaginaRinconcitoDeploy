import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { Hero } from '../components/Hero';
import marcas from '../img/marcas.png';
import Carousel from 'react-multi-carousel';
export function Home() {
  // Obtén los productos del contexto
  const { products } = useContext(ProductContext);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const productsArray = Array.isArray(products?.data) ? products?.data : [];

  return (
    <>
      
      <div className=''>
        <div className='flex justify-center'>

          

            <Hero  />
          
        </div>
        
        <div className="container mx-auto">
        
          {/* DISEÑO DE PRODUCTOS */}
          <section className="" style={{  }}>
            <div className="container mx-auto py-20">
              <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Productos Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">
                {productsArray?.slice(0, 5).map(product => (
                  <Product key={product?.id} product={product} />
                )).slice(0, 5)}
              </div>
            </div>
          </section>
          {/* FIN DISEÑO DE PRODUCTOS */}
          
          
        </div>
        {/* CAROUSEL */}
        <section>
            <div className='bg-red-200 flex justify-center w-full'>
              <Carousel
              autoPlay
                className='w-full  bg-red-200'
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}

                containerClass=" w-full h-auto"
                dotListClass=""
                // customRightArrow={<CustomRightArrow />}      
                // customLeftArrow={<button className='bg-red-500'>left</button>}
                focusOnSelect={false}
                infinite
                itemClass=""
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
                rtl={false}
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