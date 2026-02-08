export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export interface Product {
    product_name: string;
    page: string;
    content: string;
}

export interface Query {
    id: string;
    query: string;
    timestamp: Date;
}