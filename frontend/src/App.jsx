
import { useEffect } from "react"
// react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import { Home } from './pages/Home';
import { ProductDetails } from "./pages/ProductDetails"
// Components
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import { ProductByCategory } from "./pages/ProductByCategory";
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  // add code for reset scroll to 0,0
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-gray-200 min-h-[100vh]">
      <BrowserRouter>
        <Header />
        {/* <div className="mb-[20%] "> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categoria/:nombre" element={<ProductByCategory />} />
          </Routes>
        {/* </div> */}
        <Sidebar />
        <Footer />
      </BrowserRouter>

    </div>
  )
}