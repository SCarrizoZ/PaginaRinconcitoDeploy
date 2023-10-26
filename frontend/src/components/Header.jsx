import React, {useContext, useEffect, useState} from 'react'
import { SidebarContext } from '../context/SidebarContext'
// Icons
import {RiShoppingCart2Line} from "react-icons/ri"
import {BiUserCircle} from "react-icons/bi"
// Contexts
import { CartContext } from '../context/CartContext'
// Link
import { Link } from 'react-router-dom';
// Logo
import logoImg from '../img/logonuevofinal_edited.png'
export  function Header() {
  // Header state
  const [isActive,setIsActive] = useState(false)
  const {itemAmount, setItemAmount} = useContext(CartContext);
  const {isOpen, setIsOpen }  = useContext(SidebarContext) 
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ?setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <header style={{background:"#373333"}} className={` ${isActive ? 'py-4 shadow-md':'py-6'}  w-full  z-10 transition-all `}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* Logo */}
        <Link to={'/'}>
          <div>
            <img src={logoImg} alt="" className='w-[80px]'/>
          </div>
        </Link>
        {/* Cart / user*/}
        <div className='flex gap-x-4'>
          <div onClick={()=>setIsOpen(!isOpen)}
          className=' cursor-pointer flex relative '>
            <RiShoppingCart2Line color="red" className='text-5xl'/>
            <div className='bg-red-500 absolute -right-2 -bottom-2 texr-[12px] w-[19px] h-[18px] text-white flex justify-center items-center rounded-full'>{itemAmount}</div>
          </div>
          <div onClick={()=>setIsOpen(!isOpen)}
          className=' cursor-pointer flex relative '>
            <BiUserCircle color="red" className='text-5xl'/>
            
          </div>
        </div>
       
        
      </div>
    </header>
    
  )
}
