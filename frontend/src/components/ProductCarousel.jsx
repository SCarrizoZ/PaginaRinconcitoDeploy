
import Carousel from 'react-multi-carousel'
import { Product } from './Product'
import { CustomLeftArrow } from './Arrows/CustomLeftArrow'
import { CustomRightArrow } from './Arrows/CustomRightArrow'

export const ProductCarousel = (productsArray) => {
  console.log(productsArray)
  const {products} = productsArray
  const productList = Array.isArray(products) ? products : [];
  console.log(products)
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
    <div>
                <Carousel
                  responsive={responsive}
                  infinite
                  arrows
                  draggable={false}
                  autoPlay
                  swipeable={false}
                
                  customRightArrow={<CustomRightArrow />}
                  
                  customLeftArrow = {
                    <CustomLeftArrow />
                  } 
                >
                  {
                    productList?.map((product, index) => (
                      <Product key={index} product={product} gap={10} min_width={false} />
                    ))
                  }
                </Carousel>
              </div>
  )
}
