
import fetchinfiniteProducts from "@/lib/fetchinfinteProducts";
import { Orderoption, Sortoption } from "@/types/sortType";
import { useInfiniteQuery } from "@tanstack/react-query";

type parama = {
    sortBy: Sortoption,
    order: Orderoption,
    category?: string | "",
    q?: string | null,
}
export default function useInfiniteFetch({ sortBy, order, q, category }: parama) {
    return useInfiniteQuery({
        queryKey: ['products', sortBy, order, q, category],
        queryFn: fetchinfiniteProducts,
        initialPageParam: 1,
        staleTime:1000*60*5,
        getNextPageParam: (lastPage, allPages) => {
            const totalFetched = allPages.length * 10

            if (totalFetched >= lastPage.total) {
                return undefined
            }
            return allPages.length + 1
        }
    })
}