"use client"
import Image from "next/image";
import Button from "@/utilities/Button";
import useCart from '@/hooks/useCart'
// import { useState } from "react";
import LinkCompo from "@/utilities/LinkCompo";
export default function Page() {
    const { cart, clearCart, removeItem } = useCart()
    // const cart: Product[] = getCart()
    // const [quantity, setQuantity] = useState<number>();
    const totalprice = cart.reduce((total, item) => total + item.price, 0)

    if (cart.length === 0) {
        return <Image src='/Images/emptycart.webp' width={500} height={500} className=" object-contain mt-40 mx-auto items-center" alt='cart is Empty' />
    }
    return (<div className="mt-20">
        <LinkCompo href='/products' className='flex w-fit gap-3'>

            <Image src='/Icons/arrow.png' width={20} height={20} alt="arrow" /><p>Back</p>

        </LinkCompo>
        <div className="flex flex-col lg:flex-row flex-wrap gap-10  w-fit mx-auto">
            {cart.map((product) => (
                <div key={product.id} className=" border-10 border-amber-200 rounded-2xl mx-4  flex-1" >
                    <div className="flex gap-2 items-center mx-auto my-5">
                        <Image src={product.thumbnail} width={150} height={150} alt={product.title} className=" hover:scale-110  col-span-1" />
                        <div className="flex flex-col gap-3  ">
                            <p className="font-bold text-2xl">{product.title}</p>
                            {/* <p className="text-sm text-gray-900/60">{product.description} </p> */}

                        </div>
                    </div>
                    <div className="flex">
                        <Button className="pointer-events-none w-fit"> Price : {product.price.toFixed(2)} </Button>
                        <Button className="pointer-events-none w-fit"> Quantity : {product.quantity} </Button>

                        {/* <div className="flex items-center gap-10 bg-gray-800/10 p-2 rounded-full">
                                    <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={product.quantity === product.stock} onClick={() => product.quantity += 1}>+</button>
                                    <p>{product.quantity}</p>
                                    <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={product.quantity === 1} onClick={() =>product.quantity -= 1}>-</button>
                                </div> */}
                        <Button className=" w-fit" onClick={() => removeItem(product)}>Remove</Button>
                    </div>
                </div>
            ))}


        </div>
        <div >

            <Button className="pointer-events-none w-fit">Total : {totalprice}</Button>
            <Button className="w-fit" onClick={() => { clearCart() }}>clearCart</Button>
        </div>
    </div>
    );
}