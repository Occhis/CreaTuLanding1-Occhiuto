import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (product, quantity) => {
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };


    const clearCart = () => {
        setCart([]);
    };


    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            getTotalQuantity,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    return useContext(CartContext);
};