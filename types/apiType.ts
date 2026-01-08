import { Product } from './productType'
export type apiTypeResponse = {
    products: Product[],
    total: number,
    skip: number,
    limit: number;
}

