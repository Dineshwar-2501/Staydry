
// it will serach the paramas and import here the value as a string but the search paramas will be an object 

import fetchProducts from '@/lib/fetchProducts';
import ProductList from './ProductList';
// import sortProduct from '@/lib/sortProduct';
import { products } from '@/data/products';

import { Sortoption } from '@/types/sortType';
type PageProps = {
    searchParams: Promise<{
        page?: string;
        sort?: Sortoption
        category?: string
    }>
}



export default async function Page({ searchParams }: PageProps) {
    // const {sortProduct,fetchSearch} =useFilter()
    const { page, sort, category } = await searchParams
    const currentpage = Number(page) || 1;
    const Pagesort: Sortoption = sort ?? "price-asc";

    // const prod = await fetchProducts(currentpage)
    const prod= products

    
    // const sortedprod = sortProduct(prod.products, Pagesort)

    const totalpages = Math.ceil(prod.total / 10)
    console.log(totalpages, prod.total, prod.limit)

    const range = 2
    const start = Math.max(1, currentpage - range) //5=> start=3 
    const end = Math.min(totalpages, currentpage + range) //5=> end=7
    const pagesarr = Array.from({ length: end - start + 1 }, (_, i) => i + start)
    return (
        <section className=' px-4 lg:px-10 mx-auto mt-30'>
            <h1 className='text-5xl  font-bold text-orange-700 py-4  '>Shop All</h1>
            <ProductList page={currentpage} sort={Pagesort} Apiproduct={prod.products} totalPages={Number(prod.total)} arrayPages={pagesarr} category={category} />
        </section>
    );
}

