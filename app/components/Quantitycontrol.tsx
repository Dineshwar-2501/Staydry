"use client"
import { useEffect, useState } from "react";
import Button from "../utilities/Button";
import checked from "@/public/Icons/check.png"
import { Product } from "@/types/productType";
import useCart from "../hooks/useCart";
import Image from "next/image";
import { motion } from "framer-motion";



type prodProp = {
    fetchedProduct: Product
}
export default function QuantityControl({ fetchedProduct }: prodProp) {

    const { addtoCart } = useCart()
    // const minqty = fetchedProduct.minimumOrderQuantity
    const stock = fetchedProduct.stock
    const [quantity, setQuantity] = useState<number>(1);
    // const[price,setPrice]=useState<number>(fetchedProduct.price)1
    const price = fetchedProduct.price * quantity
    const prodwithqty = { ...fetchedProduct, quantity, price: price }
    const [modal, showModal] = useState(false)

    function handelsubmit() {
        addtoCart(prodwithqty)
        showModal(true)
    }
    useEffect(() => {
        // if (!modal) return


        const timer = setTimeout(() => {
            showModal(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [modal])

    return (
        <div className="flex justify-between w-full">
            <p className='text-2xl font-bold text-orange-500  bg-amber-200 rounded-full p-5'>Rs.{prodwithqty.price.toFixed(2)} </p>

            <div className="flex items-center gap-10 bg-gray-800/10 px-5 rounded-full">
                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={quantity === stock} onClick={() => setQuantity(c => c + 1)}>+</button>
                <p>{prodwithqty.quantity}</p>
                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={quantity === 1} onClick={() => setQuantity(c => c - 1)}>-</button>

            </div>
            <Button onClick={() => { handelsubmit() }}>Add to cart</Button>

            {modal &&

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    
                    className="flex gap-2 items-center bg-yellow-200 drop-shadow-2xl px-5 rounded-full  py-5 fixed bottom-0 right-0">
                    <Image src={checked} alt="Correct" width={20} height={20} />
                    <p className="text-2xl font-bold">Added to the Cart</p>

                </motion.div>
            }
        </div>
    );
}

