import { combineReducers } from "@reduxjs/toolkit";
// import { ProductsSliceReducer as storeLocal } from "./slices/productsSlice";
import { reducer as getAllProductsReducer } from "./APIReq/FakeStoreGetAllProducts";
import {reducer as getProductViaIdReducer} from "./APIReq/FakeStoreGetProductViaID";
//#region Root reducer
export const rootReducer = combineReducers(
    {
        //localproducts: storeLocal,
        getAllProducts: getAllProductsReducer,
        getProductViaId: getProductViaIdReducer
    });
//#endregion