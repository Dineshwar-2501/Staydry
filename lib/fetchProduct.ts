import { Product } from "@/types/productType"

export default async function fetchProduct({ id }: { id: string  }): Promise<Product> {
    const url = `https://dummyjson.com/products/${id}`
    const response = await fetch(url)
    const data:Product = await response.json()
    return data




}