import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/products';
import ItemDetail from './ItemDetail';
import ClipLoader from 'react-spinners/ClipLoader';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);
        console.log("Buscando producto ID:", itemId); // ← Debug
        
        getProductById(itemId)
            .then(data => {
                console.log("Producto encontrado:", data); // ← Debug
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error cargando producto:', error);
                setLoading(false);
            });
    }, [itemId]);

    // Loading state
    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '50vh',
                padding: '2rem'
            }}>
                <ClipLoader color="#646cff" loading={loading} size={50} />
                <p style={{ marginTop: '1rem', color: '#646cff' }}>Cargando producto...</p>
            </div>
        );
    }

    // Si no encontró el producto
    if (!product) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h2>Producto no encontrado</h2>
                <p>El producto con ID {itemId} no existe.</p>
            </div>
        );
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;