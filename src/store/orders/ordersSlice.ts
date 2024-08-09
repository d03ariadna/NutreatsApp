import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order, OrdersState } from '../../types';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        loading: false,
        errorMessage: null
    } as OrdersState,
    reducers: {
        createOrder: (state, action: PayloadAction<Order> ) => {
            state.orders.push(action.payload);
        }
    }
});

export const { createOrder } = ordersSlice.actions;