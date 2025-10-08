import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="ItemCount" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            marginTop: '1rem'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button 
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                    style={{
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: quantity <= 1 ? '#666' : '#646cff',
                        color: 'white',
                        borderRadius: '4px',
                        cursor: quantity <= 1 ? 'not-allowed' : 'pointer'
                    }}
                >
                    -
                </button>
                <span style={{ fontSize: '1.2rem', minWidth: '2rem', textAlign: 'center' }}>
                    {quantity}
                </span>
                <button 
                    onClick={handleIncrement}
                    disabled={quantity >= stock}
                    style={{
                        padding: '0.5rem 1rem',
                        border: 'none',
                        background: quantity >= stock ? '#666' : '#646cff',
                        color: 'white',
                        borderRadius: '4px',
                        cursor: quantity >= stock ? 'not-allowed' : 'pointer'
                    }}
                >
                    +
                </button>
            </div>
            <button 
                onClick={() => onAdd(quantity)}
                disabled={stock === 0}
                style={{
                    padding: '0.75rem 2rem',
                    border: 'none',
                    background: stock === 0 ? '#666' : '#4CAF50',
                    color: 'white',
                    borderRadius: '8px',
                    cursor: stock === 0 ? 'not-allowed' : 'pointer',
                    fontSize: '1rem'
                }}
            >
                {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
            </button>
        </div>
    );
}

export default ItemCount;