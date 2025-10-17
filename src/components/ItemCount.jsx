import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        if (quantity < stock) setQuantity(q => q + 1);
    };
    const handleDecrement = () => {
        if (quantity > 1) setQuantity(q => q - 1);
    };

    return (
        <div className="item-count">
            <div className="count-controls">
                <button className="count-btn" onClick={handleDecrement} disabled={quantity <= 1}>-</button>
                <span className="count">{quantity}</span>
                <button className="count-btn" onClick={handleIncrement} disabled={quantity >= stock}>+</button>
            </div>

            <div className="item-count-actions">
                <button
                    className="btn-primary"
                    onClick={() => onAdd(quantity)}
                    disabled={stock === 0}
                >
                    {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                </button>

                <Link to="/" className="btn-secondary">
                    ← Volver al catálogo
                </Link>
            </div>
        </div>
    );
};

export default ItemCount;