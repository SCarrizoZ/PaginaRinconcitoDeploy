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
    <>
      <section className='pt-32 pb-12 lg:py-32 flex items-center'>
        <div className="container mx-auto px-32 ">
          <div className='flex flex-col lg:flex-row  '>
            {/* Imagen */}
            <div className='flex flex-col '>
              <div className=' flex-col border hidden lg:block '>
                <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_fd67b2cd651940b991c9000fc738f6d8~mv2.webp" alt="" />
                <img className='max-w-[100px] lg:max-w-[100px]' src="https://static.wixstatic.com/media/06c2ca_53855f38e20d474fbc0eb271bb54e6e9~mv2.webp" alt="" />
              </div>
            </div>
            <div className='flex flex-1  justify-center items-center  lg:mb-0 border mb-4 rounded-lg'>
              <img className='max-w-[200px] lg:max-w-sm' src={portada.data.attributes.url} alt={nombre} />
            </div>
            {/* Texto */}
            <div className='flex-1 text-center lg:text-left p-4'>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px] '>{nombre}</h1>
              <div className='text-xl text-red-500 font-medium'>{`${formatPrice(precio)}`}</div>
              <p className='mb-8'>{descripcion}</p>
              <div className='flex justify-center items-center lg:justify-end'>
                <button className="bg-red-500 py-4 px-8 text-white text-b flex mb-20 rounded-[100px]" onClick={() => { addToCart({ ...product, precio }, product.id); }}>Añadir al carrito de compras</button>
                
              </div>
            </div>
          </div>
        </div>
      
      </section>
      <div className='flex justify-center mb-20'>
        <div className=''>
          <div className='text-center justify-center'>
            <h2 className='text-[32px] font-bold'>Productos similares</h2>
            <div className='flex gap-20 flex-wrap justify-center'>

              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_1ee9feff836547dab0fc4749b3168d74~mv2.webp" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Eléctrica Ibanez Hollowbody</p>
                    <p className='text-[16px] font-medium mb-2'>$679.900</p>
                  </div>
                </div>
              </div>

              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_209816e1b9ed4d08a8aab60631c09706~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06c2ca_209816e1b9ed4d08a8aab60631c09706~mv2.jpg" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Eléctrica Greg Bennett</p>
                    <p className='text-[16px] font-medium mb-2'>$699.900</p>
                  </div>
                </div>
              </div>
              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_20f53c2a4ca243a3ace3a741a9604456~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06c2ca_20f53c2a4ca243a3ace3a741a9604456~mv2.jpg" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Lasalle JZ-2 Wine Red</p>
                    <p className='text-[16px] font-medium mb-2'>$699.900</p>
                  </div>
                </div>
              </div>
              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_c2319b78ec30456b879cca0db84751b0~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/06c2ca_c2319b78ec30456b879cca0db84751b0~mv2.jpg" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'> Ibanez RG320 EXZ</p>
                    <p className='text-[16px] font-medium mb-2'>$719.900</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div  className='text-center justify-center mt-4'>
            <h2 className='text-[32px] font-bold'>Productos relacionados</h2>
            <div>
            <div className='flex gap-20 flex-wrap justify-center'>
            <div className=' flex-col border  p-4'>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_6a00146bad6d45478eede2adac21d7ca~mv2.webp" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Acústica Alhambra 3C</p>
                    <p className='text-[16px] font-medium mb-2'>$699.900</p>
                  </div>
                </div>
              </div>

              <div className=' flex-col border p-4 '>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_e2adbe768d2c48a3b8687c39f89e75f9~mv2.webp" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Acústica Alhambra 1C</p>
                    <p className='text-[16px] font-medium mb-2'>$499.900</p>
                  </div>
                </div>
              </div>

              <div className=' flex-col border  p-4'>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_3bbf8a40ad4e4852b435016fa5c9b61d~mv2.webp" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Acústica Alhambra Z</p>
                    <p className='text-[16px] font-medium mb-2'>$399.900</p>
                  </div>
                </div>
              </div>

              <div className=' flex-col border  p-4'>
                <img className='max-w-[200px] lg:max-w-[200px]' src="https://static.wixstatic.com/media/06c2ca_e7931e6ae773402a8010d4ef5ce1ecf0~mv2.webp" alt="" />
                <div className='flex flex-wrap justify-center'>
                  <div className='flex flex-col'>
                    <p className='text-[16px] font-medium mb-2'>Acústica Alhambra college</p>
                    <p className='text-[16px] font-medium mb-2'>$349.900</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
    
  );
};
