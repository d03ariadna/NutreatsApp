import { createSlice } from '@reduxjs/toolkit';
import { CartState } from '../../types';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    } as CartState,
    reducers: {
        addItem: (state, { payload }) => {
            
        }
    }
});

export const { addItem } = cartSlice.actions;