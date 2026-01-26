import Image from 'next/image';
import QuantityControl from '@/app/components/Quantitycontrol'
import { notFound } from 'next/navigation';
// import Button from '@/app/utilities/Button';
import { Product } from '@/types/productType';
import backarrow from '@/public/Icons/arrow.png'
import fetchProduct from '@/lib/fetchProduct';
import LinkCompo from '@/app/utilities/LinkCompo';
import Swiper from '@/app/utilities/Swiper';



export default async function Page({ params }: { params: Promise<{ id: string }>; }) {


    const { id } = await params


    const product: Product = await fetchProduct({ id })


    if (!product) notFound();


    return (<div>
        <LinkCompo href='/products' className='flex w-fit gap-3'>

            <Image src={backarrow} width={20} height={20} alt="arrow" /><p>Back</p>

        </LinkCompo>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-2 mt-5'>
            <div className='col-span-1 col-start-1'>
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
            <div>
                <Swiper images={product.images}/>
            </div>
            <div className='col-span-2 col-end-5'>
                <h1 className='text-2xl font-bold text-orange-500 p-3'>{product?.title}</h1>
                <hr className='p-3' />
                <p className='text-sm p-3 text-gray-600 font-medium'>{product?.description}</p>
                <div className="flex justify-between p-2">
                    {/* <p className='text-2xl font-bold text-orange-500  bg-amber-200 rounded-full p-5'>Rs.{product?.price} </p> */}
                    <QuantityControl fetchedProduct={product} />
                    {/* <Button onClick={()=>{addtoCart(prodwithqty)}}>Add to cart</Button> */}
                </div>
            </div>
        </div>

    </div>);
}