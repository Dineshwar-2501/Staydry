"use client"
import { Product } from '@/types/productType';
import ProductCard from './ProductCard';
import { useCallback, useEffect, useRef, useState } from 'react';
import useFilter from '@/hooks/useFilter';
import { Orderoption, Sortoption } from '@/types/sortType';
import { AscIcon, DescIcon, DownChevronIcon, RightChevronIcon, SearchIcon } from '@/svgComponents/Icon';
import { useDebounce } from '@/hooks/useDebounce';
import { useFetchCategories } from '@/hooks/useFetchCategories';
import { catapi } from '@/types/catgeoryType';
import useInfiniteFetch from '@/hooks/useInfinteFetch';
import styles from './ProductList.module.scss'



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
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2 xl:grid-cols-3 grid-rows-2 my-5 w-full ">


                <div className=' filter border-2 flex items-center rounded-2xl w-fit p-1 shadow-xl   row-start-2 xl:row-start-1'>


                    <div className="relative flex">
                        <select
                            title='Sorting'
                            id='Sortfilter'
                            className='appearance-none bg-transparent outline-0 rounded-full w-fit  px-15 py-5 m-2 flex'
                            onChange={(e) => handleSort(e.target.value as Sortoption)}>
                            {/* <option disabled >Filter Products</option> */}
                            <option value="title">Filter By Name</option>
                            <option value="price">Filter By Price</option>
                        </select>
                        <DownChevronIcon className={`  w-10 absolute -z-1 right-5 top-[25%]`} />
                    </div>


                    <label htmlFor="asc" title="Ascending">
                        <AscIcon className={`w-10  h-10 ${order === "asc" ? "text-blue-500" : styles.order} `} />
                        <input
                            type="radio"
                            name="order"
                            id="asc"
                            value="asc"

                            checked={order === "asc"}
                            className='hidden'
                            onChange={(e) => handleOrder(e.target.value as Orderoption)}
                        />
                    </label>
                    <label htmlFor="desc" title='Descending'>
                        <DescIcon className={`w-10 h-10 ${order === "desc" ? "text-blue-500" : styles.order}`} />
                        <input
                            type="radio"
                            name="order"
                            id="desc"
                            value="desc"
                            className='hidden'
                            checked={order === "desc"}
                            onChange={(e) => handleOrder(e.target.value as Orderoption)}
                        />
                    </label>
                </div>

                <div className=' category  row-start-3 md:row-start-2 xl:row-start-1 relative flex  w-fit '>
                    <select
                        title='Category'
                        value={cate}
                        id='Catfilter'
                        className='appearance-none  bg-transparent outline-0 border-2 rounded-full w-fit shadow-xl px-10 py-3 m-3 flex'
                        onChange={(e) => handleCategoryChange(e.target.value)}>
                        <option defaultChecked value="">All</option>
                        {CategoryList?.map((prod: catapi, i: number) => (
                            <option key={i} value={prod.slug}>{prod.name}</option>
                        ))}
                    </select>

                    <DownChevronIcon className={`  w-10 absolute right-10 -z-1 top-[30%]`} />
                </div>


                <div className=' xl:col-start-2  row-start-1 col-start-1 col-span-2 search flex gap-3 items-center appearance-none border-2  rounded-full w-full shadow px-5 py-3 m-3 '>
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
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6    ' >
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
                {page == 1 && (<Link className={`${styles.page}`} href={`/products?page=1&sortBy=${sortBy}&order=${order}`}>start</Link>)
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
