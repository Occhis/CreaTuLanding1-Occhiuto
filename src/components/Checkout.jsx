import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { db } from '../firebase/config.js';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import CheckoutForm from './CheckoutForm.jsx';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [summary, setSummary] = useState(null); // Para el comprobante
    const { cart, getTotalPrice, clearCart } = useCart();

    const handleCreateOrder = async (userData) => {
        if (cart.length === 0) return alert("Tu carrito está vacío");

        setLoading(true);
        const order = {
            buyer: userData,
            items: cart,
            total: getTotalPrice(),
            date: Timestamp.now()
        };

        try {
            const ordersCollection = collection(db, 'orders');
            const docRef = await addDoc(ordersCollection, order);
            setSummary(order); // Guardamos la info para mostrarla
            setOrderId(docRef.id);
            clearCart(); 
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <h2>Procesando su pedido...</h2>;

    if (orderId) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', border: '2px solid green' }}>
                <h1>¡Compra confirmada!</h1>
                <p>ID de pedido: <strong>{orderId}</strong></p>
                <hr />
                <div style={{ textAlign: 'left', display: 'inline-block' }}>
                    <h3>Comprobante para {summary.buyer.name}:</h3>
                    {summary.items.map(i => <p key={i.id}>{i.name} x{i.quantity} - ${i.price * i.quantity}</p>)}
                    <h4>Total Pagado: ${summary.total}</h4>
                </div>
                <br />
                <Link to="/" className="btn-primary">Volver al Inicio</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Finalizar Compra</h1>
            <CheckoutForm onConfirm={handleCreateOrder} />
        </div>
    );
};

export default Checkout;