"use client"
import { useState } from "react";
import Button from "../utilities/Button";

import { Product } from "@/types/productType";
import addtoCart from "@/lib/addtocart";

type prodProp = {
    fetchedProduct: Product
}
export default function QuantityControl({ fetchedProduct }: prodProp) {
    // const minqty = fetchedProduct.minimumOrderQuantity
    const stock = fetchedProduct.stock
    const [quantity, setQuantity] = useState<number>(1);
    const prodwithqty = { ...fetchedProduct, quantity }

    return (
        <div>
            <div className="flex items-center gap-10 bg-gray-800/10 px-5 rounded-full">
                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={quantity === stock} onClick={() => setQuantity(c => c + 1)}>+</button>
                <p>{quantity}</p>
                <button className="rounded-full bg-gray-800/20 p-4 px-6" type='button' disabled={quantity === 1} onClick={() => setQuantity(c => c - 1)}>-</button>
                <Button onClick={()=>{addtoCart(prodwithqty)}}>Add to cart</Button>
            </div>

        </div>
    );
}

