import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import ClipLoader from 'react-spinners/ClipLoader';
import { db } from '../firebase/config'; 
import { doc, getDoc } from 'firebase/firestore'; 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        
        const docRef = doc(db, 'products', itemId);

        
        getDoc(docRef)
            .then(docSnap => {
                if (docSnap.exists()) {
                    console.log("Producto encontrado:", docSnap.data());
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("Producto no encontrado");
                    setProduct(null); 
                }
            })
            .catch(error => {
                console.error('Error cargando producto:', error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [itemId]);

    
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