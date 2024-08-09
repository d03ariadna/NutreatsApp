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
    product: string;
    quantity: number;
    measure: 'lb' | 'kg' | 'gr' | 'oz';
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