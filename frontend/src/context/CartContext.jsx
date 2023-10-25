import React,{createContext,useState,useEffect} from 'react'

// context
export const CartContext = createContext()


export  function CartProvider({children}) {
  // states
  const [total,setTotal] = useState(0)
  const [itemAmount,setItemAmount]= useState(0)
  const [cart , setCart] = useState([])
  const addToCart = (product,id)=>{
    const newItem = {...product, amount:1}
    
    // Check product existence
    const cartItem = cart.find((item)=>{
      return item.id ===id;
    })
    // Increment amount if repeated item
    if(cartItem){
      const newCart = [...cart].map(item=>{
        if(item.id===id){
          return {...item,amount:item.amount+1}
        }else{
          return item
        }
        
      })
      setCart(newCart);
    }else{
      
      setCart([...cart,newItem])
      
    }
    
    

  }
  // console.log(cart)
  useEffect(()=>{
    const total = cart.reduce((acc,curr)=>{
      return acc + curr.price * curr.amount
    },0)
    setTotal(total)
  })
  // item amount
  useEffect(() => {
    if(cart){
      const amount = cart.reduce((acc,curr)=>{
        return acc+curr.amount
      },0)
      setItemAmount(amount)
    }
  },[cart])

  // remove

  const removeFromCart=(id)=>{
    const newCart = cart.filter(item=>{
      return item.id !== id
    })
    setCart(newCart)
  }
  // clear all items in the cart
  const clearAllItems=()=>{
    setCart([])
    }
  //increase product quantity
  const increaseQuantity=(id)=>{
    let index = cart.findIndex(item => item.id == id)
    let updatedCart = [...cart];
    updatedCart[index].amount += 1;
    setCart(updatedCart)
    }
  // descrease product quantity
  const decreaseQuantity=(id)=>{
    const cartItem = cart.find((item)=>{
      return item.id ===id;
    })
    console.log(cartItem)
    if (cartItem) {
      const newCart = cart.map((item)=>{
        if(item.id===id){
          return {...item,amount: cartItem.amount -1}
        }else{
          return item;

        }
        
      })
      setCart(newCart)
    }
    if(cartItem.amount<2){
      removeFromCart(id)
    }
    
  }
  return (
    <CartContext.Provider value={{total,setTotal,itemAmount,setItemAmount,cart,setCart,addToCart, removeFromCart,clearAllItems, increaseQuantity, decreaseQuantity}}>{children}</CartContext.Provider>
  )
}
