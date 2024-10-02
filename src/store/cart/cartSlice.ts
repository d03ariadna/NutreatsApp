import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../types';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    } as CartState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
            const updatedTotal = action.payload.price;
            state.total = Number((updatedTotal + state.total).toFixed(2));
        },
        editItem: (state, action: PayloadAction<CartItem>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index] = action.payload;
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            state.total -= state.items[index].price;
            state.items.splice(index, 1);
        }
    }
});

export const { addItem, editItem, deleteItem } = cartSlice.actions;