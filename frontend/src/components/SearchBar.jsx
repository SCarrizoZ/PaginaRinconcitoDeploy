import { useContext, useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { RiCloseFill } from 'react-icons/ri'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils'
import { scrollToTop } from '../utils'
export const SearchBar = ({ setResults, setIsSelect, isSelect }) => {
  const [input, setInput] = useState('')
  const [searchData, setSearchData] = useState([])
  const { products } = useContext(ProductContext)
  const [selectedItem, setSelectedItem] = useState(-1)

  let menuRef = useRef();
  const handleChange = (value) => {
    setInput(value)
  }
  const handleClose = () => {
    setInput("")
    setSearchData([])
    setSelectedItem(-1)
    scrollToTop()
  }
  const handleKeyDown = (e) => {
    // console.log(e.key, selectedItem)
    if (selectedItem < searchData?.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem(prev => prev - 1)
      } else if (e.key === "ArrowDown" && selectedItem < searchData?.length - 1) {
        setSelectedItem(prev => prev + 1)
      } else if (e.key === "Enter" && selectedItem > -1) {
        // If user enters, redirect to the /product/:id

        window.location.href = `/product/${searchData[selectedItem].id}`


        // window.open(searchData[selectedItem].show.url)


      }
    } else {
      setSelectedItem(-1)
    }
  }

  useEffect(() => {
    if (input !== "") {
      let handler = e => {

        if (!menuRef.current.contains(e.target)) {
          handleClose();
        }

      }
      document.addEventListener("mousedown", handler);

    }


  })
  // }
  useEffect(() => {
    if (input !== "") {
      // FETCH API
      // fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      // .then(res=>{
      //     return res.json()
      // })
      // .then(data=>{
      //     console.log(data)
      //     return setSearchData(data)
      // })
      // FILTER LOCAL DATA

      const newFilterData = products?.data?.filter(product => {
        const productName = product?.attributes?.nombre.toLowerCase()
        return productName.includes(input.toLowerCase())

      })

      setSearchData(newFilterData)
    } else {
      setSearchData([])
    }
  }, [input]);

  const resetInput = () => {
    setInput('')

    setIsSelect(false)
  }

  return (
    <div className="search-section" ref={menuRef}>

      <div className='w-[200px] md:w-[400px]  relative rounded-lg flex items-center  text-gray-600'>
        {/* <FaSearch className='search-icon' onClick={()=>{resetInput()}}/> */}
        <input className='bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none transition-all'
          type='text'
          placeholder='Buscar Productos'
          value={input}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            handleChange(e.target.value)

          }} />
        {
          input===""?
          <FaSearch className='absolute right-0 top-0 mt-3 mr-4 cursor-pointer' onClick={()=>{resetInput()}}/>:
          <RiCloseFill className='absolute right-0 top-0 mt-3 mr-4 cursor-pointer' onClick={()=>{resetInput()}}/>
        }

        {/* <FaSearch className='absolute right-0 top-0 mt-3 mr-4' onClick={()=>{resetInput()}}/> */}
      </div>
      <div className={`  shadow-lg ${searchData?.length === 0 ? "h-0 hidden" : "h-[500px] block"}  transition-all result bg-white w-[400px]  mt-2 absolute overflow-y-auto p-2 rounded-lg duration-1000 z-10`}>
        {
          searchData?.map((product, index) => {

            return (
              <Link key={index} to={`/product/${product.id} `} onClick={handleClose}>
              <div  className={`  flex m-x-5 gap-x-4 hover:bg-red-100 items-center ${selectedItem === index ? "bg-red-100" : " bg-white"}`}>
                <div className='p-4'>
                  {/* <Link key={index} to={`/product/${product.id} `} onClick={handleClose}> */}
                    <img src={product?.attributes?.portada?.data?.attributes?.url} alt="" className='w-[50px] h-auto' />
                  {/* </Link> */}

                </div>
                <div className='w-[400px]'>
                  {/* <Link key={index} to={`/product/${product.id} `} onClick={handleClose}> */}
                    {product?.attributes?.nombre}
                  {/* </Link> */}
                  <p className='text-gray-500'>
                    {formatPrice(product?.attributes?.precio)}
                  </p>
                </div>

              </div>
              </Link>
            )
          })
        }
        {/* <a href='#' target='_blank' className='search_suggestion_line'>
                This is suggestion line.
            </a> */}
      </div>
    </div>
  )
}