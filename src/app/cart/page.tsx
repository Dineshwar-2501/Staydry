/* eslint-disable react-hooks/immutability */
"use client"
import Image from "next/image";
import Button from "@/utilities/Button";
import useCart from '@/hooks/useCart'
// import { useState } from "react";
import LinkCompo from "@/utilities/LinkCompo";
import { BackArrowIcon, BackIcon } from "@/svgComponents/Icon";
import { useRouter } from "next/navigation";
import QuantityControl from "@/components/Quantitycontrol";
export default function Page() {
    const { cart, clearCart, removeItem, incQty, decQty } = useCart()
    // const cart: Product[] = getCart()
    // const [quantity, setQuantity] = useState<number>();

    const totalprice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const router = useRouter()

    if (cart.length === 0) {
        return <Image src='/Images/emptycart.webp' width={500} height={500} className=" object-contain mt-40 mx-auto items-center" alt='cart is Empty' />
    }
    return (<div className="mt-40">
        <Button onClick={() => router.back()} className='flex w-fit gap-3'>

            {/* <Image src='/Icons/arrow.png' width={20} height={20} alt="arrow" /> */}
            <BackArrowIcon className="w-5" /> <p>Back</p>

        </Button>
        <div className="flex flex-col  gap-10  w-fit ">
            {cart.map((product) => (
                <div key={product.id}>
                    <div className="flex  items-center  my-5">
                        <Image src={product.thumbnail} width={300} height={300} alt={product.title} />
                        <div className="flex flex-col gap-3  ">
                            <p className="font-bold text-2xl">{product.title}</p>
                            {/* <p className="text-sm text-gray-900/60">{product.description} </p> */}



                            <p className="pointer-events-none w-fit font-bold"> Price : {(product.price * product.quantity).toFixed(2)} </p>
                            <p className="pointer-events-none w-fit font-bold"> Quantity : <b>{product.quantity}</b> </p>

                            <div className="flex items-center gap-10 bg-gray-800/10 p-2 rounded-full w-fit">
                                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={product.quantity === product.stock} onClick={() => incQty(product.id)}>+</button>
                                <p>{product.quantity}</p>
                                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={product.quantity === 1} onClick={() => decQty(product.id)}>-</button>
                            </div>

                            {/* <QuantityControl fetchedProduct={product}/> */}
                            <Button className=" w-fit" onClick={() => removeItem(product)}>Remove</Button>
                        </div>
                    </div>
                </div>
            ))}


        </div>
        <div className=" flex  justify-center" >

            <Button className="pointer-events-none w-fit">Total : {totalprice.toFixed(2)}</Button>
            <Button className="w-fit" onClick={() => { clearCart() }}>clearCart</Button>
        </div>
    </div>
    );
}