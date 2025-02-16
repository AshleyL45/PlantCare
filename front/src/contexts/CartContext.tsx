import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {Product} from '../@types/product';

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
}

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addToCart: () => {
    },
});

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cartItems, setCartItems] = useState<Product[]>(() => {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log('Cart updated:', cartItems);
    }, [cartItems]);

    const addToCart = (product: Product) => {
        console.log('Adding product to cart:', product);
        setCartItems(prev => [...prev, product]);
    };

    return (
        <CartContext.Provider value={{cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    );
};