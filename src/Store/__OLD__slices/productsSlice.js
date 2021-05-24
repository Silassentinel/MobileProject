//#region imports here:
import { createSlice } from "@reduxjs/toolkit";
//#endregion

//#region if async thunk here
//#endregion

//#region slice here
const ProductsSlice = createSlice(
    {
        name: "products",
        initialState: [
            product={
            id: "",
            title: "",
            price: 0,
            category: "",
            image: ""
        }],
        reducers:
        {
            remove: (state, action) => 
            {
                
            },
            add: (state, action) => 
            {
                state.push(action.payload);
            },
            clear: (state, action) => 
            {
                state = [];
            }
        }
    });
//#endregion

//#region export here:
export const { remove, add, clear } = ProductsSlice.actions;
export const ProductsSliceReducer = ProductsSlice.reducer;
//#endregion
