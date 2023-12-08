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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleFilterClose = () => {
    {
      setIsFilterOpen(false)
    }
  }
  return (

    <SidebarContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      handleClose,
      isBurgerOpen,
      setIsBurgerOpen,
      handleBurgerClose,
      isFilterOpen,
      setIsFilterOpen,
      handleFilterClose }}>{children}</SidebarContext.Provider>
  )
}
