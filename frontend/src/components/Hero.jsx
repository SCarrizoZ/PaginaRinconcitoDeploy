import rinconcito_hero from '../img/rinconcito_hero.png';
import rinconcito_hero2 from '../img/rinconcito_hero2.webp';
import scar from '../img/scar.webp';

export function Hero({blurred}) {
  console.log(blurred)
  return (
    <div className="relative container mx-auto ">
        {/* IMAGE */}
        <div>

            <img  alt="Imagen 1" className=" hero-rinconcito w-full blur-md aspect-video object-cover sm:aspect-[5/1]  sm:object-cover object-bottom   "
            srcSet={`
            ${rinconcito_hero2}  300w,
            
            ${rinconcito_hero2}  768w,
            ${scar}  1280w,



            `} />

        </div>
        {/* CONTACT TEXT */}
        <div 
        className='  absolute bottom-0 right-0 w-full h-full bg-transparent text-white flex justify-center items-center text-center'>
          <span className='titulo text-[#F80606]  text-[3rem] md:text-[4rem]  rounded p-1 md:p-4 font-semibold'>
            Contáctanos
            {/* Contando con más de 20 años de experiencia en el rubro, Rinconcito Musical se ha posicionado como una de las mejores tiendas de instrumentos musicales en la ciudad de Calama. */}
          </span>
        </div>
    </div>
  );
}

