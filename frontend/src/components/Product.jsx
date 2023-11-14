import { useContext } from 'react';
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils'
export function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  // Deconstruye las propiedades del producto de la respuesta de the API
  const { id, attributes } = product;
  const { nombre, descripcion, precio, portada, subcategoria } = attributes;
  console.log(product)
  // Función para formatear el precio con puntos cada 3 dígitos y agregar CLP


  return (
    <div className='rounded-lg border border-[#e4e4e4]'>
      {/** Container de la portada TOP */}
      <div className='border-b h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center'>
          {/* Imagenes */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={portada.data.attributes.url} alt={nombre} className='max-h-[160px] group-hover:scale-110 duration-300' />
          </div>
          {/** Botones */}
          <div className='absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col gap-y-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 '>
            <button onClick={() => {
              addToCart(({ ...product, precio }), id);
            }}>
              <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl'>
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      {/** Categoria, Título, y precio */}
      <div className='p-4'>
        <div className='text-sm text-gray-500 capitalize'>{subcategoria.data.attributes.nombre}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{nombre}</h2>
        </Link>
        <div className='font-semibold'>{formatPrice(precio)}</div>
      </div>
    </div>
  );
}
