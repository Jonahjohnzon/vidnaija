import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./counter/dataslice"

export const store = configureStore({
  reducer: {
    data: dataReducer
  },
})