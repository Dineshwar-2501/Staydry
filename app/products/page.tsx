
// it will serach the paramas and import here the value as a string but the search paramas will be an object 

import getProducts from '@/lib/product';
import ProductList from './ProductList';
import sortProduct from '@/lib/sortProduct';

type PageProps={
    searchParams:Promise<{
        page?:string;
        sort?:Sortoption
    }>
}
type Sortoption ="price-asc"|"price-desc"|"name-asc"

export default async function Page({searchParams}:PageProps){
const {page,sort} =await searchParams
const currentpage=  Number(page)||1;
const Pagesort:Sortoption= sort??"price-asc";

    const prod =await getProducts(currentpage)
    const sortedprod= sortProduct(prod,Pagesort)
    return(
        <>
        <h1 className='text-4xl text-center font-extrabold text-red-500 p-4 mb-5 '>Shop All</h1>
        <ProductList page={currentpage} sorted={sortedprod} />
        </>
    );
}

