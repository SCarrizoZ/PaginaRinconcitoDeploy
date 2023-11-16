import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { Hero } from '../components/Hero';

export function Home() {
  // Obtén los productos del contexto
  const { products } = useContext(ProductContext);

  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const productsArray = Array.isArray(products.data) ? products.data : [];

  return (
    <div className="">
      <Hero />
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
    </div>
  );
}
