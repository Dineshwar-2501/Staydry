"use client"
import { Product } from '@/types/productType'
import Link from 'next/link';
import styles from './ProductCard.module.scss'
import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';
import fetchProduct from '@/lib/fetchProduct';
type productprop = {
    product: Product
}



export default function ProductCard({ product }: productprop) {

    // const queryClient = useQueryClient()
    // const handlePrefetch = () => {
    //     queryClient.prefetchQuery({
    //         queryKey: ['products', product.id],
    //         queryFn: fetchProduct,
    //     })
    // }
    return (
        <>

            <div className={styles.card}>

                <Link href={`/products/${product.id}`}
                    // onMouseEnter={handlePrefetch}
                    >
                    <div className={`${styles.card__image}`} >
                        <Image src={`${product?.thumbnail}`} width={400} height={400} alt={product.title} className='object-cover w-auto h-auto' />
                    </div>
                </Link>
                <div className=' bg-[#d4410b]'>
                    <Link

                        href={`/products/${product.id}`} >  <h1 className={`  text-white text-center p-4  `}>{product?.title}</h1>
                    </Link>
                </div>

                <p className=' bg-yellow-200 text-black text-center   p-4 '> From Rs.<span className='font-bold'>{product.price.toFixed(2)}</span></p>
            </div >


        </>
    );
}