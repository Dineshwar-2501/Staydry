type Sortoption =""|"price-asc"|"price-desc"|"name-asc"
import { Product } from "@/types/productType";
export default function sortProduct(products: Product[], sort: Sortoption) {
    return [...products].sort((a, b) => {
        switch (sort) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "name-asc":
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    })
}