"use client"
import { Product } from '@/types/productType';
import ProductCard from './ProductCard';
import Link from 'next/link';
import styles from './ProductList.module.scss'
import {useRouter} from "next/navigation" ;

type productProp = {
    // products: Product[]
    page: number;
    sorted: Product[]
}





export default  function ProductList({ page, sorted }: productProp) {
    const router=useRouter()
    // const dispalyProduct=sorted??products
    return (
        <div>
            <select
            title='Sorted'
                
                onChange={(e) =>
                    router.push(`/products?page=1&sort=${e.target.value}`)
                }
            >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A–Z</option>
            </select>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-5'>
                {sorted.map((product) => (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
                

            </div>

            <div className='flex justify-center gap-2 items-center m-3 mt-6'>
                {page > 1 && (<Link className={`${styles.page}`} href={`/products?page=${page - 1}`}  >Prev</Link>)}
                <span>|</span>
                <Link className={page === 1 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={'/products?page=1'} >1</Link>
                <span>|</span>
                <Link className={page === 2 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={'/products?page=2'} >2</Link>
                <span>|</span>
                <Link className={page === 3 ? `${styles.page} ${styles.active}` : `${styles.page}`} href={'/products?page=3'} >3</Link>
                <span>|</span>
                <Link className={`${styles.page}`} href={`/products?page=${page + 1}`} >Next</Link>
            </div>
        </div>
    )
}