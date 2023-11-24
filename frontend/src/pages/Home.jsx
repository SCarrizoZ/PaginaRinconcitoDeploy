import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { Hero } from '../components/Hero';
import marcas from '../img/marcas.png';

export function Home() {
  // Obtén los productos del contexto
  const { products } = useContext(ProductContext);

  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const productsArray = Array.isArray(products.data) ? products.data : [];

  return (
    <div className="">
      <Hero />
      <h2 className='titulo mt-3 text-center' style={{ fontSize: 39, color: "#F80606" }}>Productos Destacados</h2>
      {/* DISEÑO DE PRODUCTOS */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">
            {productsArray.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <h2 className='titulo mt-3 text-center' style={{ fontSize: 39, color: "#F80606" }}>Nuestras Marcas</h2>
      <img src={marcas} alt="marcas" />
    </div>
  );
}
