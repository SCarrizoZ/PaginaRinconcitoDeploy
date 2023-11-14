import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import { formatPrice } from '../utils'
export const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  console.log(products)

  const productsArray = Array.isArray(products.data) ? products.data : [];

  // Obtén el producto por su id
  const product = productsArray.find((item) => {
    return item.id === parseInt(id);
  });

  console.log(product)

  if (!product) {
    return <section className='h-screen flex justify-center'></section>;
  }

  const { attributes } = product;
  const { nombre, precio, descripcion, portada } = attributes;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col lg:flex-row items-center '>
          {/* Imagen */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 border m-4 rounded-lg'>
            <img className='max-w-[200px] lg:max-w-sm' src={portada.data.attributes.url} alt={nombre} />
          </div>
          {/* Texto */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{nombre}</h1>
            <div className='text-xl text-red-500 font-medium'>{`${formatPrice(precio)}`}</div>
            <p className='mb-8'>{descripcion}</p>
            <button className="bg-red-500 py-4 px-8 text-white flex mb-20" onClick={() => { addToCart({ ...product, precio }, product.id); }}>Añadir al carrito de compras</button>
          </div>
        </div>
      </div>
    </section>
  );
};
