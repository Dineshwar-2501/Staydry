// import Image from 'next/image';
// import QuantityControl from '@/components/Quantitycontrol'
// import { notFound } from 'next/navigation';
// // import Button from '@/utilities/Button';
// import { Product } from '@/types/productType';

// import fetchProduct from '@/lib/fetchProduct';
// import LinkCompo from '@/utilities/LinkCompo';
// import Swiper from '@/utilities/SwiperProduct';
// import useFetchProduct from '@/hooks/useFetchProduct';
import ProductDetails from '../ProductDetails';



export default async function Page({ params }: { params: Promise<{ id: string }>; }) {


    const { id } = await params

    return <ProductDetails id={id} />

}

// export default function Page({ params }: { params: { id: string } }) {
//     return <ProductDetails id={params.id} />
// }
  