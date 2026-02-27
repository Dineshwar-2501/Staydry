
import useCart from "@/hooks/useCart";
import { Product } from "@/types/productType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface cartItem{
//     cartItems:Product[]
//     quantity:number
// }

interface cartState {
    items: Product[] ,
    totalQuantity: number,
    totalPrice: number
}

export const initialState: cartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,

}


const CartSlice = createSlice({
    name: "Carts",
    initialState,
    reducers: {
        addinCart(state, action: PayloadAction<Product>) {


            const existingItem = state.items?.find(item => item.id === action.payload.id) 
            // console.log(existingItem)
            state.totalQuantity = state.totalQuantity + action.payload.quantity


            if (existingItem) {
                existingItem.quantity += action.payload.quantity
            } else {
                state.items.push({ ...action.payload })
                // console.log(state.items)
            }
            state.totalPrice += action.payload.price * action.payload.quantity
        },
        incQty(state, action: PayloadAction<number>) {
            const oneitem = state.items?.find(item => item.id === action.payload)
            if (!oneitem) return
            oneitem.quantity += 1
            state.totalQuantity += 1
            state.totalPrice += oneitem.price
        },
        decQty(state, action: PayloadAction<number>) {
            const oneitem = state.items?.find(item => item.id === action.payload)
            if (!oneitem) return
            oneitem.quantity -= 1
            state.totalQuantity -= 1
            state.totalPrice -= oneitem?.price
            if(oneitem.quantity===0){
                state.items=state.items.filter(i=>i.id !==action.payload)
            }
        },
        removeItem(state, action: PayloadAction<number>) {

            const oneitem = state.items?.find(item => item.id === action.payload)
            if (!oneitem) return
            state.totalQuantity -= oneitem.quantity
            state.totalPrice -= oneitem.price * oneitem.quantity
            state.items = state.items.filter(i => i.id !== action.payload)

        },
        clearCart() {
            return initialState
        },
        HydrateCart(state,action) {
            return action.payload
        }


    }
})
export const { addinCart, incQty, decQty, removeItem, clearCart,HydrateCart } = CartSlice.actions
export default CartSlice.reducer

