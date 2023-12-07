
import { useEffect } from "react"
// react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import { Home } from './pages/Home';
import { ProductDetails } from "./pages/ProductDetails"
import { ProductByCategory } from "./pages/ProductByCategory";
import {Cart} from "./pages/Cart"
// Components
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import { BurgerSidebar } from "./components/BurgerSidebar";

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
// I need a way to know when the user change to other page, so i can reset scroll to 0,0
// I can use useEffect to do this, but i need to know when the user change to other page
// I can use a state to do this, but i need to know when the user change to other page
// I can use a context to do this, but i need to know when the user change to other page
// I can use a router to do this, but i need to know when the user change to other page
// I can use a history to do this, but i need to know when the user change to other page
// I can use a location to do this, but i need to know when the user change to other page
// I can use a match to do this, but i need to know when the user change to other page
// I can use a useparams to do this, but i need to know when the user change to other page


export default function App() {
  const {nombre, id} = useParams();
  // console.log(comp)
  // add code for reset scroll to 0,0
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    
    window.scrollTo(0, 0)
    
  }, [nombre,id])
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
            <Route path="*" element={<h1 className="text-[100px] font-[Germania One]"> PÁGINA NO ENCONTRADA 404</h1>} />
          </Routes>
          {/* </div> */}
          <BurgerSidebar />
          <Sidebar />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}