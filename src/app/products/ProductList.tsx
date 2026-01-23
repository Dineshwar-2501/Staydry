"use client"
import { Product } from '@/types/productType';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './ProductList.module.scss'
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import useFilter from '@/hooks/useFilter';

import { Sortoption } from '@/types/sortType';
import { SearchIcon } from '@/svgComponents/Icon';

type productProp = {
    page: number,
    sort: Sortoption,
    Apiproduct: Product[]
    totalPages: number,
    arrayPages: number[],
    category?: string
}

export default function ProductList({ category, page, sort, Apiproduct, totalPages, arrayPages }: productProp) {

    const { fetchSearch, fetchSort } = useFilter()

    // const sortedProducts = fetchSort(Apiproduct, sort)
    const [query, setQuery] = useState('')

    const [searchdata, setSearchdata] = useState<Product[]>(Apiproduct)
    // const searchedProduct=await fetchSearch(query)
    // const searchParams = useSearchParams();
    // const sort = searchParams.get("sort") ?? "price-asc"

    // const filteredproducts = sorted.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

    useEffect(() => {
        if (!query) {

            // setPeroducts(fetchSort(Apiproduct, sort))
            // only access useeffect when data is not avaliable gotcha..
            return
        }
        fetchSearch(query).then(setSearchdata)
        // setPeroducts(fetchSort(data, sort))

    }, [fetchSearch, query])


    const finalProduct = useMemo(() => {
        const base = query ? searchdata : Apiproduct
        return fetchSort(base, sort)
    }, [query, searchdata, Apiproduct, fetchSort, sort])

    const router = useRouter()
    function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
        router.push(`/products?page=${page}&sort=${e.target.value}`)
    }


    return (
        <div >
            <div className="flex  flex-row my-5">
                <select
                    title='sorting'
                    className='bg-gray-900/20 rounded-full shadow px-10 py-3 m-3 '
                    onChange={handleSort}
                    value={sort}
                >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A–Z</option>
                </select>
                <div className='flex gap-3 items-center m-auto h-fit px-5 py-2 ms-10 border rounded-full'>
                    <SearchIcon className='w-5'/>
                    <input
                        type='search'
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        name="search"
                        value={query}
                        placeholder="Search products... "
                        className='outline-0'
                    />
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 '>
                {finalProduct.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}




            </div>

            {!query && <div className='flex justify-center gap-2 items-center m-3 mt-6'>
                <Link className={`${styles.page}`} href={`/products?page=1&sort=${sort}`}>start</Link>
                {page > 1 && (<Link className={`${styles.page}`} href={`/products?page=${page - 1}&sort=${sort}`}>Prev</Link>)}

                {/* <span>|</span>
                <Link className={page === 1 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=1&sort=${sort}`}>1</Link>
                <span>|</span>
                <Link className={page === 2 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=2&sort=${sort}`}>2</Link>
                <span>|</span>
                <Link className={page === 3 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=3&sort=${sort}`}>3</Link>
                <span>|</span> */}

                {arrayPages.map((pageno, i) => (
                    <Link key={i} className={page === pageno ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=${pageno}&sort=${sort}`}>{pageno}</Link>
                ))}
                <Link className={`${styles.page}`} href={`/products?page=${page + 1}&sort=${sort}`}>Next</Link>
                <Link className={`${styles.page}`} href={`/products?page=${totalPages}&sort=${sort}`}>End</Link>
            </div>}
        </div>
    )
}
