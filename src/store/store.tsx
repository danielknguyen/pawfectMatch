import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "store/reducers/rootReducers";

const persistConfig = {
  key: "root",
  storage,
};

// TODO: fix 'any' type error for persistReducer. The issue is that the rootReducer is not compatible with the persistReducer function from redux-persist.
const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type AppSelector = typeof store.getState;
