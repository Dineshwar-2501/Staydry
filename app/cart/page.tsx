"use client"
import { getCart } from "@/lib/fetchcart";
import { Product } from "@/types/productType";
import Image from "next/image";
import cartempty from '@/public/emptycart.webp'

export default function Page() {
    const cart: Product[] = getCart()
    

    if(cart.length===0){
        return <Image src={cartempty}  alt='cart is Empty'/>
    }
    return (
        <>
            {cart.map((product) => (
                <div key={product.id}>
                    <Image src={product.thumbnail} width={200} height={200} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.description} </p>
                    <p>{product.price} </p>
                    <p>Quantity :{product.quantity}</p>
                    
                </div>
            ))}
        </>
    );
}