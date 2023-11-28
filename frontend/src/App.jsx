
import React, { useEffect } from "react"
// react-router-dom
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
// Pages
import { Home } from './pages/Home';
import { ProductDetails } from "./pages/ProductDetails"
// Components
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Footer } from "./components/Footer"
import { ProductByCategory } from "./pages/ProductByCategory";
export default function App() {
  // add code for reset scroll to 0,0
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/categoria/:nombre" element={<ProductByCategory />} />
        </Routes>
        <Sidebar />
        <Footer />
      </BrowserRouter>

    </div>
  )
}