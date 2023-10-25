
import React from "react"
// react-router-dom
import { Link , BrowserRouter, Route, Routes} from 'react-router-dom'
// Pages
import {Home} from './pages/Home';
import {ProductDetails} from "./pages/ProductDetails"
// Components
import {Header} from "./components/Header"
import {Sidebar} from "./components/Sidebar"
import {Footer} from "./components/Footer"
export default function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </BrowserRouter>
     
    </div>
  )
}