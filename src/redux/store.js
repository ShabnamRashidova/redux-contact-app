import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../features/app/contactSlice'
export const store=configureStore({
    reducer:{
        contacts:contactReducer
    }
})