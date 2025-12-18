import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, clearCart, removeItem, getTotalPrice, addItem, decreaseQuantity } = useCart();

    if (cart.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn-primary">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Tu Carrito</h1>
            {cart.map(item => (
                <div key={item.id} style={{ 
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                    borderBottom: '1px solid #ccc', padding: '1rem 0' 
                }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                    <h4>{item.name}</h4>
                    
                    {/* CONTROLES DE CANTIDAD */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={() => decreaseQuantity(item.id)} className="btn-small">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addItem(item, 1)} className="btn-small">+</button>
                    </div>

                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} className="btn-danger">Eliminar Todo</button>
                </div>
            ))}
            
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <h3>Total: ${getTotalPrice()}</h3>
                <button onClick={clearCart} className="btn-secondary">Limpiar Carrito</button>
                <Link to="/checkout" className="btn-primary">Finalizar Compra</Link>
            </div>
        </div>
    );
};

export default Cart;