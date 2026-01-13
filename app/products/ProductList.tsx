"use client"
import { Product } from '@/types/productType';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './ProductList.module.scss'
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import search from '@/public/Icons/search.png'
import Image from 'next/image';
type productProp = {
    page: number;
    sorted: Product[]
}

export default function ProductList({ page, sorted }: productProp) {
    const searchParams=useSearchParams();
    const router = useRouter()
    const [query, setQuery] = useState('')
    

  
    const filteredproducts = sorted.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
   
    function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
        router.push(`/products?page=${page}&sort=${e.target.value}`)
    }
    const sort=searchParams.get("sort")??"price-asc"

    return (
        <div className='m-2'>
            <div className="flex">
                <select
                    title='sorting'
                    className='bg-gray-900/20 rounded shadow p-5 m-3 mb-6'
                    onChange={handleSort}
                    value={sort}
                    >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A–Z</option>
                </select>
                <div className='flex gap-3 items-center m-auto h-fit px-5 py-2 ms-10 border rounded-full'>
                    <Image src={search} width={15} height={15} alt=" serach"/>
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

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-5'>
                {filteredproducts.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className='flex justify-center gap-2 items-center m-3 mt-6'>
                {page > 1 && (<Link className={`${styles.page}`} href={`/products?page=${page - 1}&sort=${sort}`}>Prev</Link>)}
                <span>|</span>
                <Link className={page === 1 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=1&sort=${sort}`}>1</Link>
                <span>|</span>
                <Link className={page === 2 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=2&sort=${sort}`}>2</Link>
                <span>|</span>
                <Link className={page === 3 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={`/products?page=3&sort=${sort}`}>3</Link>
                <span>|</span>
                <Link className={`${styles.page}`} href={`/products?page=${page + 1}&sort=${sort}`}>Next</Link>
            </div>
        </div>
    )
}
