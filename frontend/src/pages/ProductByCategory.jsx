import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { FiltersContext } from '../context/FiltersContext';
export const ProductByCategory = () => {
  const { nombre } = useParams();
  const { products } = useContext(ProductContext);
  const { categories } = useContext(FiltersContext);

  const actualCategory = categories?.data?.find((category) => {
    return category.attributes.nombre === nombre
  })

  const subcategoriesIds = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
    return subcategory.id
  })

  // Filtra solo los datos de productos (la propiedad "data" en la respuesta)
  const filteredProducts = products?.data?.filter((product) => {
    return subcategoriesIds?.includes(product.attributes.subcategoria.data.id)
  });

  return (
    <div className="">
      {/* DISEÑO DE PRODUCTOS */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">
            {filteredProducts?.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
