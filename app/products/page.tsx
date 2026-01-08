// import {Product} from '@/types/productType';
import getProducts from '@/lib/product';
import ProductList from '../components/ProductList';

export default async function Page(){
    const list =await getProducts()
    return(
        <>
        <h1 className='text-4xl text-center font-extrabold text-red-500 p-4 mb-5 '>Shop All</h1>
        <ProductList products={list}/>
        </>
    );
}

