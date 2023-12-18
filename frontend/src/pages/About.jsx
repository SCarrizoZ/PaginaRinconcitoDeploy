import entrada from "../img/about_images/entrada.webp"
import plumilla_guitarra_seccion from "../img/about_images/plumilla_guitarra.webp"
import seccion_guitarras from "../img/about_images/seccion_guitarras.webp"
import seccion_vinilos from "../img/about_images/seccion_vinilos.webp"

import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";

export const About = () => {
  return (
    <>

      <section className="bg-gray-100 py-12 ">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl  mb-6 titulo text-red-500 ">Quiénes Somos</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3">Nuestra Historia</h3>
              <p>
                Rinconcito Musical inició sus actividades comerciales en el año 2010,
                fundada por el señor Juan Molina, con el objetivo de preservar la cultura
                retro para las nuevas y antiguas generaciones. Surgió como respuesta a la pasión
                de Molina por la música y su deseo de proporcionar un espacio donde los amantes de la
                música pudieran encontrar una amplia gama de productos y artículos relacionados.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3">Nuestra Misión</h3>
              <p>
                La misión principal de Rinconcito Musical es ofrecer a sus clientes una experiencia única al proporcionar productos de calidad, fomentando la pasión por la música y promoviendo la cultura retro. Nos esforzamos por ser un referente en el sector musical, brindando un servicio personalizado y siendo un punto de encuentro para los amantes de la música de todas las generaciones.
              </p>
              <p>
                Nuestro propósito es inspirar, entretener y enriquecer las vidas de las personas a través de la música, manteniendo un compromiso constante con la calidad, la autenticidad y el servicio al cliente.
              </p>
            </div>
            {/* Agrega más secciones según sea necesario */}
          </div>
        </div>
      </section>
      <section className='bg-red-200 p-4'>
        <div className="container mx-auto">
          {/* TWO DIVS: IMAGE AND TEXT */}
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
              <img src={entrada} alt='entrada' className="" />
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <h3 className="text-xl font-semibold mb-3">Nuestra Visión</h3>
              <p>
                La visión de Rinconcito Musical es convertirse en el referente principal para los amantes de la música, ofreciendo una experiencia única en la adquisición de productos musicales y en la promoción de la cultura retro. Buscamos expandirnos digitalmente, siendo reconocidos por nuestra amplia gama de productos, servicio al cliente excepcional y compromiso con la preservación y difusión de la música en todas sus formas.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-gray-100 p-4">
        {/* again two divs: image and text, but now in reverse order. That is, add the image to the right and the text to the left */}
        <div className="container mx-auto">

          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 p-4'>
              <h3 className="text-xl font-semibold mb-3">Nuestros Valores</h3>
              <p>
                Enumeramos nuestros valores fundamentales en Rinconcito Musical para mantener la calidad, la autenticidad y el compromiso con nuestros clientes. La pasión por la música, la excelencia en el servicio y el respeto por la cultura retro son los pilares de nuestra empresa. Buscamos fomentar un ambiente inclusivo y apasionado por la música en todas sus formas.
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={plumilla_guitarra_seccion} alt='plumilla_guitarra' />
            </div>
          </div>
        </div>
      </section>
      {/* Again follow the same pattern */}
      <section className="bg-red-200 p-4">
        <div className="container mx-auto">
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
              <img src={seccion_guitarras} alt='seccion_guitarras' />
            </div>
            <div className='w-full md:w-1/2 p-4'>
              <h3 className="text-xl font-semibold mb-3">Nuestros Clientes</h3>
              <p>
                El cliente ideal de Rinconcito Musical es un amante de la música apasionado y versátil. Valora la autenticidad de los productos musicales y busca una amplia gama de instrumentos, discos de vinilo y accesorios para satisfacer sus necesidades musicales específicas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* again pls */}
      <section className="bg-gray-100 p-4">
        <div className="container mx-auto">
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 p-4'>
              <h3 className="text-xl font-semibold mb-3">Nuestros Productos</h3>
              <p>
                En Rinconcito Musical ofrecemos una amplia gama de productos musicales que incluyen instrumentos de alta calidad, vinilos de edición limitada, accesorios únicos y mucho más. Nos especializamos en proporcionar a nuestros clientes una selección cuidadosamente curada de productos auténticos y de colección.
              </p>
              <p>
                Nuestros vinilos destacan por su rareza y calidad de sonido. También contamos con una variedad de instrumentos musicales que van desde guitarras clásicas hasta modernos teclados, atendiendo a músicos de todos los niveles y gustos musicales.
              </p>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={seccion_vinilos} alt='seccion_vinilos' />
            </div>
          </div>
        </div>
      </section>
      {/* the last section could have a founder's quote without image*/}
      <section className="bg-red-200">
        {/* quote. dont add an image  */}
        <div className="container mx-auto">
          <div className=" px-[1rem] pt-[3rem] pb-[5rem] ">

            {/* complete with the quote icons */}
            <div className="flex justify-center items-center  py-[3rem] ">

              <RiDoubleQuotesL className="text-4xl text-red-500" />
              <p className="flex text-center text-gray-500 text-2xl font-semibold">
         
                La música es el lenguaje universal de la humanidad.
              </p>
              <RiDoubleQuotesR className="text-4xl text-red-500" />
            </div>
            <div className="flex justify-end">
              {/* testimonial bottom content */}
              <p className="flex flex-wrap flex-col text-center text-gray-500 text-xl font-semibold justify-end">
                <span className="text-red-500 block text-end">Juan Molina</span>
                <span className="block">Fundador de Rinconcito Musical</span> 
              </p>
            </div>

          </div>

        </div>

      </section>

    </>
  )
}
