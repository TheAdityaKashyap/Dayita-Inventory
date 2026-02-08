export interface Product {
    id: string;
    product_name: string;
    page: string;
    content: string;
}

export interface ProductResponse {
    products: Product[];
    total: number;
}

export interface ProductQuery {
    searchTerm: string;
    page: number;
    limit: number;
}