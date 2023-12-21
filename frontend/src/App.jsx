
import { useEffect } from "react"
// react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import { Home } from './pages/Home';
import { ProductDetails } from "./pages/ProductDetails"
import { ProductByCategory } from "./pages/ProductByCategory";
import { Cart } from "./pages/Cart"
import { ErrorPage } from "./pages/ErrorPage";
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { Wishlist } from "./pages/Wishlist";
// Components
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Footer } from "./components/Footer"
import { BurgerSidebar } from "./components/Sidebar/BurgerSidebar";
import { FilterSidebar } from "./components/Sidebar/FilterSidebar"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { Catalog } from "./pages/Catalog";
import { CatalogSidebar } from "./components/Sidebar/CatalogSidebar";
import { Category } from "./pages/Category";
import { ProductBySubcategory } from "./pages/ProductBySubcategory";
import { ProductByBrand } from "./pages/ProductByBrand";
import { SearchResults } from "./pages/SearchResults";

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
  const { nombre, id } = useParams();
  useEffect(() => {

  }, [id, nombre])

  return (
    <div className="bg-gray-200 min-h-[100vh]">
      <ThemeProvider theme={THEME}>
        <BrowserRouter>
          <Header />
          <Breadcrumbs />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />

            <Route path="/categoria/:nombre" element={<ProductByCategory />} />
            <Route path="/categoria/:nombre/:subcategoria" element={<ProductBySubcategory />} />
            <Route path="/categoria" element={<Category />} />

            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/catalogo/:nombre" element={<ProductByBrand/>} />

            <Route path="/resultados" element={<SearchResults/>} />

            <Route path="/carrito" element={<Cart />} />
            <Route path="/acerca" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="lista-deseo/:id" element={<Wishlist />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <BurgerSidebar />
          <Sidebar />
          <FilterSidebar />
          <CatalogSidebar />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}