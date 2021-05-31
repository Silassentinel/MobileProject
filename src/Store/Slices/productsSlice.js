//#region imports here:
import { createSlice } from "@reduxjs/toolkit";
//#endregion

//#region if async thunk here
//#endregion

//#region slice here
const ProductsSlice = createSlice(
    {
        name: "products",
        initialState: [],
        reducers:
        {
            remove: (state, action) => 
            {
                return state.filter(element => element.id !== action.payload.id);
            },
            add: (state, action) =>{state.push(action.payload)},
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
