import { useEffect, useRef, useState } from 'react';
import { SocialShare } from './SocialShare';
import { HeartAddWishlist } from './Icons/HeartAddWishlist'
import { formatPrice } from '../utils'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Carousel from 'react-multi-carousel';
import { useWishlist } from '../context/WislistContext';
export const SingleProduct = (product) => {
  const precio = product?.precio
  const singleProduct = product?.product
  const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState(singleProduct?.attributes?.portada?.data?.attributes?.url)
  const imageRef = useRef(null)
  const secondaryImages = singleProduct?.attributes?.imagenes_secundarias?.data?.map((img) => img?.attributes?.url) || []

  const imgs = [
    singleProduct?.attributes?.portada?.data?.attributes?.url,
    ...secondaryImages
  ]

  const { wishlist, addToWishlist } = useWishlist(); // Get the wishlist from the context
  const [isInWishlist, setIsInWishlist] = useState(false);
  const isLoggedIn = !!localStorage.getItem('user');

  useEffect(() => {
    setMainImage(singleProduct?.attributes?.portada?.data?.attributes?.url)
    if (imageRef.current) {

      imageRef.current.style.outline = "1px solid black"
    }
  }, [singleProduct])

  useEffect(() => {
    if (!isLoggedIn) {
      setIsInWishlist(false);
      return;
    }
    const checkWishlist = async () => {
      try {
        const wishlistData = wishlist?.data?.[0]?.attributes?.productos?.data;

        if (wishlistData) {
          const isProductInWishlist = wishlistData.some((item) => item?.id === singleProduct?.id);
          setIsInWishlist(isProductInWishlist);
        }
      } catch (error) {
        console.error('Error checking wishlist:', error);
      }
    };

    checkWishlist();
  }, [wishlist, product, isLoggedIn]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1025 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 768, min: 641 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 401 },
      items: 1,
      slidesToSlide: 1
    },
    smobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  const changeColor = (e, img) => {
    e.target.style.outline = "2px solid red"
    if (imageRef.current) {
      if (imageRef.current !== e.target) {
        imageRef.current.style.outline = "1px solid black"
      }

    }
    imageRef.current = e.target
  }
  return (
    <section className='pt-10 pb-12 lg:py-20 flex items-center   mx-2'>

      <div className="flex flex-col  mx-auto p-4 bg-white rounded ">
        <div className='flex flex-col lg:flex-row  px-2 py-10 -lg w-full   '>
          {/* IMAGES */}
          <div className=' flex gap-3 p-2  w-full '>
            <div className=' hidden md:flex p-2'>
              {/* OTHER RELATED IMAGES */}
              <div className=' p-2  '>
                <div className=' flex-col   gap-2 flex '>

                  {
                    imgs.map((img, index) => (
                      <img key={index} className=' aspect-square object-center object-cover cursor-pointer outline outline-1    max-w-[100px] lg:max-w-[100px] rounded-lg  border-black'
                        src={img} alt="" onClick={
                          (e) => {
                            setMainImage(img)
                            changeColor(e, img)
                          }

                        } srcSet={`
                      ${img} 1x,
                      



                      `} />
                    ))
                  }

                </div>
              </div>
              <div>

              </div>
            </div>

            {/* CAROUSEL */}
            <div className='  flex   mx-auto '>

              <div className='  md:hidden border border-black rounded-lg'>
                <Carousel
                  responsive={responsive}
                  infinite
                  arrows
                  draggable={false}
                  centerMode={false}
                  swipeable={true}
                  containerClass='carousel-image-container w-[19rem]  sm:w-[32.25rem]   '
                  className=''
                  showDots

                >
                  {
                    imgs?.map((img, index) =>
                    (

                      <img key={index} className='aspect-square object-cover object-center rounded-lg  ' src={img} alt=""
                        srcSet={`
                        ${img} 1x,
                        `} />

                    ))
                  }
                </Carousel>
              </div>
              {/* MAIN SCREEN */}
              <div className=' flex-col gap-2 hidden md:flex mx-auto border border-black rounded-lg'>
                <img className=' aspect-square object-cover object-center w-[600px] sm:max-w-lg md:max-w-lg rounded-lg border-black  '
                  src={mainImage}
                  alt={singleProduct?.attributes?.nombre} />
              </div>
            </div>

          </div>
          {/* Texto */}
          <div className='flex flex-col gap-3    p-4  lg:max-w-[400px]  justify-between '>
            <div className=' flex flex-col'>

              <h1 className='text-[26px] font-medium  max-w-[450px] '>{singleProduct?.attributes?.nombre}</h1>
              {/* check stock */}
              {
                singleProduct?.attributes?.stock > 0 ?
                  <div className='text-green-500 font-bold uppercase'>En stock ({(singleProduct?.attributes?.stock)})</div>
                  :
                  <div className='text-red-500 font-bold uppercase'>Sin stock</div>
              }
              <div className='text-xl text-[#F80606] font-semibold'>{`${formatPrice(precio)}`}</div>
              <p className='mb-8 text-[1rem] font-normal'>{singleProduct?.attributes?.descripcion}</p>
            </div>

            <div className='flex justify-end items-center lg:justify-end gap-3  p-1'>
              <button disabled={!(singleProduct?.attributes?.stock > 0)} className={`transition-all duration-300   ${singleProduct?.attributes?.stock > 0 ? "bg-[#D40404] hover:bg-[#F80606]  text-white" : "bg-white text-black opacity-[0.6] cursor-not-allowed"} py-2 px-8  font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0`}
                onClick={() => {
                  console.log(singleProduct?.attributes?.stock)
                  console.log()
                  addToCart({ ...singleProduct, precio }, singleProduct?.id);
                }}>
                {
                  singleProduct?.attributes?.stock > 0 ? "Agregar al carrito" : "Agotado"
                }
                {/* Agregar al carrito */}
              </button>
              {/* heart icon wishlist  only icon*/}
              <button onClick={() => {
                addToWishlist(singleProduct?.id)
              }}>
                <div className='border border-black rounded-lg p-1 mx-auto sm:mx-0'>
                  <HeartAddWishlist borderColor={"black"} bgColor={"#FB6F6F"} isInWishlist={isInWishlist} key={isInWishlist.toString()} />
                </div>
              </button>


            </div>
          </div>
        </div>
        <SocialShare />
      </div>
    </section>
  )
}
