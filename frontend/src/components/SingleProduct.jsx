import { useEffect, useRef, useState } from 'react';
import { SocialShare } from './SocialShare';
import { Heart } from './Icons/Heart'
import { formatPrice } from '../utils'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Carousel from 'react-multi-carousel';
import { CustomRightArrow } from './Arrows/CustomRightArrow';
import { CustomLeftArrow } from './Arrows/CustomLeftArrow';
export const SingleProduct = (product) => {
  const precio = product?.precio
  const singleProduct = product?.product
  const { addToCart } = useContext(CartContext);
  // const [selectedImage, setSelectedImage] = useState(false)
  const [mainImage, setMainImage] = useState(singleProduct?.attributes?.portada?.data?.attributes?.url)
  const imageRef = useRef(null)
  const secondaryImages = singleProduct?.attributes?.imagenes_secundarias?.data?.map((img) => img?.attributes?.url) || []

  const imgs = [
    singleProduct?.attributes?.portada?.data?.attributes?.url,
    ...secondaryImages
  ]

  useEffect(() => {
    setMainImage(singleProduct?.attributes?.portada?.data?.attributes?.url)
    if(imageRef.current){

      imageRef.current.style.outline = "1px solid black"
    }
  }, [singleProduct])
  console.log(secondaryImages)
  // console.log("IMGS", imgs)
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
    // console.log(imageRef.current)
    if(imageRef.current ){
      if(imageRef.current !== e.target){
        imageRef.current.style.outline = "1px solid black"
      }
      
    }
    imageRef.current = e.target
  }
  return (
    <section className='pt-10 pb-12 lg:py-20 flex items-center   mx-2'>

      <div className="flex flex-col  mx-auto p-4 bg-white rounded ">
        <div className='flex flex-col lg:flex-row  px-2 py-10 -lg w-full   '>
          {/* Imagen */}
          {/* <div className='flex flex-col '>
                    <div className=' flex-col border hidden lg:block '>
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                      <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
                    </div>
                  </div> */}
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
                            changeColor(e,img)
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
                  // containerClass=''
                  // li class
                  // itemClass='bg-green-200 p-2 w-[200px] '
                  containerClass='carousel-image-container w-[19rem]  sm:w-[32.25rem]   '
                  className='w-[]  bg-orange-400'
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

            {/* <div className='bg-red-200 flex self-center lg:self-auto justify-center items-center    lg:mb-0 border  rounded-lg mx-auto md:ml-auto border-black border-opacity-[30%] '>
              
              <div className='flex flex-row bg-green-200 w-full h-[300px] '>


              </div>
             
            </div> */}

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
              <button disabled={!(singleProduct?.attributes?.stock > 0)}  className={`transition-all duration-300   ${singleProduct?.attributes?.stock > 0 ? "bg-[#D40404] hover:bg-[#F80606]  text-white":"bg-white text-black opacity-[0.6] cursor-not-allowed"} py-2 px-8  font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0`}
                onClick={() => { 
                  console.log(singleProduct?.attributes?.stock)
                  console.log()
                  addToCart({ ...singleProduct, precio }, singleProduct?.id); }}>
                    {
                      singleProduct?.attributes?.stock > 0 ? "Agregar al carrito" : "Agotado"
                    }
                {/* Agregar al carrito */}
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
