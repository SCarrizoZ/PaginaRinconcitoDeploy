import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi";
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import logoImg from '../img/logonuevofinal_edited.png';
import { CategoryContext } from '../context/CategoryContext';

export function Header() {
  const { categories } = useContext(CategoryContext)
  const [isActive, setIsActive] = useState(false);
  const { itemAmount, setItemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const handleCategoriesHover = () => {
    setShowCategories(true);
  };

  const handleCategoriesLeave = () => {
    setShowCategories(false);
  };

  return (
    <header style={{ background: "#373333" }} className={` ${isActive ? 'py-4 shadow-md' : 'py-6'}  w-full  z-10 transition-all `}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
          <div>
            <img src={logoImg} alt="" className='w-[100px]' />
          </div>
        </Link>

        <div className="flex gap-x-4">
          <div
            className="relative group"
            onMouseEnter={handleCategoriesHover}
            onMouseLeave={handleCategoriesLeave}
          >
            <span className="text-white cursor-pointer">Categorías</span>
            {showCategories && (
              <div className="absolute top-full left-0 bg-white p-2 border border-gray-300 shadow-lg rounded-lg">
                {/* Agrega aquí tus enlaces de categorías */}
                {categories.data.map((category) => {
                  const { id, attributes } = category;
                  const { nombre } = attributes;
                  return <Link key={id} to={`/Categoria/${nombre}`} className="block text-black">{nombre}</Link>
                })}

              </div>
            )}
          </div>
          <Link to="/contacto" className="text-white">Contacto</Link>
          <Link to="/acerca-de" className="text-white">Acerca de nosotros</Link>
          <Link to="/nuestras-marcas" className="text-white">Nuestras marcas</Link>
        </div>

        <div className='flex gap-x-4'>
          <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <RiShoppingCart2Line color="red" className='text-5xl' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[19px] h-[18px] text-white flex justify-center items-center rounded-full'>{itemAmount}</div>
          </div>
          {/* <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
            <BiUserCircle color="red" className='text-5xl' />
          </div>
          */}
        </div>
      </div>
    </header>
  );
}
