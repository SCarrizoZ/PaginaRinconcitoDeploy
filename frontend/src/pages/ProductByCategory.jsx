import { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { FiltersContext } from '../context/FiltersContext';
import { Filters } from '../components/Filters';

export const ProductByCategory = () => {
  const { nombre } = useParams();
  const { products } = useContext(ProductContext);
  const { categories, minPrice, setMinPrice, setSubcategories } = useContext(FiltersContext);

  useEffect(() => {
    setMinPrice(0);
    // You may also want to reset other relevant state values here
  }, [nombre, setMinPrice]);

  const actualCategory = categories?.data?.find((category) => {
    return category.attributes.nombre === nombre
  });

  const subcategoriesIds = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
    return subcategory.id
  });

  // Filter products by category
  const filteredProductsByCategory = products?.data?.filter((product) => {
    return subcategoriesIds?.includes(product.attributes.subcategoria.data.id)
  });

  // Filter products by price using useMemo to avoid unnecessary recalculations
  const filteredProductsByPrice = useMemo(() => {
    return filteredProductsByCategory?.filter((product) => {
      return parseInt(product.attributes.precio) >= minPrice
    });
  }, [filteredProductsByCategory, minPrice]);

  return (
    <div className="flex">
      <div className='mx-5 mt-3'>
        <div className=''>
          <Filters filteredProducts={filteredProductsByCategory} />
        </div>
      </div>
      {/* DISEÑO DE PRODUCTOS */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">
            {filteredProductsByPrice?.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
