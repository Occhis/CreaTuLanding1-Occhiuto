import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const Cart = () => {
    const { cart, clearCart, removeItem, getTotalPrice } = useCart();

    
    if (cart.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para verlos aquí.</p>
                <Link to="/" className="btn-primary">Volver al catálogo</Link>
            </div>
        );
    }

    
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Tu Carrito</h1>
            {cart.map(item => (
                <div key={item.id} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    borderBottom: '1px solid #ccc', 
                    padding: '1rem 0' 
                }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                    <h4>{item.name}</h4>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} className="btn-secondary">Eliminar</button>
                </div>
            ))}
            
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <h3>Total de la compra: ${getTotalPrice()}</h3>
                <button onClick={clearCart} className="btn-secondary" style={{ marginRight: '1rem' }}>
                    Limpiar Carrito
                </button>
                <Link to="/checkout" className="btn-primary">
                    Continuar compra
                </Link>
            </div>
        </div>
    );
};

export default Cart;