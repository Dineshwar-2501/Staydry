"use client"
import Image from "next/image";
import cartempty from '@/public/emptycart.webp'
import Button from "../utilities/Button";
import useCart from '@/app/hooks/useCart'
import { useState } from "react";
import LinkCompo from "../utilities/LinkCompo";
import backarrow from '@/public/Icons/arrow.png'
export default function Page() {
    const { cart, clearCart, removeItem } = useCart()
    // const cart: Product[] = getCart()
    // const [quantity, setQuantity] = useState<number>();
    const totalprice= cart.reduce((total,item)=>total+item.price,0)

    if (cart.length === 0) {
        return <Image src={cartempty} className=" object-contain  mx-auto items-center" alt='cart is Empty' />
    }
    return (<div>
        <LinkCompo href='/products' className='flex w-fit gap-3'>
        
            <Image src={backarrow} width={20} height={20} alt="arrow" /><p>Back</p>
        
        </LinkCompo>
            <div className="flex flex-col gap-10  w-fit mx-auto">
                {cart.map((product) => (
                    <div key={product.id} className="grid grid-cols-4 gap-2 items-center mx-auto my-5 border-10 border-amber-200 rounded-2xl" >
                        <Image src={product.thumbnail} width={150} height={150} alt={product.title} className=" hover:scale-110  col-span-1" />
                        <div className="flex flex-col gap-3 w-150 col-span-3 ">
                            <p className="font-bold text-2xl">{product.title}</p>
                            <p className="text-sm text-gray-900/60">{product.description} </p>
                            <div className="flex">
                                <Button className="pointer-events-none w-fit"> Price : {product.price} </Button>
                                <Button className="pointer-events-none w-fit"> Quantity : {product.quantity} </Button>
        
                                {/* <div className="flex items-center gap-10 bg-gray-800/10 p-2 rounded-full">
                                    <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={product.quantity === product.stock} onClick={() => product.quantity += 1}>+</button>
                                    <p>{product.quantity}</p>
                                    <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={product.quantity === 1} onClick={() =>product.quantity -= 1}>-</button>
                                </div> */}
                                <Button className=" w-fit" onClick={() => removeItem(product)}>Remove</Button>
                            </div>
                        </div>
                    </div>
                ))}
                <Button className="pointer-events-none w-fit">Total : {totalprice}</Button>
                <Button className="w-fit" onClick={() => { clearCart() }}>clearCart</Button>
            </div>
    </div>
    );
}