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
import { RiArrowRightSLine } from 'react-icons/ri';
import { CustomRightArrow } from '../components/Arrows/CustomRightArrow';
import { CustomLeftArrow } from '../components/Arrows/CustomLeftArrow';
import { ProductCarousel } from '../components/ProductCarousel';
import Heart from '../components/Icons/Heart';
import { SingleProduct } from '../components/SingleProduct';
// reset window scroll position to top on page load



export const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { categories } = useContext(FiltersContext);



  // console.log(products)
  // console.log(categories)
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
  // console.log(categories);
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
  const { nombre, precio, descripcion, portada, especificaciones } = attributes;

  // filter products by category
  // const relatedProducts = productsArray.filter((item) => {
  //   return item.attributes.subcategoria.data.attributes.nombre === "Guitarras";
  // });
  // use categories variable to get a list with subcategories names 
  // const subcategoriesList = categories.map((item) => {
  //   return item.data.attributes..subcategorias.data.


  const productSubcategory = product?.attributes?.subcategoria?.data?.attributes.nombre;
  // console.log(productSubcategory);
  const productCategory = product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre;
  // filter products by subcategory
  const similarProducts = productsArray.filter((item) => {
    return item?.attributes?.subcategoria?.data?.attributes?.nombre === productSubcategory;
  });
  const relatedProducts = productsArray.filter((item) => {

    return item?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre === productCategory;
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
  // //
  // useEffect(() => {
  //   const metaTag = 
  //     document.createElement('meta');
  //     metaTag.setAttribute("property", "og:image");
  //     metaTag.content = portada?.data?.attributes?.url;
  //     document.getElementsByTagName("head")[0].appendChild(metaTag);
  //     return () => {
  //       document.getElementsByTagName("head")[0].removeChild(metaTag);
  //     }
  // } , [portada?.data?.attributes?.url]);
  function obtenerObjetosPorLinea(texto) {
    const lineas = texto?.split('\n'); // Dividir el texto en líneas

    const objetosPorLinea = lineas?.map((linea) => {
      const palabras = linea?.trim()?.split(' ');

      const especificacionIndex = palabras.findIndex((palabra) => palabra?.startsWith('-'));

      if (especificacionIndex !== -1) {
        let especificacion = palabras[especificacionIndex]?.slice(1);
        let contenido = '';

        const dosPuntosIndex = palabras?.findIndex((palabra, index) => index > especificacionIndex && palabra?.includes(':'));

        if (dosPuntosIndex !== -1) {
          especificacion = palabras?.slice(especificacionIndex, dosPuntosIndex + 1)?.join(' ')?.replace('-', '');
          contenido = palabras?.slice(dosPuntosIndex + 1)?.join(' ')?.replace('-', '');
        } else {
          contenido = palabras?.slice(especificacionIndex + 1)?.join(' ')?.replace('-', '');
        }

        return {
          especificacion,
          contenido,
        };
      }

      return null;
    })?.filter(Boolean);

    return objetosPorLinea;
  }

  const objetos = obtenerObjetosPorLinea(especificaciones);
  console.log(objetos)
  console.log(product)
  return (
    <>
      <div className='flex justify-center'>
        <div className='container '>
          <SingleProduct product={product} precio={precio} />
          <div className='bg-slate-200'>
            {/* Genera una tabla para una lista de especificaciones */}
            <div className=' mx-2 p-2'>
              <div className='flex flex-col justify-center'>
                <div className='text-center text-2xl  mb-10 '>
                  <h2 className='titulo mb-6 text-left ' style={{
                    fontSize: 39
                  }}> <span className='text-red-500 border-b-4 border-red-500'>
                      {
                        product?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre === "Vinilos y CD's" ? "Lista de canciones" : "Especificaciones"
                      }
                    </span>
                  </h2>

                </div>
                {/* specifications list */}
                <div className='flex flex-col md:flex-row justify-center w-full '>
                  <div className='flex flex-col w-full'>
                    <div className='flex flex-col '>
                      {
                        objetos?.map((item, index) => (
                          <div key={index} className='flex flex-row justify-between  p-1 border-b-2 border-black border-opacity-5'>
                            <div className=' w-[29%]'>
                              <p className='font-medium text-xl'>{item.especificacion}</p>
                            </div>
                            {/* <p> random text */}
                            <div className=' w-[69%] text-right sm:text-left'>
                              <p >{item.contenido}  </p>
                            </div>
                          </div>
                        ))
                      }


                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className=' mb-10  '>

            <div className='flex flex-col py-10'>

              <div className='text-center text-2xl  mb-10'>
                <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Productos Similares <span className='text-red-500'></span></h2>
              </div>
              <ProductCarousel products={similarProducts} />
            </div>

            <div className='flex flex-col py-10 '>
              <div className='text-center  mb-10'>
                <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }} >Productos Relacionados</h2>
              </div>
              <ProductCarousel products={relatedProducts} />
            </div>
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
      <div className='add-cart-mobile fixed bottom-0 p-6 bg-white w-full z-[1002] flex justify-center md:hidden shadow-2xl min-w-[380px] '>
        <div className="container">

          <button disabled={!(product?.attributes?.stock > 0)} className={`transition-all duration-300   ${product?.attributes?.stock > 0 ? "bg-[#D40404] hover:bg-[#F80606]  text-white" : "bg-white text-black opacity-[0.6] cursor-not-allowed"} py-2 px-8  font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0`}
            onClick={() => {
              // console.log(product?.attributes?.stock)
              // console.log()
              addToCart({ ...product, precio }, product?.id);
            }}>
            {
              product?.attributes?.stock > 0 ? "Agregar al carrito" : "Agotado"
            }
            {/* Agregar al carrito */}
          </button>
        </div>


      </div>

      <title>{nombre}</title>
      <meta name="description" content={descripcion} />
      <meta name="keywords" content={nombre} />
      <meta name="author" content="Rinconcito de la Guitarra" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta property="og:title" content={nombre} />
      <meta property="og:description" content={descripcion} />
      <meta property="og:image" content={portada?.data?.attributes?.url} />
      <meta property='og:url' content={`https://rinconcito-pruebas.onrender.com/product/${id}`} />
      <meta property="og:site_name" content="Rinconcito de la Guitarra" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:updated_time" content="1440432930" />
      <meta property="fb:app_id" content="966242223397117" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@rinconcitodelaguitarra" />
      <meta name="twitter:creator" content="@rinconcitodelaguitarra" />
      <meta name="twitter:title" content={nombre} />
      <meta name="twitter:description" content={descripcion} />
      <meta name="twitter:image" content={portada?.data?.attributes?.url} />
      <meta name="twitter:image:alt" content={nombre} />



    </>

  );
};
