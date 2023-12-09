import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { FiltersContext } from '../context/FiltersContext';
import { Filters } from '../components/FilterSection';
import { FilterComponent } from '../components/FilterList'

export const ProductByCategory = () => {
  const { nombre } = useParams();
  const { products } = useContext(ProductContext);
  const { categories, minPrice, setMinPrice, setSubcategories, subcategories } = useContext(FiltersContext);



  const [brandList, setBrandList] = useState([]);
  const [subcategoriesList, setSubcategoriesList] = useState([]);
  const [productList, setProductList] = useState([]);




  // get products filtered by category from useparams. ALso, get the brands of all products filtered previosly. use useEffect


  // // Filter products by category
  // const filteredProductsByCategory = products?.data?.filter((product) => {
  //   return subcategoriesIds?.includes(product?.attributes.subcategoria.data.id)
  // });
  // const brandsList = getUniqueBrands(filteredProductsByCategory?.map((product) => {
  //   return product?.attributes.marca.data.attributes.nombre
  // }))
  const getUniqueBrands = (brandsList) => {
    return [...new Set(brandsList)];
  }

  const actualCategory = categories?.data?.find((category) => {
    return category?.attributes.nombre === nombre
  });
  // console.log(actualCategory)

  const subcategoriesIds = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
    return subcategory.id
  });
  // get products by category function
  const getProductsByCategory = (category) => {
    const filteredProductsByCategory = products?.data?.filter((product) => {
      return subcategoriesIds?.includes(product?.attributes?.subcategoria?.data?.id)
    });
    setProductList(filteredProductsByCategory);
  }




  const getSubcategories = (category) => {
    const actualCategory = categories?.data?.find((category) => {
      return category?.attributes.nombre === nombre
    });
    const subcategories = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
      return subcategory?.attributes.nombre
    });
    setSubcategoriesList(subcategories);
  }
  // 
  // get brands based on filteredproductsbycategory
  const getBrands = (filteredProductsByCategory) => {
    console.log(filteredProductsByCategory);

    const brandsList = getUniqueBrands(
      filteredProductsByCategory?.map((product) => {
        const brandName = product?.attributes?.marca?.data?.attributes?.nombre;
        return brandName !== undefined ? brandName : "Unknown Brand";
      })
    );

    setBrandList(brandsList);
  };


  useEffect(() => {
    console.log("cambio:", nombre)
    const getElements = () => {
      getProductsByCategory(nombre);
      getSubcategories(nombre);
    }
    getElements();
    // getBrands(productList?.data);
  }, [categories, nombre, setSubcategories, products?.data]);
  useEffect(() => {
    getBrands(productList);
  }, [productList]);





  console.log(actualCategory?.attributes.nombre)



  return (

    <div className='flex justify-start  h-full   '>
      <div className="flex  w-full justify-center">
        <Filters brandList={brandList} subcategoriesList={subcategoriesList} setProductList={setProductList} nombre={nombre} productList={productList} />

      </div>
    </div>
  );
};
