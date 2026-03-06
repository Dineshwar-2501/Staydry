"use client"
import QuantityControl from "@/components/Quantitycontrol";
import useFetchProduct from "@/hooks/useFetchProduct";
import { BackArrowIcon } from "@/svgComponents/Icon";
import Button from "@/utilities/Button";

import SwiperProduct from "@/utilities/SwiperProduct";
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function ProductDetails({ id }: { id: string }) {

    const { data: product, isLoading, isError, error } = useFetchProduct(id)

    const router = useRouter()



    return (
        <section className='   px-10 mx-auto'>
            <Button onClick={() => router.back()} className='flex w-fit gap-3 '>

                <BackArrowIcon width={20} className="py-2" /><p className="py-2" >Back</p>

            </Button>
            {isLoading && <p>Loading...</p>}
            {isError && <p>{error.message}</p>}
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-5 mt-5 items-center'>
                {/* <div className='col-span-1 col-start-1 row-start-1 mx-5 p-10 hidden lg:block'>
                    {product?.images?.map((image: string, index: number) => (
                        <Image
                            key={index}
                            src={image}
                            alt={product.title}
                            width={150}
                            height={200}
                            className='border-black border-2 p-2 m-2 '
                        />
                    ))}
                </div> */}
                <div className='lg:col-span-3 row-start-1'>
                    <SwiperProduct images={product?.images} />
                </div>
                <div className='lg:col-span-3 lg:col-end-7  row-start-2 lg:row-start-1'>
                    <h1 className='text-[3vw] font-bold text-orange-500 p-3'>{product?.title}</h1>
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