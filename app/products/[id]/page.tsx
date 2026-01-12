import Image from 'next/image';
import QuantityControl from '@/app/components/Quantitycontrol'
import { notFound } from 'next/navigation';
// import Button from '@/app/utilities/Button';
import { Product } from '@/types/productType';

import fetchProduct from '@/lib/fetchProduct';

export default async function Page({ params }: { params: Promise<{ id: string }>; }) {


    const { id } = await params


    const product: Product = await fetchProduct({ id })


    if (!product) notFound();


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>

            <div className='col-span-1'>
                {product?.images?.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={product.title}
                        width={200}
                        height={200}
                    />
                ))}


            </div>
            <div className='col-span-2'>
                <h1 className='text-2xl font-bold text-orange-500 p-3'>{product?.title}</h1>
                <hr className='p-3' />
                <p className='text-sm p-3 text-gray-600 font-medium'>{product?.description}</p>
                <div className="flex justify-between p-2">
                    <p className='text-2xl font-bold text-orange-500  bg-amber-200 rounded-full p-5'>Rs.{product?.price} </p>
                    <QuantityControl fetchedProduct={product} />
                    
                </div>
            </div>
        </div>
    );
}