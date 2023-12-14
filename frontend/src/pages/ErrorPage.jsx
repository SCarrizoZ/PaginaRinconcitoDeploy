import { useState } from "react"
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai"

import { Link } from "react-router-dom"
export const ErrorPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>

      <div className="flex justify-center container bg-green-300 mx-auto py-20 my-10">
        <Link to="/">
          <h1  style={{fontFamily:"Germania One"}} className="text-[3rem] sm:text-[5rem] text-red-500 ">
            ERROR  404: PÁGINA <br/> NO ENCONTRADA <br /> 😪
          </h1>

        </Link>

      </div>
      
    </>
  )
}
