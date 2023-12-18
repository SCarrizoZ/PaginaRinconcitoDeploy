import { useEffect, useRef, useState } from 'react';
import { SocialShare } from './SocialShare';
import { HeartAddWishlist } from './Icons/HeartAddWishlist'
import { formatPrice } from '../utils'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Carousel from 'react-multi-carousel';
import { CustomRightArrow } from './Arrows/CustomRightArrow';
import { CustomLeftArrow } from './Arrows/CustomLeftArrow';
import { useWishlist } from '../context/WislistContext';
export const SingleProduct = (product) => {
  const precio = product?.precio
  const singleProduct = product?.product
  const { addToCart } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(false)
  const [mainImage, setMainImage] = useState(singleProduct?.attributes?.portada?.data?.attributes?.url)
  const imageRef = useRef(null)
  const imgs = [
    "https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp",
    "https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp",
    singleProduct?.attributes?.portada?.data?.attributes?.url
  ]

  const { wishlist, addToWishlist } = useWishlist(); // Get the wishlist from the context
  const [isInWishlist, setIsInWishlist] = useState(false);
  const isLoggedIn = !!localStorage.getItem('user');

  useEffect(() => {
    setMainImage(singleProduct?.attributes?.portada?.data?.attributes?.url)
  }, [singleProduct])

  useEffect(() => {
    // Check if the product is in the wishlist when the component mounts
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

  console.log("IMGS", imgs)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1025 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1024, min: 769 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 641 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 401 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    smobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const changeColor = (e, img) => {
    // console.log(e.target.style.borderColor="red")
    e.target.style.outline = "2px solid red"
    console.log(imageRef.current)
    if (imageRef.current) {
      imageRef.current.style.outline = "2px solid black"

    }
    imageRef.current = e.target
  }
  return (
    <section className='pt-32 pb-12 lg:py-32 flex items-center  '>

      <div className="flex flex-col  mx-auto p-4 bg-white rounded ">
        <div className='flex flex-col lg:flex-row  px-2 py-10 -lg w-full bg-orange-200  '>
          {/* Imagen */}
          {/* <div className='flex flex-col '>
                    <div className=' flex-col border hidden lg:block '>
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
                    </div>
                  </div> */}
          {/* IMAGES */}
          <div className=' flex gap-3 p-2 bg-blue-300'>
            <div>
              {/* OTHER RELATED IMAGES */}
              <div>
                <div className=' flex-col  hidden md:flex gap-1 '>

                  {
                    imgs.map((img, index) => (
                      <img key={index} className=' cursor-pointer outline outline-1 hover:outline-red-500 hover:outline-2  max-w-[100px] lg:max-w-[100px] rounded-lg  border-black'
                        src={img} alt="" onClick={
                          (e) => {
                            setMainImage(img)
                            changeColor(e, img)
                          }

                        } srcSet={`
                      ${img} 1x,
                      ${img} 2x,
                      ${img} 3x,
                      ${img} 4x,



                      `} />
                    ))
                  }

                </div>
              </div>
              <div>

              </div>
            </div>
            {/* CAROUSEL */}
            <div className='w-full  bg-red-200 md:hidden mx-auto'>
              <Carousel
                responsive={responsive}
                infinite
                arrows
                draggable={false}

                swipeable={false}
                containerClass='max-w-lg  lg:max-w-md '

                showDots

              >
                {
                  imgs?.map((img, index) =>
                  (
                    <div key={index}>
                      <img className='aspect-square object-cover max-w-lg md:max-w-lg ' src={img} alt="" />
                    </div>
                  ))
                }
              </Carousel>
            </div>
            {/* MAIN SCREEN */}
            <div className=' flex-col gap-2 hidden md:flex mx-auto'>
              <img className=' aspect-square object-cover object-center w-[500px] sm:max-w-lg md:max-w-lg ' src={mainImage} alt={singleProduct?.attributes?.nombre} />
            </div>

            {/* <div className='bg-red-200 flex self-center lg:self-auto justify-center items-center    lg:mb-0 border  rounded-lg mx-auto md:ml-auto border-black border-opacity-[30%] '>
              
              <div className='flex flex-row bg-green-200 w-full h-[300px] '>


              </div>
             
            </div> */}

          </div>
          {/* Texto */}
          <div className='flex flex-col gap-3    p-4  lg:max-w-[400px]  '>
            <h1 className='text-[26px] font-medium  max-w-[450px] '>{singleProduct?.attributes?.nombre}</h1>
            {/* check stock */}
            {
              singleProduct?.attributes?.stock > 0 ?
                <div className='text-green-500 font-bold uppercase'>En stock</div>
                :
                <div className='text-red-500 font-bold uppercase'>Sin stock</div>
            }
            <div className='text-xl text-[#F80606] font-semibold'>{`${formatPrice(precio)}`}</div>
            <p className='mb-8 text-[1rem] font-normal'>{singleProduct?.attributes?.descripcion}</p>

            <div className='flex justify-end items-center lg:justify-end gap-3  p-1'>
              <button className="transition-all duration-300 hover:bg-[#F80606] bg-[#D40404] py-2 px-8 text-white font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0"
                onClick={() => { addToCart({ ...singleProduct, precio }, singleProduct?.attributes?.id); }}>
                Agregar al carrito
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
      {/* <Carousel
        responsive={responsive}
        infinite
        arrows
        draggable={false}
        autoPlay
        swipeable={false}
        containerClass='w-full h-full bg-red-200'
        customRightArrow={<CustomRightArrow />}

        customLeftArrow={
          <CustomLeftArrow />
        }

      >
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
        <div>asdas</div>
      </Carousel> */}
    </section>
  )
}
