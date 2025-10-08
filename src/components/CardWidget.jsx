import cart from '../assets/cart.svg';

const CardWidget = () => {
    return (
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            border: '1px solid #646cff',
            borderRadius: '8px'
        }}>
            <img src={cart} alt="cart-widget" width={24} height={24} />
            <span style={{ color: '#fff', fontWeight: 'bold' }}>0</span>
        </div>
    );
}

export default CardWidget;