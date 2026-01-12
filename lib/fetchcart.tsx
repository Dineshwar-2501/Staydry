"use client"
import { Product } from "@/types/productType"

export function getCart() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

export function saveCart(cart: Product[]) {
  localStorage.setItem("cart", JSON.stringify(cart))
}
