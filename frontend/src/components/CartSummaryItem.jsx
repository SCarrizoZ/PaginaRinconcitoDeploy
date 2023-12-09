import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdRemove, IoMdAdd, IoMdClose } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
import { CartContext } from '../context/CartContext';
import { formatPrice } from '../utils'
// Función para formatear el precio con puntos cada 3 dígitos y agregar CLP


export function CartSummaryItem({ item, newPrice }) {
  // Deconstruye las propiedades del elemento del carrito de acuerdo a la nueva estructura de datos
  console.log(newPrice)
  const { id, attributes } = item;
  const { nombre, precio, portada } = attributes;
  console.log(newPrice)
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  // Formatea el precio con puntos y agrega CLP
  const formattedPrice = formatPrice(precio);

  // Calcula el total por objeto como un número entero
  const totalPorObjeto = precio * item.amount;
  // truncate description if too long
  // const description = item.description.length > 100 ? item.description.substring(0, 100) + '...' : item.description;


  return (
    <div className='flex gap-x-4 py-2 lg:px-4 border border-[1px] border-opacity-[50%] rounded-lg border-black  w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4 p-2'>
        {/* Imagen */}
        <Link className='self-start' to={`/product/${id}`}>
          <img src={portada?.data?.attributes?.url} alt={nombre} className='max-w-[120px]' />
        </Link>

        <div className='w-full flex flex-col self-start gap-2'>
          <div className='flex justify-between mb-2'>
            {/** Propiedades del objeto */}
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover-underline'>
              {nombre}
            </Link>
            <div className='text-xl cursor-pointer' onClick={() => { removeFromCart(id) }}>
              {/* Icono de cierre */}
              <RiCloseCircleLine className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          {/*Product description */}
          
          {/** Cantidad */}
          <div className=' flex gap-x-2 h-[36px] text-sm justify-between'>
            {/** Incrementar-Decrementar valor */}
            <div className=' flex  max-w-[100px]   items-center h-full border text-primary font-medium '>
              <div onClick={() => { decreaseQuantity(id) }} className=' flex-1 h-full flex justify-center items-center cursor-pointer border-r'><IoMdRemove /></div>
              <div className='h-full flex justify-center items-center px-2'>{item.amount}</div>
              <div onClick={() => increaseQuantity(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer border-l'><IoMdAdd /></div>
            </div>
            <div className='flex flex-col justify-around items-center  text-[1rem] font-extrabold gap-1'>
              {
                formattedPrice
              }
              
              {/* {
                newPrice!== 0 || newPrice ===NaN ? 
                (
                <>
                  <div className='text-[#F80606] '> {formatPrice(precio)}</div> 
                  <div className='line-through'> {formattedPrice}</div>
                
                </>
                )
                :
                 <>
                 {formattedPrice}
                 </>
              } */}
            
            </div>
            {/* <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`${formatPrice(totalPorObjeto)}`}</div> */}
          </div>
          <div>
            <p className='text-sm text-gray-500'>{`${(item?.attributes?.descripcion).substring(0, 150)}`}...</p>
          </div>
          {/* categoriy and subcategory */}
          <div className='flex gap-x-2 text-sm text-gray-500'>
            <p className='bg-[#16F705] bg-opacity-[50%] border-opacity-[10%]  flex items-center justify-center font-medium rounded-md order-1'>
              <span className='p-1'>

                {item?.attributes?.subcategoria?.data?.attributes?.categoria?.data?.attributes?.nombre}
              </span>

             
            </p>
            <p className=' bg-[#05F79C] bg-opacity-[50%] border-opacity-[10%] flex items-center justify-center font-medium rounded-md'>
              <span className='p-1'>
                {item?.attributes?.subcategoria?.data?.attributes?.nombre}

              </span>
            </p>
          </div>
          <span>
            {/* Product brand */}
            {
              // If the product has a brand, show it
              item?.attributes?.marca?.data?.attributes?.nombre && 
              <p className='text-sm text-gray-500'>{item?.attributes?.marca?.data?.attributes?.nombre}</p>

            }
           
          </span>
        </div>
      </div>
    </div>
  );
}