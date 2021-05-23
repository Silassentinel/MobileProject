import { persistReducer } from "redux-persist";
import { rootReducer } from "./rootReducer";
import { persistConfig } from "./persistConfig";
export const persistedReducer = persistReducer(persistConfig, rootReducer);