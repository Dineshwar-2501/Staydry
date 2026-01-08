import {Product} from '@/types/productType';
import ProductCard from './ProductCard';

type productProp={
    products:Product[]
}

export default async function ProductList({products}:productProp){
    return(
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-5'>
        {products.map((product)=>(
            <div key={product.id}>
                <ProductCard product={product}/>
            </div>
        ))}
        </div>
    )
}