// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { productsApi } from "./productsApi";
// import productsReducer, { productsFetch } from "./productsSlice";
// import cartReducer, { getTotals } from "./cartSlice";
// import userSlice from "./userSlice";
// import authSlice from "./authSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   products: productsReducer,
//   cart: cartReducer,
//   userData: userSlice,
//   authData: authSlice,
// });
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);

// store.dispatch(productsFetch());
// store.dispatch(getTotals());
