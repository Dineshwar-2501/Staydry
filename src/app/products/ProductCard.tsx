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

                <Link
                    href={`/products/${product.id}`} >   <Image src={`${product?.thumbnail}`} width={200} height={200} alt={product.title} className='mx-auto' />
                </Link>
                <div className=' bg-amber-600'>
                    <Link

                        href={`/products/${product.id}`} >  <h1 className={` text-lg text-white text-center w-full p-2 font-bold `}>{product?.title}</h1>
                    </Link>
                </div>

                <p className=' bg-yellow-200 text-black text-center w-full rounded-b-2xl p-2 font-bold '> From Rs.{product.price.toFixed(2)}</p>
            </div >


        </>
    );
}