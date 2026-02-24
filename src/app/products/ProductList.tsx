"use client"
import { Product } from '@/types/productType';
import ProductCard from './ProductCard';
import Link from 'next/link';
import styles from './ProductList.module.scss'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useFilter from '@/hooks/useFilter';
import { Orderoption, Sortoption } from '@/types/sortType';
import { DownChevronIcon, SearchIcon } from '@/svgComponents/Icon';
import { useDebounce } from '@/hooks/useDebounce';
import { useFetchCategories } from '@/hooks/useFetchCategories';
import { catapi } from '@/types/catgeoryType';
import useInfiniteFetch from '@/hooks/useInfinteFetch';



type productProp = {
    page: number,
    q: string,
    category?: string,
    sortBy: Sortoption,
    order: Orderoption,
    // Apiproduct: Product[]
    // totalPages: number,
    // arrayPages: number[],

}

export default function ProductList({ page, sortBy, order, q, category }: productProp) {

    const { handelSearch, handleSort, handelCategory, handleOrder } = useFilter()

    const { data: scrollData, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteFetch({ sortBy, order, q, category })
    const allproduct: Product[] = scrollData?.pages.flatMap(p => p.products) ?? []


    const { data: CategoryList } = useFetchCategories()
    // const uniquecatg = [...new Set(data.map(p => p.category))]


    const [search, setSearch] = useState('')
    const [cate, setCate] = useState('')


    const handleSearchChange = (value: string) => {

        setCate('')
        setSearch(value)
        // handelSearch(value)
        
    }
    const handleCategoryChange = (value: string) => {
        
        setCate(value)
        setSearch('')
        handelCategory(value)

    }

    //set debounce search 
    const dbouncequery = useDebounce(search, 500)
    useEffect(() => {
        if (!dbouncequery) return
        handelSearch(dbouncequery || "")
    }, [dbouncequery, handelSearch])

    //  Intersection Observer 
    const observer = useRef<IntersectionObserver | null>(null)
    const lastProductRef = useCallback((node: HTMLDivElement | null) => {
        if (isFetchingNextPage) return // wait after single fetch
        if (observer.current) observer.current.disconnect() // if new prduct appears disconnect the old one

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage)
                fetchNextPage()
        })

        if (node) observer.current.observe(node)
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])



    return (
        <div >
            {/* filter 🧠 */}
            <div className="flex  flex-col lg:flex-row  my-5 w-full justify-around">

                <div className="flex">
                    <div className='appearance-none border-2  rounded-2xl w-fit shadow  m-3 '>
                        <select
                            title='Sorting'
                            className='appearance-none   rounded-full w-fit shadow px-10 py-3 m-3 '
                            onChange={(e) => handleSort(e.target.value as Sortoption)}>
                            {/* <option disabled >Filter Products</option> */}


                            <option value="title">Filter By Name</option>
                            <option value="price">Filter By Price</option>
                        </select>
                        <label htmlFor="asc">
                            <input
                                type="radio"
                                name="order"
                                id="asc"
                                value="asc"
                                checked={order === "asc"}
                                onChange={(e) => handleOrder(e.target.value as Orderoption)}
                            />
                        </label>
                        <label htmlFor="desc">
                            <input
                                type="radio"
                                name="order"
                                id="desc"
                                value="desc"
                                checked={order === "desc"}
                                onChange={(e) => handleOrder(e.target.value as Orderoption)}
                            />
                        </label>
                    </div>
                    <select
                        title='Category'
                        value={cate}
                        className='appearance-none border-2  rounded-full w-fit shadow px-4 py-3  m-3  '
                        onChange={(e) => handleCategoryChange(e.target.value)}>
                        <option defaultChecked value="">All</option>
                        {CategoryList?.map((prod: catapi, i: number) => (
                            <option key={i} value={prod.slug}>{prod.name}</option>
                        ))}
                    </select>
                </div>
                <div className='flex gap-3 items-center appearance-none border-2  rounded-full w-fit shadow px-5 py-3 m-3 '>
                    <SearchIcon className='w-5' />
                    <input
                        type='search'
                        value={search}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        name="search"
                        // value={query}
                        placeholder="Search products... "
                        className='outline-0'
                    />
                </div>
            </div >


            {/* product */}

            {/* <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6  pb-20  ' >
                {Apiproduct?.map((product) => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })}
            </div> */}
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6  pb-20  ' >
                {allproduct.map((product, index) => {
                    if (index === allproduct.length - 10) {
                        return (
                            <div ref={lastProductRef} key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        )
                    }

                    return <ProductCard key={product.id} product={product} />
                })}

            </div >



            {/* {hasNextPage && <button onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? "loding..." : "loadmore"}
            </button>} */}

            {/* pagination */}
            {/* < div className='flex justify-center gap-2 items-center m-3 mt-6' >
                {page !== 1 && (<Link className={`${styles.page}`} href={`/products?page=1&sortBy=${sortBy}&order=${order}`}>start</Link>)
                }
                {page > 1 && (<Link className={`${styles.page}`} href={`/products?page=${page - 1}&sortBy=${sortBy}&order=${order}`}>Prev</Link>)}

               

                {
                    arrayPages.map((pageno, i) => (
                        <Link key={i} className={page === pageno ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=${pageno}&sortBy=${sortBy}`}>{pageno}</Link>
                    ))
                }
                {page < totalPages && <Link className={`${styles.page}`} href={`/products?page=${page + 1}&sortBy=${sortBy}&order=${order}`}>Next</Link>}
                {page !== totalPages && <Link className={`${styles.page}`} href={`/products?page=${totalPages}&sortBy=${sortBy}&order=${order}`}>End</Link>}
            </div >  */}
        </div >
    )
}
