
import { Link } from "react-router-dom"
export const PageNotFound = () => {
  return (
    <div className="flex justify-center">
      <Link to="/">
        <h1  style={{fontFamily:"Germania One"}} className="text-[10rem] text-red-500 "> PÁGINA <br/> NO ENCONTRADA <br /> 404</h1>

      </Link>

    </div>
  )
}
