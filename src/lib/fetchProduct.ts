import { QueryFunctionContext } from '@tanstack/react-query';
import { api } from "./axois"

export default async function fetchProduct({ queryKey }: QueryFunctionContext) {
    try {
        const [,id]=queryKey as [string,string]
        const res = await api.get(`/products/${id}`)

        return res.data
    }
    catch (e) {
        console.log(e)
        return null
    }



}