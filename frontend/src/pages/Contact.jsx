import { Skeleton } from '@mui/material'
import { Hero } from '../components/Hero'
import { useEffect, useState } from 'react'
import { RiPhoneLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
// import { RiInstagramLine, RiFacebookCircleLine, RiWhatsappLine } from "react-icons/ri";
export const Contact = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  const mapStyle = {
    width: '731px',
    height: '430px',
    border: '0',
    // frameborder: '0',
    // scrolling: 'no',
    // marginheight: '0',
    // marginwidth: '0',
    id: 'gmap_canvas',
    // src: 'https://maps.google.com/maps?width=731&amp;height=430&amp;hl=en&amp;q=Almte.%20J.%20Latorre,%202116%20Calama+(Rinconcito%20Musical%20Calama)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
  }
  return (
    <div className='container mx-auto flex flex-col gap-5'>
      {/* HERO */}
      <Hero title='Contacto' blurred={true} />

      {/* FORM */}
      <div className='bg-red-400'>
        <div className='flex justify-center bg-green-200'>

          <div className='w-full  p-4 bg-[#F36060] flex flex-col gap-10 py-5'>
            <div className=' text-white text-2xl font-bold '>Envíanos un mensaje</div>
            {/* <div className='text-center text-[#9F9F9F] text-sm font-semibold'>Te responderemos a la brevedad</div> */}
            {/* Change this form for whatsapp icon and other data to comunicate with the company */}
            <div className=' text-white text-sm bg-orange-400 p-2 '>
              {/* ICON WITH DATA */}
              <div className='flex flex-wrap justify-between sm:justify-around  gap-2'>
                <div className='flex gap-2 items-center'>
                  <RiWhatsappLine className='text-4xl  p-1' />

                  <p> <a href="https://wa.me/569978525843" className='hover:underline'>+569 978525843</a></p>
                </div>
                <div className='flex gap-2 items-center'>
                  <RiMailLine className='text-4xl  p-1' />
                  <p>josederoble@hotmail.com
                  </p>

                </div>
              </div>
                    
              {/* <p>Correo: josederoble@hotmail.com</p>
              <p>Número de teléfono: +569 978525843</p> */}


            </div>
            {/* {
              isLoading ?
                // esqueleto de formulario
                <div className='flex flex-col gap-2 p-2'>
                  <Skeleton variant="rectangular" className='w-full' height={50} />
                  <Skeleton variant="rectangular" className='w-full' height={50} />
                  <Skeleton variant="rectangular" className='w-full' height={200} />
                  <Skeleton variant="rectangular" className='w-full' height={50} />
                </div>
                :
                // formulario
                <form className='flex flex-col gap-2 p-2'>
                  <input type="text" placeholder='Nombre' className='border border-[#F80606] rounded-md p-2' />
                  <input type="email" placeholder='Email' className='border border-[#F80606] rounded-md p-2' />
                  <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje' className='border border-[#F80606] rounded-md p-2'></textarea>
                  <button className='bg-[#F80606] text-white rounded-md p-2'>Enviar</button>
                </form>
            } */}

          </div>

        </div>
      </div>

      {/*  */}
      {/* Nuestras sucursales */}
      <div className='bg-red-300'>

      </div>
      {/* MAP */}
      <div className=' p-2  '>
        {/* skeleton */}
        <div className='text-center text-[#F80606] text-2xl font-bold'>
          <h2>Visítanos</h2>
        </div>
        <div className='flex justify-center flex-wrap bg-purple-300 p-2 gap-2'>
          {/* PRIMER MAPA */}
          <div className='flex  flex-col bg-green-200  w-full md:w-[49%] p-2'>
            <div className='order-1'>

              {
                isLoading ?
                  <Skeleton variant="rectangular" className='w-full' height={430} />
                  :
                  <iframe
                    width="731"
                    height="430"
                    // frameborder="0"
                    scrolling="no"
                    // marginheight="0"
                    // marginwidth="0"
                    id="gmap_canvas"
                    className="w-full border border-black rounded-md"
                    src="https://maps.google.com/maps?width=731&amp;height=430&amp;hl=en&amp;q=Almte.%20J.%20Latorre,%202116%20Calama+(Rinconcito%20Musical%20Calama)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  </iframe>
              }
            </div>
            {/* Dirección y horario - CAZA MATRIZ */}
            <div className='flex flex-col gap-2 p-2 h-[150px]'>
              <div className='text-center text-[#F80606] text-xl font-semibold'>
                <h3>Almirante Latorre 2116 - Casa Matriz</h3>
              </div>
              <div className='text-center text-[#9F9F9F] text-sm font-semibold'>
                <p>Horario de atención</p>
                <p>Lunes a viernes: 10:00 a 20:00</p>
                <p>Sábado: 10:00 a 14:00</p>
              </div>
            </div>
            
          </div>
          {/* SEGUNDO MAPA */}
          <div className='flex flex-col bg-blue-200 w-full md:w-[49%] p-2'>
            <div className='order-1 '>
              {
                isLoading ?
                  <Skeleton variant="rectangular" className='w-full' height={430} />
                  :
                  <iframe
                    width="731"
                    height="430"
                    // frameborder="0"
                    scrolling="no"
                    // marginheight="0"
                    // marginwidth="0"
                    id="gmap_canvas"
                    className="w-full border border-black rounded-md"
                    src="https://maps.google.com/maps?width=523&amp;height=403&amp;hl=en&amp;q=Sotomayor%201996%20%20%22La%20violeta%22%20Calama+(Galer%C3%ADa%20%22La%20violeta%22)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                  </iframe>
                // <Skeleton variant="rectangular" width={731} height={430} />
              }
              {/* direccion y horario */}

            </div>

            {/* direccion y horarios */}
            <div className='flex flex-col gap-2 p-2 h-[150px]'>
              <div className='text-center text-[#F80606] text-xl font-semibold'>
                <h3>Sotomayor 1996 - Galería "La violeta"</h3>
              </div>
              <div className='text-center text-[#9F9F9F] text-sm font-semibold'>
                <p>Horario de atención</p>
                <p>Lunes a viernes: 10:00 a 20:00</p>
                <p>Sábado: 10:00 a 14:00</p>
              </div>
            </div>
          </div>
        </div>


        {/* <iframe 
        width="731" 
        height="430" 
        // frameborder="0" 
        scrolling="no" 
        // marginheight="0" 
        // marginwidth="0" 
        id="gmap_canvas" 
        className='w-full'
        src="https://maps.google.com/maps?width=731&amp;height=430&amp;hl=en&amp;q=Almte.%20J.%20Latorre,%202116%20Calama+(Rinconcito%20Musical%20Calama)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe> */}


      </div>

    </div>
  )
}
