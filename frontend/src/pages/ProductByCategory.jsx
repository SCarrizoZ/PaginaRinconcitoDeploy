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
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]); // this will be used to filter the products based on brands
  const [openFilter, setOpenFilter] = useState(true); // this will be used to filter the products based on brands
  const [brands, setBrands] = useState([]);
  const [productList, setProductList] = useState([]);

  
  console.log(products)
  const getUniqueBrands = (brandsList) => {
    return [...new Set(brandsList)];
  }
  // when the page load 

  useEffect(() => {
    // Get subcategories from category nombre variable from useParams. also get brands from all products belongs that category
    console.log(productList)
    const actualCategory = categories?.data?.find((category) => {
      return category.attributes.nombre === nombre;
    });


    
    const subcategories = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
      return subcategory?.attributes.nombre;
    });
    setSubcategories(subcategories);
    const filteredProductsByCategory = products?.data?.filter((product) => {
      // console.log(product?.attributes?.subcategoria?.data?.attributes?.nombre)
      
      return subcategories?.includes(product?.attributes?.subcategoria?.data?.attributes.nombre);
    });
    setProductList(filteredProductsByCategory); 
    const brandsList = getUniqueBrands(filteredProductsByCategory?.map((product) => product?.attributes?.marca?.data?.attributes?.nombre));
    setBrands(brandsList);

    setFilteredProduct(filteredProductsByCategory);

    // console.log(products?.data);
    // console.log(subcategories);
    // console.log(brands);


  }, [categories, nombre, setSubcategories, products?.data]);
  

  // console.log(products?.data)
  // console.log(subcategories)
  // console.log(brands)


  const addCategory = (category) => {
    if(!selectedCategories.includes(category)){
        setSelectedCategories(prev => ([...prev, category]))
        
    }   
    // resetRangeSlider()  
    
  }

  const removeCategory = (category) => {
    if(selectedCategories.includes(category)){
        const removedList = selectedCategories.filter((item) => (item !== category));
        setSelectedCategories(removedList);
    }
    // resetRangeSlider()  
  }
  // BRANDS OP
  const addBrand = (brand) => {
    if(!selectedBrands.includes(brand)){
        setSelectedBrands(prev => ([...prev, brand]))
    }
    // resetRangeSlider()  
    
  }
  const removeBrand = (brand) => {
    if(selectedBrands.includes(brand)){
        const removedList = selectedBrands.filter((item) => (item !== brand));
        setSelectedBrands(removedList);
    } 
    // resetRangeSlider()  
  }
  const applyFilter = () => {
    
    if (selectedCategories.length === 0 && selectedBrands.length === 0 && minPrice === 0) {
        return productList;
    }
    // if(selectedCategories.length ===0 && selectedBrands.length ===0 && minPrice!=0){

    //   resetMinPrice()
    // }
    
    return productList.filter(item =>
        
        {
          return (selectedCategories.length === 0 || selectedCategories.includes(item.attributes?.subcategoria.data?.attributes?.nombre)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(item.attributes?.marca.data?.attributes?.nombre)) &&
        (minPrice === 0 || parseInt(item.attributes?.precio) >= minPrice)}
    );
  };
  
  useEffect(() => {
    // console.log(productList)
    // console.log(selectedBrands);
    const filteredList = applyFilter();
    console.log(filteredList)
    setFilteredProduct(filteredList);
    // console.log(selectedCategories.length === 0 && selectedBrands.length === 0 ? "aqui1" : "aqui2");
}, [selectedCategories, products?.data, selectedBrands, minPrice]);

  useEffect(() => {
    setMinPrice(0);
    // You may also want to reset other relevant state values here
  }, [nombre, setMinPrice]);

  useEffect(() => {
    const actualCategory = categories?.data?.find((category) => {
      return category.attributes.nombre === nombre
    });
    const subcategories = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
      return subcategory?.attributes.nombre
    });
    setSubcategories(subcategories);
  }, [categories, nombre, setSubcategories]);

  // console.log(subcategories)
  const actualCategory = categories?.data?.find((category) => {
    return category?.attributes.nombre === nombre
  });
  console.log(actualCategory)

  // get BRANDS with products list and BRANDS array
  

  

  const subcategoriesIds = actualCategory?.attributes?.subcategorias?.data?.map((subcategory) => {
    return subcategory.id
  });
  // get products filtered by category from useparams. ALso, get the brands of all products filtered previosly. use useEffect


  // Filter products by category
  const filteredProductsByCategory = products?.data?.filter((product) => {
    return subcategoriesIds?.includes(product?.attributes.subcategoria.data.id)
  });
  // const brandsList = getUniqueBrands(filteredProductsByCategory?.map((product) => {
  //   return product?.attributes.marca.data.attributes.nombre
  // }))
  

  // Filter products by price using useMemo to avoid unnecessary recalculations
  const filteredProductsByPrice = useMemo(() => {
    return filteredProductsByCategory?.filter((product) => {
      return parseInt(product.attributes.precio) >= minPrice
    });
  }, [filteredProductsByCategory, minPrice]);
  // console.log(products?.data)
  // console.log(brandsList)
  return (
 
    <div className='flex justify-start '>

      <div className="flex h-screen   w-full">
        {/* FILTROS */}
        <div className=' mt-3 hidden md:block '>
          <div className='container mx-auto px-4 w-[300px]  mt-5 '>
            <div className='border-2 rounded-lg p-4 bg-gray-100 '>

                  <header className="border-b-2 pb-3">
                    <div>
                      <div className="flex justify-between">
                        <div className="font-bold">Filter</div>
                        {/* <button> + </button> */}
                      </div>
                    </div>
                  </header>
                  <div className=''>
                    <div className="cont">
                                 <FilterComponent subset={subcategories} filterName={"Categories"} content={{"name":"categories","addElement":addCategory,"removeElement":removeCategory, "selectedElements":selectedCategories}} />
                                
                                {brands.includes(undefined) ? "":<FilterComponent subset={brands} filterName={"Brands"} content={{"name":"brands","addElement":addBrand,"removeElement":removeBrand, "selectedElements":selectedBrands}}/>} 
                                {/* // <FilterComponent subset={brandsList} filterName={"Brands"} content={{"name":"brands","addElement":addBrand,"removeElement":removeBrand, "selectedElements":selectedBrands}}/> */}
                              
                                
                                <div className="price border-b-2 py-3">
                                  <button className="flex justify-between w-full" onClick={()=>{setOpenFilter(!openFilter)}}>

                                    <div className="filter-name">Precio</div>
                                    <div className="icon"> {openFilter?"-":"+"}</div>
                                  </button>
                                  <div className={`flex justify-center items-center ${openFilter ? "max-h-40 ":" max-h-0"}   transition-all duration-300 overflow-hidden `}>
                                    {/* <input
                                    className='accent-red-500'
                                    value={minPrice}
                                      type='range'
                                      id={minPriceFilterId}
                                      min='0'
                                      max={maxPrice}
                                      ref={rangeInputRef}
                                      onChange={handleChangeMinPrice}
                                      step={100} */}
                                    {/* /> */}
                                    {/* <span>${minPrice}</span> */}
                                  </div>
                                  
                                </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
        {/* PRODUCTOS */}
        <section className="py-16   mt-3 ">
          <div className=" w-full">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none">

              {filteredProduct?.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
