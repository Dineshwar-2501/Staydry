import Image from 'next/image';

import getProducts from "@/lib/product";
import Count from '@/app/utilities/Count'
import notfound from '@/app/notfound';
import Button from '@/app/utilities/Button';


export default async function Page({ params }: { params: Promise<{ id: string }>; }) {
    const { id } = await params;
    const products = await getProducts()
    const singleProduct = products.find(p => p.id === Number(id))

    if (!singleProduct) notfound();

    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-5'>

            <div className='col-span-1'>
                {singleProduct?.images?.map((image,index)=>(
                    <Image 
                    key={index}
                    src={image}
                    alt={singleProduct.title}
                    width={200}
                    height={200}
                    />
                ))}


            </div>
            <div className='col-span-2'>
                <h1 className='text-2xl font-bold text-orange-500 p-3'>{singleProduct?.title}</h1>
                <hr className='p-3' />
                <p className='text-sm p-3 text-gray-600 font-medium'>{singleProduct?.description}</p>
                <div className="flex justify-between p-2">
                    <p className='text-2xl font-bold text-orange-500  bg-amber-200 rounded-full p-5'>Rs.{singleProduct?.price} </p>
                    <Count/>
                    <Button>Add to cart</Button>
                </div>
            </div>
        </div>
    );
}