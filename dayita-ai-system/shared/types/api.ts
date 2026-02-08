export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
}

export interface Message {
    id: string;
    sender: 'user' | 'bot';
    content: string;
    timestamp: Date;
}

export interface Query {
    id: string;
    query: string;
    timestamp: Date;
}