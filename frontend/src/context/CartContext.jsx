import { createContext, useState, useEffect } from 'react'

// context
export const CartContext = createContext()


export function CartProvider({ children }) {
  // Estados
  const [total, setTotal] = useState(0)
  const [itemAmount, setItemAmount] = useState(0)
  const [cart, setCart] = useState([])

  // Can i add a useEffect to save the cart in local storage? 
  // Add to cart
  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    } 
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    console.log(id)
    // Revisa existencia del producto
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    // Incrementar cantidad si el objeto está repetido
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }
        } else {
          return item
        }

      })
      setCart(newCart);
    } else {

      setCart([...cart, newItem])

    }



  }
  console.log(cart)
  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      return acc + curr.precio * curr.amount
    }, 0)
    setTotal(total)
  })
  // Cantidad de objetos en el carrito
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, curr) => {
        return acc + curr.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  // Eliminar producto del carrito

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }
  // Limpiar carrito
  const clearAllItems = () => {
    setCart([])
  }
  //Incrementar cantidad de producto
  const increaseQuantity = (id) => {
    let index = cart.findIndex(item => item.id == id)
    let updatedCart = [...cart];
    updatedCart[index].amount += 1;
    setCart(updatedCart)
  }
  // Decrementar cantidad de producto
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    console.log(cartItem)
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item;

        }

      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)
    }

  }
  return (
    <CartContext.Provider value={{ total, setTotal, itemAmount, setItemAmount, cart, setCart, addToCart, removeFromCart, clearAllItems, increaseQuantity, decreaseQuantity }}>{children}</CartContext.Provider>
  )
}
