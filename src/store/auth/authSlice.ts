import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User } from '../../types';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        token: null,
        user: null,
        loading: false,
        errorMessage: null
    } as AuthState,
    reducers: {
        onLogin: (state, action: PayloadAction<User>) => {
            localStorage.setItem('token', action.payload.id);
            state.isAuthenticated = true;
            state.token = localStorage.getItem('token');
            state.user = action.payload;
            state.loading = false;
            state.errorMessage = null;
        },
        onLogout: (state, action: PayloadAction<string | null>) => {
            localStorage.clear();
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.loading = false;
            state.errorMessage = action.payload ? action.payload : null;
        },
        onCheckingAuth: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
                state.isAuthenticated = true;
                state.token = token;
            } else {
                state.isAuthenticated = false;
                state.token = null;
            }
        }
    }
});

export const { onLogin, onLogout, onCheckingAuth } = authSlice.actions;