import fetchProduct from "@/lib/fetchProduct";
import { Product } from "@/types/productType";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

export default function useFetchProduct(id: string) {
    const queryClient = useQueryClient()
    return (
        useQuery({
            queryKey: ['product', id],
            queryFn: fetchProduct,
            initialData: () => {
                const products = queryClient.getQueryData<Product[]>(['products'])
                return products?.find(
                    (p) => p.id === Number(id)
                )
            }
        })
    );
}