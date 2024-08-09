import { configureStore } from "@reduxjs/toolkit";
import { authSlice, cartSlice, ordersSlice } from ".";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        orders: ordersSlice.reducer,
    }
});
