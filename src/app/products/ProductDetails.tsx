"use client"
import QuantityControl from "@/components/Quantitycontrol";
import useFetchProduct from "@/hooks/useFetchProduct";
import LinkCompo from "@/utilities/LinkCompo";
import SwiperProduct from "@/utilities/SwiperProduct";
import Image from "next/image";
import { notFound } from "next/navigation";



export default function ProductDetails({id}:{id:string}) {

    const { data: product, isLoading, isFetching, isError, error } = useFetchProduct(id)

    // if (!product) notFound();


    return (
        <section className='   px-10 mx-auto'>
            <LinkCompo href='/products' className='flex w-fit gap-3'>

                <Image src='/Icons/arrow.png' width={20} height={20} alt="arrow" /><p>Back</p>

            </LinkCompo>
            {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 mt-5 items-center'>
                <div className='col-span-1 col-start-1 mx-5 p-10'>
                    {product?.images?.map((image: string , index:number) => (
                        <Image
                            key={index}
                            src={image}
                            alt={product.title}
                            width={150}
                            height={200}
                            className='border-black border-2 p-2 m-2 '
                        />
                    ))}
                </div>
                <div className='col-span-2 '>
                    <SwiperProduct images={product?.images} />
                </div>
                <div className='col-span-3 col-end-7'>
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

        </section>
    );
}