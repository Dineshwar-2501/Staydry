import fetchProduct from "@/lib/fetchProduct";
import { Product } from "@/types/productType";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useFetchProduct(id: string) {
    const queryClient = useQueryClient()
    return (
        useQuery({
            queryKey: ['products', id],
            queryFn: fetchProduct,
            initialData: () => {
                const queries = queryClient.getQueriesData({ queryKey: ['products'] })

                console.log(queryClient.getQueriesData({ queryKey: ['products'] }), ",1")

                for (const [, data] of queries) {
                    if (!data) continue

                    const infiniteData = data as {
                        pages: { products: Product[] }[]
                    }
                    console.log(infiniteData, ",2")
                    const product = infiniteData.pages
                        ?.flatMap(p => p.products)
                        .find(p => p.id === Number(id))
                    console.log(product, ",3")
                    if (product) return product
                }

                return undefined
            }

        })
    );
}


