"use client"
import { useEffect, useState } from "react";
import Button from "@/utilities/Button";
import { Product } from "@/types/productType";
import useCart from "@/hooks/useCart";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addinCart } from "@/store/slices/CartSlice";



type prodProp = {
    fetchedProduct: Product
}
export default function QuantityControl({ fetchedProduct }: prodProp) {

    // const { addtoCart } = useCart()
    // const minqty = fetchedProduct.minimumOrderQuantity
    const stock = fetchedProduct?.stock
    const [quantity, setQuantity] = useState<number>(1);
    // const[price,setPrice]=useState<number>(fetchedProduct.price)
    const price = fetchedProduct?.price * quantity
    const prodwithqty = { ...fetchedProduct, quantity, qtymutatedprice: price }
    const [modal, showModal] = useState(false)
    const dispatch = useDispatch()
    function handelsubmit() {
        dispatch(addinCart({ ...fetchedProduct, quantity }))
        setQuantity(1)
        // addtoCart(prodwithqty)
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
        <div className="flex flex-col  gap-10 md:flex-row items-center justify-center md:justify-between w-full">
            <p className='text-2xl w-fit font-bold text-orange-500  bg-amber-200 rounded-full p-5'>Rs.{prodwithqty.qtymutatedprice.toFixed(2)} </p>

            <div className="flex py-3 w-fit items-center gap-10 bg-gray-800/10 px-5 rounded-full">
                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={quantity === stock} onClick={() => setQuantity(c => c + 1)}>+</button>
                <p>{prodwithqty.quantity}</p>
                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={quantity === 1} onClick={() => setQuantity(c => c - 1)}>-</button>

            </div>
            <Button className="py-2" onClick={handelsubmit}>Add to cart</Button>

            {modal &&


                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}

                    className="flex gap-2 items-center bg-yellow-200 drop-shadow-2xl px-5 rounded-full  py-5 fixed bottom-0 right-0">
                    {/* <Image src='/Icons/check.png' alt="Correct" width={20} height={20} /> */}
                    <p className="text-2xl font-bold">Added to the Cart</p>
                </motion.div>
            }
        </div>
    );
}

