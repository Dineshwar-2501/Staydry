import { Product } from "@/types/productType"
import { apiTypeResponse } from "@/types/apiType"
export default async function fetchProducts(page: number): Promise<apiTypeResponse> {
    try {
        const limit = 10
        const skip = (page - 1) * limit

        const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        const res = await fetch(url)

        const data: apiTypeResponse = await res.json()
        console.log(data.total)
        return data
    }
    catch (e) {
        console.error(e)
        return { products: [], total: 0, skip: 0, limit: 0 }
    }
}