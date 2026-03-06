"use client"

import ProductList from './ProductList';
import { Orderoption, Sortoption } from '@/types/sortType';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { useSearchParams } from 'next/navigation';// search paramas will be an object
import { products } from '@/data/products';
import { useEffect, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import fetchProducts from '@/lib/fetchProducts';


export default function Page() {

    const searchParams = useSearchParams()

    const page = Number(searchParams.get("page")) || 1;
    const category = searchParams.get("category") ?? undefined;
    const sortBy = (searchParams.get("sortBy") ?? "title") as Sortoption;
    const order = (searchParams.get("order") ?? "asc") as Orderoption
    const q = searchParams.get("q") ?? "";

    // const { data, isLoading, isError, error } = useFetchProducts({ page, sortBy, order, q, category })
    // const uiData = products.products



    // array to show in pagination
    // const totalpages = Math.ceil((data?.total ?? 0) / 10)
    // console.log(totalpages, data?.total, data?.limit)
    // const pagesarr = useMemo(() => {
    //     const range = 2
    //     const start = Math.max(1, page - range) //5=> start=3 
    //     const end = Math.min(totalpages, page + range) //5=> end=7
    //     return Array.from({ length: end - start + 1 }, (_, i) => i + start)
    // }, [page, totalpages])


    //  prefetch the data of next list
    // const queryClient = useQueryClient()

    // useEffect(() => {
    //     if (!data) return
    //     const nextPage = page + 1

    //     if (nextPage <= totalpages) {
    //         queryClient.prefetchQuery({
    //             queryKey: ['products', nextPage, sortBy, order, q, category],
    //             queryFn: fetchProducts
    //         })
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [page, sortBy, order, category, totalpages])

    return (
        <section className=' px-4 lg:px-10 mx-auto '>
            <h1 className='text-5xl  font-bold text-orange-700 py-4  '>Shop All</h1>
            {/* {isLoading && <p>Loading...</p>} */}
            {/* {isError && <p>{error.message}</p>} */}
            <ProductList
                page={page}
                q={q}
                category={category}
                sortBy={sortBy}
                order={order}
            // Apiproduct={data?.products ?? uiData}
            // totalPages={totalpages}
            // arrayPages={pagesarr}
            />
        </section>
    );
}

