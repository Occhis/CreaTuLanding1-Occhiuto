import cart from '../assets/cart.png';
import { useCart } from '../context/CartContext.jsx'; 
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    return (
        <Link to="/cart" style={{ textDecoration: 'none' }}>
            <div style={{ 
                
                display: totalQuantity > 0 ? 'flex' : 'none', 
                alignItems: 'center', 
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                border: '1px solid #646cff',
                borderRadius: '8px'
            }}>
                <img src={cart} alt="cart-widget" width={24} height={24} />
                <span style={{ color: '#fff', fontWeight: 'bold' }}>
                    {totalQuantity}
                </span>
            </div>
        </Link>
    );
}

export default CardWidget;