import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { RiShoppingCart2Line } from "react-icons/ri"
import { BiUserCircle } from "react-icons/bi"
import logoImg from '../img/logonuevofinal_edited.png'

import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'
import { FiltersContext } from '../context/FiltersContext'

import { SearchBar } from './SearchBar'


export function Header() {
  const { itemAmount, setItemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { categories } = useContext(FiltersContext)

  const [isActive, setIsActive] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isSelect, setIsSelect] = useState(false)
  const [results, setResults] = useState([])



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
      {/* TOP */}
      <div style={{ background: "#373333" }} className='relative flex h-16 items-center justify-between py-14 px-4 '>

        <div className='flex flex-1 items-center justify-start gap-3  '>
          {/* Logo */}
          <div className='flex  items-center'> {/* Ajustar según tus necesidades */}
            <Link to={'/'}>
              <div className='relative'>
                <img src={logoImg} alt="" className='w-[150px]' />
              </div>
            </Link>
          </div>
          {/* Searchbar */}
          <div className='hidden md:block flex-1 relative'>
            {/* <SearchBar/> */}
            <SearchBar setIsSelect={setIsSelect} isSelect={isSelect} setResults={setResults} products={results} />
            {/* <SearchList setIsSelect={setIsSelect} isSelect={isSelect} results={results}/>   */}
          </div>
        </div>



        {/* Cart / user-login*/}
        <div className='flex gap-x-4 absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"'>
          <div onClick={() => setIsOpen(!isOpen)}
            className=' cursor-pointer flex relative '>
            <RiShoppingCart2Line color="red" className='text-5xl' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 texr-[12px] w-[19px] h-[18px] text-white flex justify-center items-center rounded-full'>{itemAmount}</div>
          </div>
          <div onClick={() => setIsOpen(!isOpen)}
            className=' cursor-pointer flex relative '>
            <BiUserCircle color="red" className='text-5xl' />

          </div>
        </div>


      </div>

      {/* BOTTOM */}
      <div className='nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center justify-center px-5 py-1 '>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="hover:text-gray-500 text-2xl" href="#">Inicio</a>
          </li>
          <li>
            <a className="hover:text-gray-500 text-2xl" href="#">Contacto</a>
          </li>
          <li>
            <a className="hover:text-gray-500 text-2xl" href="#">Acerca de nosotros</a>
          </li>
          <li>
            <a className="hover:text-gray-500 text-2xl" href="#">Nuestras marcas</a>
          </li>
          <li>
            <a className="hover:text-gray-500 text-2xl" href="#" onMouseEnter={handleCategoriesHover}
              onMouseLeave={handleCategoriesLeave}>Categorias</a>

            <div
              className="relative group"
              onMouseEnter={handleCategoriesHover}
              onMouseLeave={handleCategoriesLeave}
            >

              {showCategories && (
                <div className="absolute top-full left-0 bg-white p-2 border border-gray-300 shadow-lg rounded-lg">

                  {categories.data?.map((category) => {
                    const { id, attributes } = category;
                    const { nombre } = attributes;
                    return <Link key={id} to={`/categoria/${nombre}`} className="block text-black">{nombre}</Link>
                  })}

                </div>
              )}
            </div>


          </li>
        </ul>
      </div>
    </header>
  );
}
