import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Context Providers
import {ProductProvider} from "./context/ProductContext"
import  {SidebarProvider}  from './context/SidebarContext'
import { CartProvider } from './context/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
  
  
)
