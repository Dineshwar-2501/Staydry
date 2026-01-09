
// it will serach the paramas and import here the value as a string but the search paramas will be an object 

import getProducts from '@/lib/product';
import ProductList from '../components/ProductList';

type PageProps={
    searchParams:Promise<{
        page?:string;
    }>
}

export default async function Page({searchParams}:PageProps){
const {page} =await searchParams
const pagenumber=  Number(page)||1;
    const list =await getProducts(pagenumber)
    return(
        <>
        <h1 className='text-4xl text-center font-extrabold text-red-500 p-4 mb-5 '>Shop All</h1>
        <ProductList products={list} page={pagenumber}/>
        </>
    );
}

