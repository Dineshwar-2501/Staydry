
import { apiTypeResponse } from "@/types/apiType"

import { api } from "./axois"
import { QueryFunctionContext } from "@tanstack/react-query"
import { Orderoption, Sortoption } from "@/types/sortType"


export default async function fetchProducts({ queryKey }: QueryFunctionContext): Promise<apiTypeResponse> {
    try {
        const [, page, sortBy, order, category, q] = queryKey as [string, number, Sortoption, Orderoption, string, string]

        const limit = 10
        const skip = (page - 1) * limit

        let endpoint = '/products'
        const params: { limit: number; skip: number; q?: string, sortBy: Sortoption, order: Orderoption } = {limit, skip, sortBy, order }

        if (q) {
            endpoint = '/products/search'
            params.q = q
        }
        else if (category && category !== undefined) {
            endpoint = `/products/category/${category}`
        }

       
        // const res = await api.get(`/products?limit=${limit}&skip=${skip}`)
        // const res = await api.get('/products', {params: {limit,skip, sortBy,category,q}})
        const res = await api.get(endpoint, { params })
        console.log(res.data.total)
        return res.data
    }
    catch (e) {
        console.error(e)
        return { products: [], total: 0, skip: 0, limit: 0 }
    }
}