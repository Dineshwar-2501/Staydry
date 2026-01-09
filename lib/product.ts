import { Product } from "@/types/productType"
import { apiTypeResponse } from "@/types/apiType"
export default async function getProducts(page: number): Promise<Product[]> {
    const limit=10
    const skip = (page - 1) * limit
    const url =`https://dummyjson.com/products?limit=${limit}&skip=${skip}` 
    const res = await fetch(url)

    const data: apiTypeResponse = await res.json()

    // it means ingone 10 and show next 10 
    return data.products
}