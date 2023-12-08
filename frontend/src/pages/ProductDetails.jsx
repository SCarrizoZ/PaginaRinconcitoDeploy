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
import { SocialShare } from '../components/SocialShare'; 


import Heart from '../components/Icons/Heart';
// reset window scroll position to top on page load
 




export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { categories } = useContext(FiltersContext);
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
  console.log(categories);
  // iterate over categories and log the name of each category
  // filter product by category
  

  // Scroll to top


  const productsArray = Array.isArray(products?.data) ? products?.data : [];

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
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [id])

  return (
    <>
      <div className='flex justify-center'>
        <div className='container bg-red-300'>
            <section className='pt-32 pb-12 lg:py-32 flex items-center  '>

              <div className="flex flex-col  mx-auto p-4 bg-orange-300 ">
                <div className='flex flex-col lg:flex-row bg-green-200 px-2 py-10 rounded-lg w-full '>
                  {/* Imagen */}
                  {/* <div className='flex flex-col '>
                    <div className=' flex-col border hidden lg:block '>
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
                    </div>
                  </div> */}
                  {/* IMAGES */}
                  <div className='bg-blue-200 flex gap-3 p-2 '>
                    <div>
                      {/* OTHER RELATED IMAGES */}
                      <div>
                        <div className=' flex-col  hidden md:flex gap-1 '>
                          <img className=' cursor-pointer outline outline-1 hover:outline-red-500 hover:outline-2  max-w-[100px] lg:max-w-[100px] rounded-lg  border-black' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                          <img className='cursor-pointer outline outline-1 hover:outline-red-500 hover:outline-2 max-w-[100px] lg:max-w-[100px] rounded-lg border-black' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
                        </div>
                      </div>
                    <div>
                      
                    </div>
                    </div>
                    <div className='self-center lg:self-auto   justify-center items-center  lg:mb-0 border  rounded-lg mx-auto md:ml-auto'>
                      <img className=' sm:max-w-lg md:max-w-lg ' src={portada.data.attributes.url} alt={nombre} />
                    </div>

                  </div>
                  {/* Texto */}
                  <div className='flex flex-col gap-3    p-4 bg-pink-300 lg:max-w-[400px]  '>
                    <h1 className='text-[26px] font-medium  max-w-[450px] '>{nombre}</h1>
                    {/* check stock */}
                    {
                      product?.attributes?.stock > 0 ?
                        <div className='text-green-500 font-bold uppercase'>En stock</div>
                        :
                        <div className='text-red-500 font-bold uppercase'>Sin stock</div>
                    }
                    <div className='text-xl text-[#F80606] font-semibold'>{`${formatPrice(precio)}`}</div>
                    <p className='mb-8 text-[1rem] font-normal'>{descripcion}</p>
                    
                    <div className='flex justify-end items-center lg:justify-end gap-3 bg-blue-200'>
                      <button className="bg-[#F80606] py-2 px-8 text-white font-semibold border border-black flex justify-center  rounded-[100px] w-full sm:mx-0" 
                              onClick={() => { addToCart({ ...product, precio }, product.id); }}>
                        Agregar al carrito
                      </button>
                      {/* heart icon wishlist  only icon*/}
                      <div className='border border-black rounded-lg p-1 mx-auto sm:mx-0'>
                        <Heart borderColor={"black"} bgColor={"#FB6F6F"} />
                      </div>


                    </div>
                  </div>
                </div>
                <SocialShare />
              </div>

            </section>

            <div className=' mb-10 bg-green-300 '>


              {/* Create a product card: must be contain an imagen at the top. Use <Card> component */}
             
                 
              <div className='flex flex-col py-10'>
                
                  <div className='text-center text-2xl font-semibold mb-10'>
                    <h2>Productos similares</h2>
                  </div>
                  <div>
                    <Carousel responsive={responsive} infinite arrows draggable={false} autoPlay swipeable={false} >
                      {
                        relatedProducts.map((product, index) => (
                          <Product key={index} product={product} gap={10} min_width={false} />
                        ))
                      }
                    </Carousel>
                  </div>
                
                
              </div>
              <div className='flex flex-col py-10'>
                
                  <div className='text-center text-2xl font-semibold mb-10'>
                    <h2>Productos relacionados <span className='text-red-500'>(falta la categoría)</span></h2>
                  </div>
                  <div>
                    <Carousel responsive={responsive} infinite arrows draggable={false} autoPlay >
                      {
                        relatedProducts.map((product, index) => (
                          <Product key={index} product={product} gap={10} min_width={false} />
                        ))
                      }
                    </Carousel>
                  </div>
                
                
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
          {/* <div>
            <Carousel responsive={responsive} infinite arrows draggable={false} >
              {
                relatedProducts.map((product, index) => (
                  <Product key={index} product={product} gap={10} min_width={false} />
                ))
              }
            </Carousel>
          </div> */}
        </div>
        
      </div>
{/*      
      <div className='flex justify-center'>

        <div className='bg-yellow-100 container'>

          <Carousel responsive={responsive} infinite arrows >
            {
              relatedProducts.map((product, index) => (
                <Product key={index} product={product} gap={10} min_width={false} />
              ))
            }

          </Carousel>
        </div>
      </div> */}
      {/* FIXED CART BUTTON */}
      <div className='fixed bottom-0 p-6 bg-white w-full z-[1002] flex justify-center md:hidden shadow-2xl'>
        <div className='cursor-pointer bg-red-500 text-center text-white font-medium p-4 w-full hover:bg-red-600 '>
          <button onClick={()=>{
            addToCart({ ...product, precio }, product.id);
            
          }} >Agregar al carrito</button>
        </div>
      </div>
    </>

  );
};
