import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : (state,action) =>{
            console.log("action",action)
            state.items.push(action.payload)
        },
        clearCart : (state)=>{
            state.items.length=0;
        },
        removeItem: (state,action) =>{
            console.log("items",current(state.items))
            state.items = current(state.items).filter(item =>item?.card?.info?.id !== action.payload)
        }

    }
})

export const {addItem, clearCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
