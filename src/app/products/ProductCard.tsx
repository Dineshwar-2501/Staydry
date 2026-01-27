import { Product } from '@/types/productType'
import Link from 'next/link';
import styles from './ProductCard.module.scss'
import Image from 'next/image';
type productprop = {
    product: Product
}

export default function ProductCard({ product }: productprop) {
    return (
        <>

            <div className={styles.card}>

                <Link href={`/products/${product.id}`} >
                    <div className={`${styles.card__image}`} >
                        <Image src={`${product?.thumbnail}`} fill alt={product.title} className='object-cover' />
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