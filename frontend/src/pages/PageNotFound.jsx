
import { Link } from "react-router-dom"
export const PageNotFound = () => {
  return (
    <div>
      <Link to="/">
        <h1  style={{fontFamily:"Germania One"}} className="text-[10rem] text-red-500 "> PÁGINA NO ENCONTRADA 404</h1>

      </Link>

    </div>
  )
}
