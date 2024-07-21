import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import AuthSlice from "./AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";
import CartSlice from "./CartSlice";
import OrderSlice from "./OrderSlice";

export const rootReducer = combineReducers({
    product: userReducer,
    auth: AuthSlice,
    cart:CartSlice,
    order:OrderSlice
});

const persistConfig = {
    key: 'root',
    storage,
    version:1
};

const persistedReducer = persistReducer(persistConfig, rootReducer);



export const store=configureStore({

reducer:persistedReducer,
middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware({serializableCheck:false})
}
});

export const persistor= persistStore(store)