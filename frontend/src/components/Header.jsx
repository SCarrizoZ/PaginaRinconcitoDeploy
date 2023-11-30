import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { RiAlignJustify } from "react-icons/ri"
import { RiShoppingCart2Line } from "react-icons/ri"

import Heart from './Icons/Heart';
import logoImg from '../img/logonuevofinal_edited.png'

import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'
import { FiltersContext } from '../context/FiltersContext'

import { SearchBar } from './SearchBar'

import TransitionsModal from './LoginModal';


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
    <header style={{ background: "#373333" }} className={` ${isActive ? ' shadow-lg bg-white ' : ' bg-none '}  w-full  z-10 transition-all sticky top-0  `}>
      {/* TOP AREA */}
      <div className=' relative flex h-16 items-center justify-around py-14 px-4 hidde'>
        <div className='flex gap-x-4 absolute inset-y-0 left-0 block md:hidden px-4  items-center pr-2 sm:static sm:inset-auto sm:mr-6 sm:pr-0'>
          <RiAlignJustify className='text-5xl ' color='red' />
        </div>
        <div className='container flex flex-1 items-center  gap-3  '>
          {/* Logo */}

          <div className='flex  items-center mx-auto md:mx-0 justify-center mt-7'> {/* Ajustar según tus necesidades */}
            <Link to={'/'}>
              <div className='relative'>
                <img src={logoImg} alt="" className='w-[120px]' />
              </div>
              <div>
                <h1 className='text-xl font-bold text-red-600 text-center titulo'>Rinconcito<br />Musical</h1>
              </div>
            </Link>
          </div>
          {/* Searchbar */}
          <div className='hidden md:block mx-auto items-center'>
            {/* <SearchBar/> */}
            <SearchBar setIsSelect={setIsSelect} isSelect={isSelect} setResults={setResults} products={results} />
            {/* <SearchList setIsSelect={setIsSelect} isSelect={isSelect} results={results}/>   */}
          </div>
        </div>



        {/* Cart / user-login*/}
        <div className='flex gap-x-4 absolute inset-y-0 right-0    items-center pr-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0"'>
          <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer flex relative sm:pl'>
            <RiShoppingCart2Line color="red" className='text-5xl' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 texr-[12px] w-[19px] h-[18px] text-white flex justify-center items-center rounded-full'>{itemAmount}</div>
          </div>

          <div>
            <Heart />
          </div>

          <div>
            <TransitionsModal />
          </div>

        </div>


      </div>
      {/* BOTTOM AREA */}
      <div style={{ background: "#373333" }} className='nav-links duration-500 hidden  md:block md:min-h-fit min-h-0 left-0 top-[-100%] md:w-auto  w-full flex items-center justify-center px-5 py-1.5 mt-8'>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 justify-evenly">
          <li>
            <a className="text-white hover:text-red-500 text-2xl" href="#">Catálogo</a>
          </li>
          <li>
            <a className="text-white hover:text-red-500 text-2xl" href="#" onMouseEnter={handleCategoriesHover}
              onMouseLeave={handleCategoriesLeave}>Categorias</a>

            <div
              className="relative group"
              onMouseEnter={handleCategoriesHover}
              onMouseLeave={handleCategoriesLeave}
            >

              {showCategories && (
                <div className="absolute top-full left-0 bg-white p-2 border border-gray-300 shadow-lg rounded-lg">

                  {categories?.data?.map((category) => {
                    const { id, attributes } = category;
                    const { nombre } = attributes;
                    return <Link key={id} to={`/Categoria/${nombre}`} className="block text-black">{nombre}</Link>
                  })}

                </div>
              )}
            </div>
          </li>
          <li>
            <a className="text-white hover:text-red-500 text-2xl" href="#">Acerca de nosotros</a>
          </li>
          <li>
            <a className="text-white hover:text-red-500 text-2xl" href="#">Contacto</a>
          </li>

        </ul>
      </div>
    </header >
  );
}
