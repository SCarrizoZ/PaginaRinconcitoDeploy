import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { Product } from '../components/Product';
import { FiltersContext } from '../context/FiltersContext';
import { Filters } from '../components/Filters';
import {FilterComponent} from '../components/FilterList'

export const ProductByCategory = () => {
  const { nombre } = useParams();
  const { products } = useContext(ProductContext);
  const { categories, minPrice, setMinPrice, setSubcategories, subcategories } = useContext(FiltersContext);

  const [filteredProduct, setFilteredProduct] = useState([ products?.data]);
  // delete this
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]); // this will be used to filter the products based on brands
  const [openFilter, setOpenFilter] = useState(true); // this will be used to filter the products based on brands

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
      return subcategoriesIds?.includes(product?.attributes.subcategoria.data.id)
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
    console.log("cambio:",nombre)
    const getElements =  () => {
      getProductsByCategory(nombre);
      getSubcategories(nombre);
    } 
    getElements();
    // getBrands(productList?.data);
  }, [categories, nombre, setSubcategories, products?.data]);
  useEffect(() => {
    getBrands(productList);
  }, [productList]);
    // call getProductsByCategory function
    

  // Filter products by price using useMemo to avoid unnecessary recalculations
  // const filteredProductsByPrice = useMemo(() => {
  //   return filteredProductsByCategory?.filter((product) => {
  //     return parseInt(product.attributes.precio) >= minPrice
  //   });
  // }, [filteredProductsByCategory, minPrice]);

  
  // console.log(filteredProduct)

  // when the page load 

  // useEffect(() => {
  //   // Get subcategories from category nombre variable from useParams. also get brands from all products belongs that category
    

  //   // setFilteredProduct(filteredProductsByCategory);

  //   // console.log(products?.data);
  //   // console.log(subcategories);
  //   // console.log(brands);
  //   console.log("asd")


  // }, [categories, nombre, setSubcategories, products?.data]);
  

  // console.log(products?.data)
  // console.log(subcategories)
  // console.log(brands)


  // useEffect(() => {
  //   // console.log(productList)
  //   // console.log(selectedBrands);
  //   const filteredList = applyFilter();
  //   console.log(filteredList)
  //   setFilteredProduct(filteredList);
  //   // console.log(selectedCategories.length === 0 && selectedBrands.length === 0 ? "aqui1" : "aqui2");
  // }, [selectedCategories, products?.data, selectedBrands, minPrice]);

  // useEffect(() => {
  //   setMinPrice(0);
  //   // You may also want to reset other relevant state values here
  // }, [nombre, setMinPrice]);

  // useEffect(() => {
  //   const actualCategory = categories?.data?.find((category) => {
  //     return category.attributes.nombre === nombre
  //   });
  //   const subcategories = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
  //     return subcategory?.attributes.nombre
  //   });
  //   setSubcategories(subcategories);
  // }, [categories, nombre, setSubcategories]);

  // console.log(subcategories)
  

  // get BRANDS with products list and BRANDS array
  

  

  
  console.log(actualCategory?.attributes.nombre)
  // console.log(subcategories2)
  // console.log(brandsList)
  // console.log(filteredProductsByCategory)


  return (
 
    <div className='flex justify-start '>
      <div className="flex h-screen w-full">
        <Filters brandList={brandList} subcategoriesList={subcategoriesList} setProductList={setProductList} nombre={nombre} productList={productList} />
      {/* <Filters /> */}
      {/* <div className='border-2 rounded-lg p-4 bg-gray-100 '>

                  <header className="border-b-2 pb-3">
                    <div>
                      <div className="flex justify-between">
                        <div className="font-bold">Filter</div>
          
                      </div>
                    </div>
                  </header>
                  <div className=''>
                    <div className="cont">
                                 <FilterComponent subset={subcategoriesList} filterName={"Categories"} content={{"name":"categories","addElement":addCategory,"removeElement":removeCategory, "selectedElements":selectedCategories}} />
                                
                                {brandList.includes(undefined) ? "":<FilterComponent subset={brandList} filterName={"Brands"} content={{"name":"brands","addElement":addBrand,"removeElement":removeBrand, "selectedElements":selectedBrands}}/>} 
                                 <FilterComponent subset={brandsList} filterName={"Brands"} content={{"name":"brands","addElement":addBrand,"removeElement":removeBrand, "selectedElements":selectedBrands}}/>
                              
                                
                                <div className="price border-b-2 py-3">
                                  <button className="flex justify-between w-full" onClick={()=>{setOpenFilter(!openFilter)}}>

                                    <div className="filter-name">Precio</div>
                                    <div className="icon"> {openFilter?"-":"+"}</div>
                                  </button>
                                </div>

                    </div>
                  </div>
                </div>  */}
              
      </div>
    </div>
  );
};
