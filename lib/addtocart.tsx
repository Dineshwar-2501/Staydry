"use client"
import { Product } from "@/types/productType";
import { getCart, saveCart } from "./fetchcart";

export default function addtoCart(product:Product) {
    const cart=getCart()
    const FoundItem=cart.find((item:Product)=>item.id===product.id)
    if(FoundItem){
        FoundItem.quantity+=product.quantity
    }
    else{
        cart.push({
            id:product.id,
            title:product.title,
            price:product.price,
            quantity:product.quantity,
            description:product.description,
            thumbnail:product.thumbnail
        })

        saveCart(cart)
    }
}