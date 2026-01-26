import { Product } from "@/types/productType"

export default async function fetchProduct({ id }: { id: string }): Promise<Product | null> {
    try{const url = `https://dummyjson.com/products/${id}`
    const response = await fetch(url)
    const data: Product = await response.json()
    return data}
    catch(e){
        console.log(e)
        return null
    }



}