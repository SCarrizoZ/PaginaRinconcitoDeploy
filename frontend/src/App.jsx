
import { useEffect } from "react"
// react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import { Home } from './pages/Home';
import { ProductDetails } from "./pages/ProductDetails"
import { ProductByCategory } from "./pages/ProductByCategory";
import {Cart} from "./pages/Cart"
import { PageNotFound } from "./pages/PageNotFound";
// Components
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Footer } from "./components/Footer"
import { BurgerSidebar } from "./components/Sidebar/BurgerSidebar";
import {FilterSidebar} from "./components/Sidebar/FilterSidebar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from "react-router-dom";

const THEME = createTheme({
  palette: {
    primary: {
      main: '#F80606',
      background: '#373333',
      pure_white: '#ffffff'
    },
    variants: {
      light: '#F67F7F',
      mid: '#E8EEFF',
      dark: '#E70606'
    },
  },
  typography: {
    "fontFamily": `"Inter", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  }
});



export default function App() {
  const {nombre, id} = useParams();
  // console.log(comp)
  // add code for reset scroll to 0,0
  console.log(id)

  return (
    <div className="bg-gray-200 min-h-[100vh]">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Header />
          {/* <div className="mb-[20%] "> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categoria/:nombre" element={<ProductByCategory />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/acerca" element={<h1>4044</h1>} />
            <Route path="/contacto" element={<h1>40644</h1>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          {/* </div> */}
          <BurgerSidebar />
          <Sidebar />
          <FilterSidebar />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}