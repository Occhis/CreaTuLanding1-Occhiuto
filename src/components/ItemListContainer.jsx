import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import ClipLoader from 'react-spinners/ClipLoader';
import { db } from '../firebase/config'; 
import { collection, getDocs, query, where } from 'firebase/firestore'; 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        
        const productsCollection = collection(db, 'products');

        
        const q = categoryId 
            ? query(productsCollection, where('category', '==', categoryId))
            : productsCollection;

        
        getDocs(q)
            .then((querySnapshot) => {
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsData);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]);

    if (loading) {
        return (
            <div className="ItemListContainer" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
                padding: '2rem'
            }}>
                <ClipLoader color="#646cff" loading={loading} size={50} />
                <p style={{ marginTop: '1rem', color: '#646cff' }}>Cargando productos...</p>
            </div>
        );
    }

    return (
        <div className="ItemListContainer">
            <h1 className="greeting-title">{greeting}</h1>
            {categoryId && <h2>Categoría: {categoryId}</h2>}
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;