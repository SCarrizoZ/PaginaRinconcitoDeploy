import { RiInstagramLine, RiFacebookCircleLine, RiWhatsappLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import logoImg from '../img/logonuevofinal_edited.png'
export function Footer() {
  const titles = ['Tienda', 'Ayuda', 'Acerca de']
  // create an object with the links for each title. Each link must be an url
  const links = [
    // Tienda
    {
      "title": "Tienda", "elements": [{ "title": "Inicio", "url": "/" },
      { "title": "Categorías", "url": "/categories" },
      { "title": "Carrito", "url": "/cart" },
      { "title": "Productos", "url": "/products" }]
    }

    ,

    // Ayuda
    {
      "title": "Ayuda", "elements": [
        { "title": "Contacto", "url": "/contact" },
        { "title": "Quienes somos", "url": "/about" },
        { "title": "Envíos", "url": "/shipping" },
        { "title": "Devoluciones", "url": "/returns" }]
    }

    // Acerca de
    ,
    {
      "title": "Acerca de", "elements": [
        { "title": "Quienes somos", "url": "https://www.instagram.com/rinconcito.musical/" },
        { "title": "Facebook", "url": "https://www.facebook.com/PlanetaR.calama" },
        { "title": "Instagram", "url": "https://www.instagram.com/rinconcito.musical/" },
        { "title": "Twitter", "url": "https://twitter.com/" },
        { "title": "Whatsapp", "url": "https://wa.me/56978525843" }]
    }
  ]

  return (
    <footer className='bg-[#373333] py-12   sticky top-[100%] px-2'>
      <div className="container mx-auto  py-11 px-[0.5625rem] flex flex-col ">
        {/* TOP */}
        <div className=" border-b border-[#F36060] flex flex-wrap-reverse  w-full pb-3 ">

          <div className='w-full lg:w-[20%] flex flex-col gap-4'>

            <div className='flex justify-center items-center p-2 gap-3  '>
              <div className='max-w-full w-[150px] '>
                <img src={logoImg} alt="" />
              </div>
              <span className='font-bold text-white text-xl '>
                Rinconcito Musical
              </span>
            </div>
            <div className=" flex justify-center text-[#9F9F9F]">Juan José Latorre 2116 - 2114.  </div>
            <div className="">
              {/* Facebook -> https://www.facebook.com/PlanetaR.calama , Instagram ->  https://www.instagram.com/rinconcito.musical/ ICONS */}
              {/* <div className='flex justify-center items-center gap-3'>
                <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
                  <a href="https://www.facebook.com/PlanetaR.calama" target="_blank" rel="noopener noreferrer">
                    <RiFacebookCircleLine className='text-white text-xl' />
                  </a>
                </div>
                <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
                  <a href="https://www.instagram.com/rinconcito.musical/" target="_blank" rel="noopener noreferrer">
                    <RiInstagramLine className='text-white text-xl' />
                  </a>
                </div>

                <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
                  <a href="https://wa.me/569978525843" target="_blank" rel="noopener noreferrer">
                    <RiWhatsappLine className='text-white text-xl' />
                  </a>
                </div>

              </div> */}
            </div>
          </div>

          {/* <div className=' flex flex-wrap gap-1 md:gap-0  p-2 w-full lg:w-[80%] justify-center'>
              <div className='md:max-w-[32.333333%] w-full border-b md:border-b-0 flex flex-col gap-[1.625rem]'>
                <h3 className='text-white font-bold '>Enlaces</h3>
                <ul className='flex flex-col gap-[1.625rem] text-[#9F9F9F] mb-2'>
                  <li >Inicio</li>
                  <li >Categorías</li>
                  <li>Productos</li>
                  <li>Carrito</li>
                </ul>
              </div >
              <div className='md:max-w-[32.333333%] w-full border-b md:border-b-0 flex flex-col gap-[1.625rem]'>
                <h3 className='font-bold text-white ' >Ayuda</h3>
                <ul className='flex flex-col gap-[1.625rem] text-[#9F9F9F] mb-2'>
                  <li>Acerca de</li>
                  <li>Contacto</li>
                  <li>Envíos</li>
                  <li>Devoluciones</li>
                </ul>
              </div>
              <div className='md:max-w-[32.333333%] w-full border-b md:border-b-0 flex flex-col gap-[1.625rem]'   >
                <h3 className='font-bold text-white '>Contacto</h3>
                <ul className='flex flex-col gap-[1.625rem] text-[#9F9F9F] mb-2'>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Whatsapp</li>
                </ul>
              </div>
            </div> */}
          <div className=' flex flex-wrap gap-1 md:gap-0 gap-y-4  p-2 w-full lg:w-[80%] justify-center'>

            {
              links.map((link, index) => {
                return (
                  <FooterList key={index} title={link.title} list={link.elements} />
                )
              })
            }
          </div>
        </div>
        {/* BOTTOM */}
        <div className='text-white pt-5 flex md:justify-start justify-center items-center gap-4'>
          <span>
            2023 Rinconcito Musical. Todos los derechos reservados.

          </span>
          <div className='flex justify-center items-center gap-3 ml-auto'>
            <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
              <a href="https://www.facebook.com/PlanetaR.calama" target="_blank" rel="noopener noreferrer">
                <RiFacebookCircleLine className='text-white text-xl' />
              </a>
            </div>
            <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
              <a href="https://www.instagram.com/rinconcito.musical/" target="_blank" rel="noopener noreferrer">
                <RiInstagramLine className='text-white text-xl' />
              </a>
            </div>

            <div className='w-8 h-8 bg-[#F36060] rounded-full flex justify-center items-center'>
              <a href="https://wa.me/569978525843" target="_blank" rel="noopener noreferrer">
                <RiWhatsappLine className='text-white text-xl' />
              </a>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

function FooterList({ title, list }) {
  return (
    <div className='md:max-w-[32.333333%] w-full border-b md:border-b-0 flex flex-col gap-[1.625rem]'>
      <h3 className='text-white font-bold '>{title}</h3>
      <ul className='flex flex-col gap-[1.625rem] text-[#9F9F9F] mb-2'>
        {
          list.map((link, index) => {
            return (
              // use Link component from react-router-dom to link to other pages that belongs to app
              // use a tag to link to external pages
              link.url.startsWith('http') ? (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">

                  {link.title}
                </a>
              ) : (
                <Link key={index} to={link.url}>
                  {link.title}
                </Link>
              )
            );
          })
        }
      </ul>
    </div>
  )
}