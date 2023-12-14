import { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';


import { RiAlignJustify } from "react-icons/ri"
import { RiShoppingCart2Line } from "react-icons/ri"

import Heart from './Icons/Heart';
import logoImg from '../img/logonuevofinal_edited.png'

import guitarrasCategoria from '../img/categorias_header_images/guitarras_categoria.webp' 
import vinilosCategoria from '../img/categorias_header_images/vinilos_cd_categoria.webp'
import percusionCategoria from '../img/categorias_header_images/percusion_categoria.webp'
import escolaresCategoria from '../img/categorias_header_images/escolares_categoria.webp'
import tecladosCategoria from '../img/categorias_header_images/teclados_pianos_categoria.webp'
import tocadiscosCategoria from '../img/categorias_header_images/tocadiscos_tornamesas_categoria.webp'

import { SidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext'
import { FiltersContext } from '../context/FiltersContext'

import { SearchBar } from './SearchBar'

import TransitionsModal from './LoginModal';
import { scrollToTop } from '../utils';

import { capitalize, changeSpace } from '../utils';
export function Header() {
  const { itemAmount, setItemAmount } = useContext(CartContext);
  const {
    isOpen,
    setIsOpen,
    isBurgerOpen,
    setIsBurgerOpen
  } = useContext(SidebarContext);
  const { categories } = useContext(FiltersContext)

  const [isActive, setIsActive] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isSelect, setIsSelect] = useState(false)
  const [results, setResults] = useState([])
  const [selectedImage, setSelectedImage] = useState([guitarrasCategoria, "Guitarras"])
  const megaMenuRef = useRef(null);
  const imageRef = useRef(null);
  const [isCategoryActive, setIsCategoryActive] = useState(false);

  console.log("categories", categories)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  const handleMegaMenu = (e) => {
    setIsCategoryActive(!isCategoryActive)
  };
  const handleImage = (nombre) => {
    // setSelectedImage(vinilosCategoria)
    console.log(imageRef.current)
    // i want to change visibilisity of imageRef.current to hidden and then change the image and then change the visibility to visible

    imageRef.current.style.opacity = '0'
    switch (nombre) {
      case 'Guitarras':
        setSelectedImage([guitarrasCategoria, "Guitarras"])
        break;
      case "Vinilos y CD's":
        setSelectedImage([vinilosCategoria, nombre])
        break;
      case 'Percusión':
        setSelectedImage([percusionCategoria, nombre])
        break;
      case 'Escolares':
        setSelectedImage([escolaresCategoria, nombre])
        break;
      case 'Teclados y Pianos':
        setSelectedImage([tecladosCategoria, nombre])
        break;
      case 'Tocadiscos y Tornamesas':
        setSelectedImage([tocadiscosCategoria, nombre])
        break;
      default:
        setSelectedImage([guitarrasCategoria, "Guitarras"])
        break;
    }
    setTimeout(() => {
      imageRef.current.style.transition = 'opacity 0.5s linear';
      // imageRef.current.style.visibility = 'visible'
      imageRef.current.style.opacity = '1'
    }, 600);
    // imageRef.current.style.visibility = 'visible'
    // imageRef.current.style.transition = 'visibility 0s, opacity 0.5s linear';
    // imageRef.current.classList.remove('invisible')
    // imageRef.current.classList.add('visible')
 
  }
  const handleCategoriesHover = () => {
    setShowCategories(true);
  };

  const handleCategoriesLeave = () => {
    setShowCategories(false);
  };
  const headerHeight = useRef(null);
  // Obten la altura del header cada vez que cambie.


  useEffect(() => {
    if(isCategoryActive){
      setSelectedImage([guitarrasCategoria, "Guitarras"])
    }
  }, [isCategoryActive])
  return (
    <header onResize={() => { console.log("resized") }} style={{ background: "#373333" }} className={` ${isActive ? ' shadow-lg bg-white ' : ' bg-none '}  w-full  z-[1001] transition-all sticky top-0 min-w-[360px] flex flex-col md:px-20  mb-4`}>
      {/* TOP AREA RED */}
      <div className=' relative flex items-center justify-around md:px-10    '>
        <div onClick={() => setIsBurgerOpen(!isBurgerOpen)}
          className=' cursor-pointer flex gap-x-4  absolute inset-y-0 left-0  md:hidden pl-8  items-center  sm:static sm:inset-auto sm:mr-6 sm:pr-0'>
          <RiAlignJustify className='text-[2rem] ' color='red' />
        </div>

        <div className='container       gap-3 p-1'>

          <div className='flex items-center  gap-3 '>
            <div className='flex   mx-auto md:mx-0 justify-center '> {/* Ajustar según tus necesidades */}
              <Link onClick={scrollToTop} to={'/'}>
                <div className=' flex justify-center items-center max-w-[120px] '>
                  <img src={logoImg} alt="" className='w-full min-w-[120px] my-auto' />
                </div>
                {/* <div className={' hidden md:block'} >
                  <h1 className='text-xl font-bold text-red-600 text-center titulo'>Rinconcito<br />Musical</h1>
                </div> */}
              </Link>
            </div>
            {/* Searchbar */}
            <div className='hidden md:block mx-auto items-center'>
              {/* <SearchBar/> */}
              <SearchBar setIsSelect={setIsSelect} isSelect={isSelect} setResults={setResults} products={results} />
              {/* <SearchList setIsSelect={setIsSelect} isSelect={isSelect} results={results}/>   */}
            </div>
          </div>
        </div>

        <div className=' flex  absolute inset-y-0 right-0 md:gap-4 pr-8 md:pr-0   items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0"'>
          <div onClick={() => setIsOpen(!isOpen)} className=' cursor-pointer flex relative  '>
            <RiShoppingCart2Line color="red" className='text-[2rem]' />
            <div className='bg-red-500 absolute -right-2 -bottom-2 texr-[12px] w-[19px] h-[18px] text-white flex justify-center items-center rounded-full'>
              {itemAmount}
            </div>
          </div>

          <div className='hidden md:block'>
            <Heart borderColor="red" bgColor={"red"} />
          </div>

          <div className={'relative hidden md:block '} >
            <TransitionsModal />
          </div>

        </div>
      </div>
      {/* BOTTOM AREA */}
      <div style={{ background: "#373333" }} className='nav-links duration-500 hidden  md:block md:min-h-fit min-h-0 left-0 top-[-100%] md:w-auto  w-full  items-center justify-center px-5 py-1.5 '>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 justify-evenly text-[1rem]">

          <li className='category-link  hover:outline-b-2 hover:outline-b-red-500   '>
            <span onClick={handleMegaMenu} className={`  text-white hover:text-red-500 transition-all duration-500 ease-in-out  hover:outline-b-2 hover:outline-b-red-500 cursor-pointer flex items-center gap-1 ${isCategoryActive ? 'text-red-500' : '' }`}
            // onMouseEnter={handleCategoriesHover}
            //   onMouseLeave={handleCategoriesLeave}
            >
              {/* i want an arrow icon that rotate 180 degrees when click on this span */}

              <p className={`${isCategoryActive ? 'text-red-500' : '' } flex items-center gap-1`}>
                
              Categorías
              < svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 flex  items-end justify-end transform transition-all duration-500 ease-in-out ${isCategoryActive ? 'rotate-0' : 'rotate-180'}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 101.414 1.414L10 5.414l6.293 6.293a1 1 0 101.414-1.414l-7-7A1 1 0 0010 3z" clipRule="evenodd" className=''/>
              </svg>
              </p>
              

              
              </span>
            <div className={`fixed  w-full h-full right-0 bg-[rgba(0,0,0,.8)] ${isCategoryActive ? "":"invisible"} transition-all duration-300`}  >
              
            </div>
            <div
            ref={megaMenuRef}
              className={` absolute  group w-full  left-0   bg-[#373333] mt-[0.01rem]    transition-all duration-500 ease-in-out overflow-hidden ${isCategoryActive ? 'h-96' : 'h-[0px] '}`}

            >
              

              {true && (
                <div className="     h-full  container mx-auto flex p-2">
                  
                  <div className='p-2   gap-2  justify-around grid grid-cols-3 w-full'>

                    {categories?.data?.map((category,index) => {
                      const { id, attributes } = category;
                      const { nombre } = attributes;
                      return (
                          
                            <div onMouseEnter={()=>{handleImage(nombre)}} key={index} className=' p-2'>

                              <Link onClick={(e)=>{
                              handleMegaMenu(e)
                              scrollToTop()}} key={id} to={`/categoría/${nombre}`} className=" text-black  ">
                              <span onClick={()=>{handleMegaMenu}}   className=' font-semibold hover:underline text-red-500 text-[1rem] '>
                                {nombre}
                                
                              </span>

                              </Link>
                              <div className=''>
                                <ul className=' p-1 flex flex-col gap-2'>
                                  {/* random elements */}
                                  {/* <li>elemento 1</li>
                                  <li>elemento 2</li>
                                  <li>elemento 3</li>
                                  <li>elemento 4</li>
                                  <li>elemento 5</li> */}
                                  {
                                    attributes?.subcategorias?.data?.map((subcategoria) => {
                                      const  nombre  = subcategoria?.attributes?.nombre;
                                      return (
                                        <>
                                        
                                          <li onClick={handleMegaMenu} className='text-black text-sm hover:underline' key={subcategoria?.id}>
                                            <Link onClick={scrollToTop} to={`/categoría/${attributes?.nombre}`} className="block text-white ">
                                            {(nombre)}
                                            </Link>
                                          </li>
                                          
                                        </>
                                      )
                                    }).slice(0,5)
                                  }
                                </ul>
                              </div>
                            </div>
                          
                          
                        )
                    }).slice(0, 6)}
                  </div>
                  <div className='relative flex flex-col items-center max-w-[205px] p-2'>
        
                    <Link onClick={()=>{scrollToTop();handleMegaMenu()}} to={`/categoría/${selectedImage[1]}`} className="block text-black bg-red-300">
                      <img ref={imageRef} src={selectedImage[0]} alt="" className='h-[100%] aspect-[9/16] object-cover transition-all duration-1000' />
                    </Link>
                    {/* <div className='  text-red-400'>
        
                      <button onClick={handleMegaMenu} className='bg-red-400 hover:bg-red-500 text-white font-bold rounded-full'>
                        Ver más...
                      </button>
                    </div> */}

                  </div>

                </div>
              )}
            </div>

          </li>
          <li className='hover:outline-blue-200 hover:outline-2'>
            <a className="text-white hover:text-red-500 hover:outline-b-2 hover:outline-b-red-500  " href="/catalog">Catálogo</a>
          </li>
          <li>
            <Link to={"/acerca"} className="text-white  hover:text-red-500 hover:outline-b-2 hover:outline-b-red-500" href="#">Acerca de nosotros</Link>
          </li>
          <li className='hover:text-red-500 '>
            <Link to="/contacto" className="text-white hover:text-red-500  " >
              Contacto
            </Link>
            {/* <Link to={"/acerca"} className="text-white hover:text-red-500 " >Contacto/> */}
          </li>

        </ul>
      </div>
    </header >
  );
}
