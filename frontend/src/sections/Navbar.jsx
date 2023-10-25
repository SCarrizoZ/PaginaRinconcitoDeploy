import React,{useState,useEffect} from 'react'
import {RiAlignJustify, RiShoppingCart2Line,RiCloseFill} from 'react-icons/ri'
export const Navbar = () => {

  let [isOpen, setisOpen] = useState(false)
  
  // Desk
  return (
    
    
      <>
        <nav>
        <div>
          <div className=" bg-gray-700">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div className="flex items-center bg-center uppercase">
                <img className="mr-3 h-5 w-5" src="/static_files/svgs/house-chimney-solid.svg" alt="home" />
                <strong className="text-lg">RM</strong>
              </div>

              <div className="flex flex-wrap items-center md:gap-4">
                <div className="my-3 mx-3 flex items-center rounded-lg border border-red-400">
                  <button type="button" className="rounded-l-lg bg-red-400 p-3 hover:bg-red-500">
                    <img className="h-4 w-5" src="/static_files/svgs/magnifying-glass-white.svg" alt="search" />
                  </button>
                  <input type="text" className="w-60 px-3 py-2 outline-none md:w-80" />
                  <button className="rounded-r-lg bg-red-400 px-4 py-2 text-white hover:bg-red-500">Search</button>
                </div>
                <div className=''>
                  <a href="#" id='menu-button' className='m-2 h-6 w-6 md:hidden' onClick={()=>{setisOpen(!isOpen)}}>
                    {isOpen ? <RiCloseFill size={32}/> : <RiAlignJustify size={32}/>}
                    
                  </a>
                </div>
              </div>
              <div className=" sm:hidden lg:block items-center" id="menu">
                <div className="gap-10 lg:flex">
                  {/* Links */}
                    <ul class="gap-10 mr-5 uppercase lg:flex">
                        <li class="p-2 py-3 font-bold "><a href="#">Offers</a></li>
                        <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a
                                href="#">Products</a>
                        </li>
                        <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a href="#">catalog</a>
                        </li>
                        <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a
                                href="#">services</a>
                        </li>
                        <li class="p-2 py-3 font-medium text-slate-600 hover:text-black"><a href="#">about</a>
                        </li>
                    </ul>
                  <div className="lg:flex">
                    <div className="mr-6 flex w-screen items-center p-2 py-3 lg:w-auto">
                      <img className="mr-2 h-5 w-5" src="/static_files/svgs/cart-shopping-solid.svg" alt="cart" />
                      <p>asdsad</p>
                      <a href="#" className="font-semibold underline "><RiShoppingCart2Line size={32}/></a>
                    </div>
                    <div className="flex items-center p-2 py-3">
                      <img className="mr-2 h-5 w-5" src="/static_files/svgs/circle-user-solid.svg" alt="account" />
                      <a href="#" className="font-semibold underline">account</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <script src='../otros/menu.js'></script>
    </>
    
    
  )
}

