"use Client "

import fetchProducts from "@/lib/fetchProducts"
import { Orderoption, Sortoption } from "@/types/sortType"
import { useQuery} from "@tanstack/react-query"


type parama={
    page:number,
    sortBy:Sortoption,
    order:Orderoption,
    category?:string| "",
    q?:string|null,
}


export const useFetchProducts = ({page,sortBy,order,category,q}:parama)=> {


    return useQuery({
        queryKey: ['products', page,sortBy,order,category,q],
        queryFn: fetchProducts,
        placeholderData: (previousData) => previousData,
        refetchOnWindowFocus:false,
        // staleTime: 1000 * 60 * 5,
    })
}