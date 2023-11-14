import { useState, createContext } from 'react'
//Create context
export const SidebarContext = createContext();


export function SidebarProvider({ children }) {
  //Estado
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    {
      setIsOpen(false)
    }
  }
  return (

    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>
  )
}
