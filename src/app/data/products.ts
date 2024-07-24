export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description for product 11', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description for product 222', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description for product 3', price: 300 },
    // Add more products as needed
];
