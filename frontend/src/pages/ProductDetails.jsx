import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import { formatPrice } from '../utils'
import { FiltersContext } from '../context/FiltersContext';
// import card from material ui. 
// import  Card  from '@mui/material/Card';
import { Product } from '../components/Product';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// reset window scroll position to top on page load
 




export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { categories } = useContext(FiltersContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  console.log(categories);
  // iterate over categories and log the name of each category
  // filter product by category
  

  // Scroll to top


  const productsArray = Array.isArray(products.data) ? products.data : [];

  // Obtén el producto por su id
  const product = productsArray.find((item) => {
    return item.id === parseInt(id);
  });

  // console.log(product);

  if (!product) {
    return <section className='h-full flex justify-center'></section>;
  }

  const { attributes } = product;
  const { nombre, precio, descripcion, portada } = attributes;

  // filter products by category
  // const relatedProducts = productsArray.filter((item) => {
  //   return item.attributes.subcategoria.data.attributes.nombre === "Guitarras";
  // });
  // use categories variable to get a list with subcategories names 
  // const subcategoriesList = categories.map((item) => {
  //   return item.data.attributes..subcategorias.data.
  

  const productSubcategory = product?.attributes?.subcategoria?.data?.attributes.nombre;
  console.log(productSubcategory);
  // filter products by subcategory
  const relatedProducts = productsArray.filter((item) => {
    return item.attributes.subcategoria.data.attributes.nombre === productSubcategory;
  });
  // Similar products is an array of products with the same category as the current product
  

  // const relatedProducts = productsArray.filter((item) => {
  //   return item.attributes.subcategoria.data.attributes.nombre === product.attributes.subcategoria.data.attributes.nombre;
  // });
  // // Similar products is an array of products with the same category as the current product
  // const similarProcucts = productsArray.filter((item) => {
  //   return item.attributes.subcategoria.data.attributes.nombre === 
  //   product.attributes.subcategoria.data.attributes.nombre;
  // });

  // console.log(relatedProducts);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
      <section className='pt-32 pb-12 lg:py-32 flex items-center  '>
        <div className="container mx-auto px-32  ">
          <div className='flex flex-col lg:flex-row bg-white px-2 py-10 rounded-lg min-w-[370px]'>
            {/* Imagen */}
            {/* <div className='flex flex-col '>
              <div className=' flex-col border hidden lg:block '>
                <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
              </div>
            </div> */}
            <div className='self-center lg:self-auto   justify-center items-center  lg:mb-0 border  rounded-lg'>
              <img className='max-w-[200px] lg:max-w-sm' src={portada.data.attributes.url} alt={nombre} />
            </div>
            {/* Texto */}
            <div className='flex-1 text-center lg:text-left p-4'>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px] '>{nombre}</h1>
              <div className='text-xl text-red-500 font-medium'>{`${formatPrice(precio)}`}</div>
              <p className='mb-8'>{descripcion}</p>
              <div className='flex justify-center items-center lg:justify-end'>
                <button className="bg-red-500 py-4 px-8 text-white text-b flex mb-20 rounded-[100px]" onClick={() => { addToCart({ ...product, precio }, product.id); }}>Añadir al carrito de compras</button>

              </div>
            </div>
          </div>
        </div>

      </section>
      <div className='flex justify-center mb-20'>
        {/* <div className=''>
          <div className='text-center justify-center'>
            <h2 className='text-[32px] font-bold'>Productos similares</h2>
            <div className='flex gap-20 flex-wrap justify-center'>

              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_1ee9feff836547dab0fc4749b3168d74~mv2.webp" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Eléctrica Ibanez Hollowbody</p>
                    <p className='text-[16px] font-medium mb-2'>$679.900</p>
                  </div>
                </div>
              </div>

              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_209816e1b9ed4d08a8aab60631c09706~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06c2ca_209816e1b9ed4d08a8aab60631c09706~mv2.jpg" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Eléctrica Greg Bennett</p>
                    <p className='text-[16px] font-medium mb-2'>$699.900</p>
                  </div>
                </div>
              </div>
              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_20f53c2a4ca243a3ace3a741a9604456~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06c2ca_20f53c2a4ca243a3ace3a741a9604456~mv2.jpg" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Lasalle JZ-2 Wine Red</p>
                    <p className='text-[16px] font-medium mb-2'>$699.900</p>
                  </div>
                </div>
              </div>
              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_c2319b78ec30456b879cca0db84751b0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06c2ca_c2319b78ec30456b879cca0db84751b0~mv2.jpg" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'> Ibanez RG320 EXZ</p>
                    <p className='text-[16px] font-medium mb-2'>$719.900</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='text-center justify-center mt-4'>
            <h2 className='text-[32px] font-bold'>Productos relacionados</h2>
            <div>
              <div className='flex gap-20 flex-wrap justify-center'>
                <div className=' flex-col border  p-4'>
                  <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_6a00146bad6d45478eede2adac21d7ca~mv2.webp" alt="" />
                  <div className='flex flex-wrap justify-center'>
                    <div className='flex flex-col'>
                      <p className='text-[16px] font-medium mb-2'>Acústica Alhambra 3C</p>
                      <p className='text-[16px] font-medium mb-2'>$699.900</p>
                    </div>
                  </div>
                </div>

                <div className=' flex-col border p-4 '>
                  <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_e2adbe768d2c48a3b8687c39f89e75f9~mv2.webp" alt="" />
                  <div className='flex flex-wrap justify-center'>
                    <div className='flex flex-col'>
                      <p className='text-[16px] font-medium mb-2'>Acústica Alhambra 1C</p>
                      <p className='text-[16px] font-medium mb-2'>$499.900</p>
                    </div>
                  </div>
                </div>

                <div className=' flex-col border  p-4'>
                  <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_3bbf8a40ad4e4852b435016fa5c9b61d~mv2.webp" alt="" />
                  <div className='flex flex-wrap justify-center'>
                    <div className='flex flex-col'>
                      <p className='text-[16px] font-medium mb-2'>Acústica Alhambra Z</p>
                      <p className='text-[16px] font-medium mb-2'>$399.900</p>
                    </div>
                  </div>
                </div>

                <div className=' flex-col border  p-4'>
                  <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_e7931e6ae773402a8010d4ef5ce1ecf0~mv2.webp" alt="" />
                  <div className='flex flex-wrap justify-center'>
                    <div className='flex flex-col'>
                      <p className='text-[16px] font-medium mb-2'>Acústica Alhambra college</p>
                      <p className='text-[16px] font-medium mb-2'>$349.900</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Create a product card: must be contain an imagen at the top. Use <Card> component */}
        <div className=' flex flex-col text-center gap-10'>
          <h2 className='text-2xl font-bold '>Productos relacionados</h2>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass="container"
            dotListClass=""
            draggable
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
                  min: 768
                },
                items: 2,
                partialVisibilityGutter: 40
              },
              mobile: {
                breakpoint: {
                  max: 640,
                  min: 0
                },
                items: 3,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 768,
                  min: 640
                },
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={3}
            swipeable
          >
              
                {
                  relatedProducts.map((product, index) => (
                    <Product key={index} product={product} gap={10} min_width={false}/>
                  ))
                }
              
              
          

          </Carousel>
        </div>
        
        {/* <div className='rel-products flex gap-2'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[15px] x max-w-sm mx-auto md:max-w-none px-2">
            {relatedProducts
            .map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
 
        </div> */}
        
        
      </div>
    </>

  );
};
