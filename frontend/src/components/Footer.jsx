import { RiInstagramLine,RiFacebookCircleLine, RiWhatsappLine} from "react-icons/ri";

import logoImg from '../img/logonuevofinal_edited.png'
export function Footer() {
  return (
    <footer className='bg-[#373333] py-12   sticky top-[100%]'>
      <div className="container mx-auto  py-11 px-[0.5625rem] flex flex-col ">
          {/* TOP */}
          <div className=" border-b border-[#F36060] flex flex-wrap-reverse  w-full pb-3 ">

            <div className='w-full lg:w-[20%] '>

              <div className='flex justify-center items-center p-2 gap-3 '>
                <div className='max-w-full w-[150px]'>
                  <img src={logoImg} alt="" />
                </div>
                <span className='font-bold text-white text-xl'>Rinconcito Musical</span>
              </div>
              <div>
                {/* Facebook -> https://www.facebook.com/PlanetaR.calama , Instagram ->  https://www.instagram.com/rinconcito.musical/ ICONS */}
                <div className='flex justify-center items-center gap-3'>
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
                    <a href="https://wa.me/56993400280" target="_blank" rel="noopener noreferrer">
                      <RiWhatsappLine className='text-white text-xl' />
                    </a>
                  </div>

                </div>
                </div>
            </div>

            <div className=' flex flex-wrap gap-1 md:gap-0  p-2 w-full lg:w-[80%] justify-center'>
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
            </div>
          </div>
          {/* BOTTOM */}
          <div className='text-white pt-5 flex md:justify-start justify-center'>
          2023 Rinconcito Musical. Todos los derechos reservados.
          </div>
      </div>

    </footer>
  )
}
