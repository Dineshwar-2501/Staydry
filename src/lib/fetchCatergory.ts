import { Product } from "@/types/productType"
import { apiTypeResponse } from "@/types/apiType"
export default async function fetchCatergory(category:string): Promise<apiTypeResponse> {
    try {
        

        const url = `https://dummyjson.com/products/${category}`
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