import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add(state,action){
            const { payload } = action
            const total = state.total+ payload.price ;
            const updatedCart = state.cartList.concat(payload)
            return {...state,total,cartList:updatedCart}
        },
        remove(state,action){
            const { payload } = action
            const total = state.total+ payload.price ;
            const updatedCart = state.cartList.filter(item=> item.id !== payload.id)
            return {...state,total,cartList:updatedCart}
        }
    }
})

export const { add,remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;