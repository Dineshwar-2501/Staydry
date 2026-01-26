import { apiTypeResponse } from '@/types/apiType';
import { Product } from './../types/productType';
import { useCallback, useState } from "react"
type Sortoption = "" | "price-asc" | "price-desc" | "name-asc"
export default function useFilter() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)



    const fetchSearch = useCallback(async (query: string): Promise<Product[] > => {
        try {
            setLoading(true)
            const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
            const data:apiTypeResponse= await res.json()
            return data.products
        } catch {
            setError("Failed to fetch")
            return[] 
        } finally {
            setLoading(false)
        }
    }, [])





    function fetchSort(products: Product[], sort: Sortoption) {
        return [...products].sort((a, b) => {
            switch (sort) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "name-asc":
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        })
    }


    return { fetchSort, fetchSearch ,error,loading}
}