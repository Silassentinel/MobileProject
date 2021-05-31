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
                //state.initialState.find(action.payload).delete();
                state.remove(state.find(action.payload));
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
