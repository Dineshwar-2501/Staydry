
// it will serach the paramas and import here the value as a string but the search paramas will be an object 

import getProducts from '@/lib/product';
import ProductList from './ProductList';
import sortProduct from '@/lib/sortProduct';

type PageProps = {
    searchParams: Promise<{
        page?: string;
        sort?: Sortoption
    }>
}
type Sortoption = "price-asc" | "price-desc" | "name-asc"

export default async function Page({ searchParams }: PageProps) {
    const { page, sort} = await searchParams
    const currentpage = Number(page) || 1;
    const Pagesort: Sortoption = sort ?? "price-asc";

    const prod = await getProducts(currentpage)
    const sortedprod = sortProduct(prod.products, Pagesort)

    const totalpages=Math.ceil(prod.total/prod.limit )
    const pagesarr=Array.from({length:totalpages},(_,i)=>i+1)
    return (
        <section className='m-2 container px-10 mx-auto'>
            <h1 className='text-4xl text-center font-extrabold text-red-500 p-4 mb-5 '>Shop All</h1>
            <ProductList arrpage={pagesarr} page={currentpage} sorted={sortedprod} />
        </section>
    );
}

