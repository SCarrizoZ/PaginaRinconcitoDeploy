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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  return (
    <>
      <div className='flex justify-center'>
        <div className='container bg-red-300'>
            <section className='pt-32 pb-12 lg:py-32 flex items-center  '>
              <div className="container mx-auto px-32 bg-orange-300 ">
                <div className='flex flex-col lg:flex-row bg-white px-2 py-10 rounded-lg '>
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
                    <p className='mb-8 text-[1rem]'>{descripcion}</p>
                    <div className='flex justify-center items-center lg:justify-end'>
                      <button className="bg-red-500 py-4 px-8 text-white text-b flex mb-20 rounded-[100px]" onClick={() => { addToCart({ ...product, precio }, product.id); }}>Añadir al carrito de compras</button>

                    </div>
                  </div>
                </div>
              </div>

            </section>

            <div className=' mb-10 bg-green-300 '>


              {/* Create a product card: must be contain an imagen at the top. Use <Card> component */}
             
                 
              <div className='flex flex-col py-10'>
                
                  <div className='text-center text-2xl font-semibold mb-10'>
                    <h2>Productos relacionados</h2>
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
                    <h2>Productos similares <span className='text-red-500'>(falta la categoría)</span></h2>
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
    </>

  );
};
