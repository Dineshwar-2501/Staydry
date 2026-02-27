import { configureStore } from "@reduxjs/toolkit"
import cartReducer, { initialState } from './slices/CartSlice'


const loadCart = () => {
    if(typeof window === "undefined") return initialState 
    const stored =localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : initialState
}


export const store = configureStore({
    reducer: { cart: cartReducer },
    // preloadedState: { cart: loadCart() }
})


store.subscribe(()=>{
    localStorage.setItem("cart",JSON.stringify(store.getState().cart))
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch