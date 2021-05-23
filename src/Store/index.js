//#region Imports here :
import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persistedReducer";
import thunk from "redux-thunk";
//#endregion

//#region CreateStore
export const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: [thunk]
    });
//#endregion