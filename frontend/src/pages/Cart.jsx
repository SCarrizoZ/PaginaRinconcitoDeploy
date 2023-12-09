import { useState, useEffect, useContext, useRef } from 'react'

import { CartContext } from '../context/CartContext'
import { formatPrice } from '../utils'
import { Link } from 'react-router-dom'
import { RiCloseFill, RiShoppingBasket2Line, RiShoppingCart2Line } from 'react-icons/ri'
import { FiTrash2 } from 'react-icons/fi'
import { CartSummaryItem } from '../components/CartSummaryItem'

import { SidebarContext } from '../context/SidebarContext'

import { Header } from '../components/Header'
import { FiltersContext } from '../context/FiltersContext'
import { ProductCarousel } from '../components/ProductCarousel'
import { ProductContext } from '../context/ProductContext'

export const Cart = () => {
  const { cart, setCart, total } = useContext(CartContext)
  const { categories } = useContext(FiltersContext)
  const { products } = useContext(ProductContext)
  const productSubset = products?.data?.slice(0, 10)
  const productsArray = Array.isArray(products?.data) ? products?.data : [];
  const codeInputRef = useRef(null)
  const [newPrice, setNewPrice] = useState(0)
  const [code, setCode] = useState({})

  console.log(productsArray)
  const calculateNewSingleProductPrice = () => {
    // get code from input
    const code = codeInputRef.current.value
    // set code state
    setCode(code)
    // check if code is valid
    const codeValid = codes.find((codeItem) => codeItem.code === code)
    // if code is valid
    if (codeValid) {
      // calculate new price
      
      // set new price
      setNewPrice(newPrice)
      setCode(codeValid)
    }

  }
  console.log(cart)
  //
  // add hex values with some words. also add discount value. that is an object that contains the promo code and the discount value

  const codes = [
    {
      code: 'RINCONCITOPROMO23',
      discount: 0.1
    },
    {
      code: 'CLUBCODE',
      discount: 0.46
    },
    {
      code: 'CODX25',
      discount: 0.1
    }

  ]




  return (
    <div className='container mx-auto my-4 '>
      {/* CART TITUL */}
      {/* <div className='bg-pink-200'>  
      asdasd
        {
          categories?.data?.map((category,index)=>{
            return <h2 key={index}>{category?.attributes?.nombre}</h2>
          })
        }
      </div> */}

      <div className='p-5 flex items-center gap-2'>

        <h2 className='text-[2rem]'>Tu carrito de compras ({cart.length} artículos únicos)</h2>
      </div>

      <div className='flex justify-center gap-[1rem]  p-2 flex-col lg:flex-row'>
        {/* ITEMS */}
        <div className={`max-w-[100%]  w-full p-2 flex flex-col gap-2 ${cart?.length === 0 ? "justify-center" : ""}`}>
          {/* if no products show a message */}
          {
            cart.length !== 0 ? cart.map((item) => {
              return <CartSummaryItem key={item?.id} item={item} newPrice={item?.precio } />
            }
            ) : <div className='flex justify-center items-center gap-2 '>
              <RiShoppingCart2Line className='text-[3rem]' />
              <h2 className='text-[2rem]'>El carrito está vacío</h2>
            </div>
          }


        </div>
        {/* SUMM */}

        <div className='md:min-w-[500px]   '>
          <div className='flex  flex-col  m-4 p-8 sticky top-[112px] md:top-[152px] border border-black rounded-lg  text-center gap-2'>
            <h2 className='text-[2rem] border-b border-black'>Resumen de carrito</h2>
            {/* Small array products */}
            <div className='flex flex-col bg-gray-100 gap-2 h-[400px] overflow-y-auto px-2 mt-2 border-b border-black rounded'>
              {
                cart.map((item) => {
                  return (
                    <div key={item?.id} className='flex gap-3 justify-start  py-2  '>
                      <div className=''>
                        {/* image */}
                        <img src={item?.attributes?.portada?.data?.attributes?.url} alt={item.attributes.nombre} className='max-w-[80px] aspect-square object-cover rounded-md' />
                      </div>
                      <div className=' w-full flex flex-col p-2'>
                        <h3 className='self-start '>{item?.attributes?.nombre}</h3>
                        <div className=' flex justify-between'>
                          <h3 className=''><span className=''>Cantidad</span>: {item?.amount}</h3>
                          <h3>
                            {/* total */}
                         
                            {formatPrice(item?.amount * item?.attributes?.precio)}
                          </h3>

                        </div>

                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className=' border-b border-black flex items-center self-start w-full '>
              {/* promo code enter */}
              <div className=' p-4 flex flex-col gap-2 my-2  w-full flex-wrap'>
                <h2 className='text-xl self-start'>¿Tienes un código de descuento?</h2>
                <div className='flex gap-2 flex-wrap'>
                  <input ref={codeInputRef} type='text' placeholder='Ingresa tu código' className='border border-black p-2 w-full' />
                  <button onClick={calculateNewSingleProductPrice} className='transition-all duration-300 bg-white items-center hover:bg-gray-200 py-2 px-8 text-black font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0'>
                    Aplicar
                  </button>
                </div>
              </div>
            </div>

            <div className='border-b border-black p-2 flex flex-col gap-1'>
              <div className='flex justify-between items-center'>
                <h3>Artículos</h3>
                <h3>{formatPrice(total)}</h3>
              </div>

              <div className='flex justify-between items-center'>
                <h3>Envío</h3>
                <h3>{formatPrice(0)}</h3>
              </div>
              <div className='flex justify-between items-center'>
                <h3>IVA</h3>
                <h3>Incluido</h3>
              </div>
            </div>
            <div className='flex justify-between mt-4'>
              <h3 className='text-xl'>Total</h3>
              <h3 className=''>{formatPrice(total)}</h3>
            </div>
            <div>
              <button className='transition-all duration-300 bg-[#F80606] hover:bg-[#D40404] py-2 px-8 text-white font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0'>
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* COM */}
      <div className=' p-5 flex items-center gap-4  justify-center sm:justify-start container mx-auto flex-wrap '>
        {/* Seguir comprando button */}
        <div className='w-full md:w-[unset]'>
          <Link to='/' className='transition-all duration-300 bg-white items-center hover:bg-gray-200 py-2 px-8 text-black font-semibold border border-black flex justify-center  rounded-[16px] w-full sm:mx-0'>
            {/* arrow back icon */}
            <RiShoppingBasket2Line className='mr-2' />
            Seguir comprando
          </Link>
        </div>
        {/* Clear cart button */}
        <div className='w-full md:w-[unset]'>
          <button onClick={() => { setCart([]) }} className='transition-all duration-300 bg-[#F80606] hover:bg-[#D40404] py-2 px-8 text-white font-semibold border border-black flex justify-center items-center rounded-[16px] w-full sm:mx-0'>
            <FiTrash2 className='mr-2' />
            Vaciar carrito
          </button>
        </div>
      </div>
      <section className=' py-10'>
        <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Te podría interesar</h2>
        <ProductCarousel products={productsArray} />
      </section>
    </div>
  )
}
