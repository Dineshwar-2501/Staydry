import { apiTypeResponse } from '@/types/apiType';
import { Product } from './../types/productType';

export default async function fetchsearch( query:string  ) {
    
    const url = `https://dummyjson.com/products/search?q=${query}`
    const res = await fetch(url)
    const data: apiTypeResponse = await res.json()
    return data.products
}