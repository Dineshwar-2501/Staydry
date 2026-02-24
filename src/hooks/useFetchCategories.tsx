import { api } from "@/lib/axois"
import { useQuery } from "@tanstack/react-query"

export function useFetchCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await api.get('/products/categories')
            return res.data
        },
        staleTime: Infinity
    })
}
  