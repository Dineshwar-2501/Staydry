import { QueryFunctionContext } from "@tanstack/react-query";
import { api } from "./axois";
import { Orderoption, Sortoption } from "@/types/sortType";

export default async function fetchinfiniteProducts({ pageParam  = 1, queryKey }: QueryFunctionContext) {
    const [, sortBy, order, q, category] = queryKey as [string, Sortoption, Orderoption, string, string]
    const limit = 20
    const skip = (pageParam as number - 1) * limit

    let endpoint = '/products'
    const params: { limit: number; skip: number; q?: string, sortBy: Sortoption, order: Orderoption } = { limit, skip, sortBy, order }

    if (q) {
        endpoint = '/products/search'
        params.q = q
    }
    else if (category && category !== undefined) {
        endpoint = `/products/category/${category}`
    }

    const res = await api.get(endpoint,{params})
    return {
        ...res.data,
        nextpage: pageParam as number + 1,

    }

}