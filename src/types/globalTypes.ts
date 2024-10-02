import { ProductCardProps } from ".";

export interface User {
    id: string;
    name: string;
    email: string;
    photo: string | null;
    // password: string;
    address?: string | null;
    phone?: string | null;
}


export interface CartItem {
    id: string;
    product: ProductCardProps;
    quantity: number;
    price: number;
}

export interface Order {
    id: string;
    user: User;
    items: CartItem[];
    total: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: string;
}