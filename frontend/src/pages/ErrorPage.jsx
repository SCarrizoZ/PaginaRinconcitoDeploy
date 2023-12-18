import { useState } from "react"
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import error404 from "../img/error_page.webp"
import { Link } from "react-router-dom"
import { RiHome2Fill, RiHome2Line } from "react-icons/ri"
export const ErrorPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>

      <div className="flex justify-center container bg-green-300 mx-auto py-20 my-10">
        <div className="bg-red-300 lg:flex   justify-between p-2">
          <div className="bg-yellow-200 flex justify-center items-center flex-col p-2">
            <Link to="/">
            <img src={error404} alt="error 404" className="max-w-md aspect-[1/1] object-cover" />
            </Link>
          </div>
          <div className="flex flex-col justify-between">

            <div className="bg-blue-300 p-4">

              <h1 className="text-[2rem] sm:text-[3rem] text-red-500 font-bold lg:text-center">
                No hemos podido encontrar la página solicitada😪
              </h1>
            </div>
            <div className="bg-purple-400 w-full  ">

              <Link to="/">
                {/* house icon */}

                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-600 transition-all duration-500 flex items-center gap-2">
                  <RiHome2Line
                    className="text-white text-1xl mx-auto"
                  />
                  Volver al inicio
                </button>
              </Link>
            </div>
          </div>

        </div>
        {/* <Link to="/">
          <h1  style={{fontFamily:"Germania One"}} className="text-[3rem] sm:text-[5rem] text-red-500 ">
            ERROR  404: PÁGINA <br/> NO ENCONTRADA <br /> 😪
          </h1>

        </Link> */}

      </div>

    </>
  )
}
