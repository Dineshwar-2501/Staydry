"use client"
import { Product } from "@/types/productType"
import { useEffect, useState } from "react"

export default function useCart() {
  const [cart, setCart] = useState<Product[]>([])

  useEffect(() => {
    const store = localStorage.getItem("cart")
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(store ? JSON.parse(store) : [])
  }, [])


  function saveCart(cart: Product[]) {
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  function addtoCart(product: Product) {


  const foundItem = cart.find(item => item.id === product.id)

if (foundItem) {
  const updatedCart = cart.map(item =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + product.quantity }
      : item
  )

  saveCart(updatedCart)
  
}

    else {
      cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
        description: product.description,
        thumbnail: product.thumbnail,
        images: [],
        availabilityStatus: "",
        brand: "",
        category: "",
        rating: 0,
        stock: 0,
        minimumOrderQuantity: 0
      })

     

      saveCart(cart)
    }
  }
  function clearCart() {
    localStorage.setItem("cart", "[]")
    setCart([])
  }

  function removeItem(product:Product){
    const updateCart=cart.filter(item=>item.id!==product.id)
    saveCart(updateCart)
    setCart(updateCart)
    }

  return { saveCart, clearCart, cart, addtoCart ,removeItem}
}