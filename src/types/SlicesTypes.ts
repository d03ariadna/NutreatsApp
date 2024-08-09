import { CartItem, Order, User } from ".";
import { store } from "../store";


export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: User | null;
    loading: boolean;
    errorMessage: string | null;
}


export interface CartState {
    items: CartItem[];
    total: number;
}


export interface OrdersState {
    orders: Order[];
    loading: boolean;
    errorMessage: string | null;
}


// Store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;