import { useEffect } from 'react'
import { useState } from 'react'
import { GridView } from '../components/GridView'
import { useParams , useLocation} from 'react-router-dom'
import { apiUrl } from '../../config'
import { useFetch } from '../hooks/useFetch'
import { FaSearch } from 'react-icons/fa'
export const SearchResults = () => {

  const location = useLocation()
  const { queryParam } = useParams()
  const [input, setInput] = useState('')
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get('q')
  console.log(queryParam)
  console.log(queryParams)
  console.log(searchQuery)
  const handleChange = (value) => {
    console.log(value)
    setInput(value)
  }
  const url = `${apiUrl}/productos?filters[nombre][$containsi]=${searchQuery}&populate[portada][fields][0]=url&populate[imagenes_secundarias][fields][0]=url&populate[subcategoria][fields][0]=nombre&populate[subcategoria][populate]=categoria&populate[subcategoria][fields][1]=categoria&populate[marca][fields][0]=nombre&pagination[start]=0&pagination[limit]=20`

  const {data, loading, error} = useFetch(`${url}`)
  console.log(data)
  const handleKeyDown = (e) => {

      // else if  there is text or not and the user presses enter 
      if (e.key === "Enter") {
        // i wanto to make a query . use ?q= to make a query
        e.preventDefault()
        window.location.href = `/resultados?q=${encodeURIComponent(input)}`;
        // window.location.href = `/search/${input}`
      }
      
    
  }
  return (
    <div className='container  mx-auto '>
      <div className='px-2'>

        <h1 className='titulo text-red-500 text-[3rem]'>Resultados de búsqueda</h1>
      </div>
      <div className='px-2'>

        <p>Resultados para : "{searchQuery}" <br />{data?.data.length} productos encontrados</p>
      </div>
      <div className='flex '>

        <div className='w-full   relative rounded-lg items-center  text-gray-600 p-2 flex md:hidden'>
          <input className='bg-white h-10 px-5 pr-10 w-full rounded-lg text-sm focus:outline-none transition-all'
            type='text'
            placeholder='Buscar Productos'
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              handleChange(e.target.value)

            }}
            />
          {
            // input === "" ?
            <>
            <div className='absolute right-0  flex  h-full'>

              <FaSearch className=' self-center mr-5 cursor-pointer' /> 
            </div>
            </>
            //   <RiCloseFill className='absolute right-0 top-0 mt-3 mr-4 cursor-pointer' onClick={() => { resetInput() }} />
          }
        </div>
      </div>
      {/* searchbar -> mobile */}
      {/* filters and products */}
      {/* gridview if products arrive. gridview skeleton if products dont arrive */}
      {
        loading ? 
        <>
          {/* <p>Loading...</p> */}
          <GridView products={data?.data} loading={loading} />
        </>
        :
        <>
          {
            data?.data?.length > 0 ?
            <GridView products={data?.data} />
            :
            <div className=' flex h-[500px] my-2 justify-center items-center mx-2 text-center'>

              <p className='font-bold text-2xl'>No hay resultados para la búsqueda solicitada.</p>
            </div>
          }
        </>
      }
      {/* <GridView products={data?.data} /> */}
      {/* pagination */}
    </div>
  )
}
