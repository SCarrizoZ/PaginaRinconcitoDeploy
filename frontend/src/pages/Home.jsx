import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { Hero } from '../components/Hero';
import marcas from '../img/marcas.png';

export function Home() {
  // Obtén los productos del contexto
  const { products } = useContext(ProductContext);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const productsArray = Array.isArray(products.data) ? products?.data : [];

  return (
    <div className="">
      <Hero />
      {/* DISEÑO DE PRODUCTOS */}
      <section className="" style={{  }}>
        <div className="container mx-auto py-20">
          <h2 className='titulo mb-6 text-center' style={{ fontSize: 39, color: "#F80606" }}>Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">
            {productsArray.slice(0, 5).map(product => (
              <Product key={product.id} product={product} />
            )).slice(0, 5)}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#000000" }}>
        <h2 className='titulo text-center pt-6' style={{ fontSize: 39, color: "#F80606" }}>Nuestras Marcas</h2>
        <img src={marcas} alt="marcas" />
      </section>
    </div>
  );
}
