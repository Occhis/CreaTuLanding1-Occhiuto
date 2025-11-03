import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { db } from '../firebase/config.js';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm.jsx';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, getTotalPrice, clearCart } = useCart();

    const handleCreateOrder = async (userData) => {
        setLoading(true);
        try {
            const order = {
                buyer: userData,
                items: cart,
                total: getTotalPrice(),
                date: Timestamp.now()
            };

            const ordersCollection = collection(db, 'orders');
            
            const docRef = await addDoc(ordersCollection, order);
            
            setOrderId(docRef.id);
            clearCart(); 
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setLoading(false);
        }
    };

    
    if (loading) {
        return <h2 style={{ padding: '2rem', textAlign: 'center' }}>Procesando tu orden...</h2>;
    }

    
    if (orderId) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h1>¡Gracias por tu compra!</h1>
                <p>Tu orden ha sido generada con éxito.</p>
                <p><strong>Tu número de orden es:</strong> {orderId}</p>
            </div>
        );
    }

    
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Checkout</h1>
            <p>Por favor, completa tus datos para finalizar la compra.</p>
            <CheckoutForm onConfirm={handleCreateOrder} />
        </div>
    );
};

export default Checkout;