import { Orderoption, Sortoption } from "@/types/sortType";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function useFilter() {

    const searchParams = useSearchParams()
    const router = useRouter()

    const order = searchParams.get("order") ?? "asc"
    const sortBy = searchParams.get("sortBy") ?? "title"

    const updateParams = (updates: Record<string, string>) => {
        const params = new URLSearchParams(searchParams.toString())
        Object.entries(updates).forEach(([key, value]) => {
            params.set(key, value)
        })
        router.push(`/products?${params.toString()}`)
    }

    const handelSearch = (value: string) => {

        updateParams({
            "page": "1",
            "q": value
        })
    }
    const handelCategory = (value: string) => {
        updateParams({
            "page": "1",
            "category": value
        })
    }
    const handleSort = (value: Sortoption) => {
        updateParams({
            "page": "1",
            "sortBy": value,
            order
        })
    }
    const handleOrder = (value: Orderoption) => {
        updateParams({
            "page": "1",
            "order": value,
            sortBy
        })
    }




    // const calcSort = (products: Product[], sortBy: Sortoption) => {
    //     return [...products].sortBy((a, b) => {
    //         switch (sortBy) {
    //             case "price-asc":
    //                 return a.price - b.price;
    //             case "price-desc":
    //                 return b.price - a.price;
    //             case "name-asc":
    //                 return a.title.localeCompare(b.title);
    //             case "name-desc":
    //                 return b.title.localeCompare(a.title);
    //             default:
    //                 return 0;
    //         }
    //     })
    // }


    return { handelCategory, handelSearch, handleSort,handleOrder }
}