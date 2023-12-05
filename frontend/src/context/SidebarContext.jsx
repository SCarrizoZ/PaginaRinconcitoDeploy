import { useState, createContext } from 'react'
//Create context
export const SidebarContext = createContext();


export function SidebarProvider({ children }) {
  //Estado cart sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    {
      setIsOpen(false)
    }
  }
  //Estado sidebar sidebar
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleBurgerClose = () => {
    {
      setIsBurgerOpen(false)
    }
  }
  return (

    <SidebarContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      handleClose,
      isBurgerOpen,
      setIsBurgerOpen,
      handleBurgerClose }}>{children}</SidebarContext.Provider>
  )
}
