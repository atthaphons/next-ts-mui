import React, { createContext, useState, ReactNode, FC } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductContextProps {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const ProductContext = createContext<ProductContextProps>({
    products: [],
    setProducts: () => { },
});

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
