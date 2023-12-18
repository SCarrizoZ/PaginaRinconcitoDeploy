import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'
import { Link } from 'react-router-dom'
import { Skeleton } from '@mui/material'

export const Category = () => {
  const { categories } = useContext(FiltersContext)
  const categoriesArray = categories?.data || []
  console.log(categories)
  return (
    <section className=''>
      <div className='container mx-auto flex flex-wrap justify-center'>
        {
          categoriesArray?.length === 0 || categoriesArray === undefined ? (
            Array(categoriesArray?.length || 7).fill(0).map((item, index) => (
              <div className='bg-white px-4 py-2 m-4 rounded-md lg:w-[28%] md:w-[45%] w-[100%]'>
                <Skeleton height={60} />
                <Skeleton width="100%" />
                <Skeleton width="100%" />
                <Skeleton width="100%" />
              </div>
            ))
          ) : (
            <>

              {
                categoriesArray?.map((category, index) => (
                  <div className='bg-white p-4 m-4 rounded-md lg:w-[28%] md:w-[45%] w-[100%]'>
                    <div className=''>
                      <Link to={`/categoria/${category?.attributes?.nombre}`} key={index}>
                        <h2 className='text-red-500 font-bold'>{category?.attributes?.nombre}</h2>
                      </Link>

                    </div>
                    <div>
                      {
                        category?.attributes?.subcategorias?.data?.map((subcategory, index) => (
                          <div className='pl-1'>
                            <Link to={`/categoria/${category?.attributes?.nombre}/${subcategory?.attributes?.nombre}`} key={index}>
                              <h2 className='text-black text-[1rem]'>{subcategory?.attributes?.nombre}</h2>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </>

          )
        }
      </div>
    </section>
  )
}
