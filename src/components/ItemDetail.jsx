import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        console.log(`Se agregaron ${quantity} unidades de ${product.name} al carrito`);
    };

    return (
        <div className="ItemDetail">
            <img src={product.image} alt={product.name} />
            <div className="item-detail-info">
                <h1>{product.name}</h1>
                <p className="item-detail-price">${product.price}</p>
                <p className="item-detail-description">{product.description}</p>
                <p className="item-detail-stock"><strong>Stock disponible:</strong> {product.stock}</p>
                
                {quantityAdded === 0 ? (
                    <ItemCount 
                        stock={product.stock} 
                        onAdd={handleOnAdd}
                    />
                ) : (
                    <div>
                        <p style={{ color: '#4CAF50', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            ¡Agregaste {quantityAdded} unidades al carrito!
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/">
                                <button className="btn-secondary" style={{
                                    background: 'transparent',
                                    color: '#646cff',
                                    border: '1px solid #646cff',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '8px',
                                    cursor: 'pointer'
                                }}>
                                    Seguir comprando
                                </button>
                            </Link>
                            <button className="btn-primary">
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                )}
                
                <Link to="/" style={{ 
                    marginTop: '2rem', 
                    display: 'inline-block', 
                    color: '#646cff',
                    textDecoration: 'none'
                }}>
                    ← Volver al catálogo
                </Link>
            </div>
        </div>
    );
}

export default ItemDetail;