import { Product } from "@/types/productType"
import { apiTypeResponse } from "@/types/apiType"
export default async function getProducts():Promise<Product[]> {
    const res=await fetch('https://dummyjson.com/products')
    const data:apiTypeResponse=await res.json()
    return data.products
}