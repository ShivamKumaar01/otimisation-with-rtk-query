import { configureStore } from '@reduxjs/toolkit'
import DataFetchingReducer from './slice'
import {productApi} from "./product-api"


export const store = configureStore({
  reducer: {
    // todos:todoReducer
   [productApi.reducerPath]:productApi.reducer,
    // apiCall:DataFetchingReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productApi.middleware)
})