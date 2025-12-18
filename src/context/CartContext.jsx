import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // PERSISTENCIA: Inicializa con lo que haya en localStorage o array vacío
    const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('cart');
        return localData ? JSON.parse(localData) : [];
    });

    // PERSISTENCIA: Guarda en localStorage cada vez que el cart cambie
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            });
            setCart(updatedCart);
        }
    };

    // NUEVA FUNCIÓN: Restar una unidad
    const decreaseQuantity = (itemId) => {
        const updatedCart = cart.map(prod => {
            if (prod.id === itemId && prod.quantity > 1) {
                return { ...prod, quantity: prod.quantity - 1 };
            }
            return prod;
        });
        setCart(updatedCart);
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => setCart([]);

    const isInCart = (itemId) => cart.some(prod => prod.id === itemId);

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ 
            cart, addItem, removeItem, clearCart, getTotalPrice, getTotalQuantity, decreaseQuantity 
        }}>
            {children}
        </CartContext.Provider>
    );
};