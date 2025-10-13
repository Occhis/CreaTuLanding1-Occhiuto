import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../data/Products';
import ItemList from './ItemList';
import ClipLoader from 'react-spinners/ClipLoader';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const fetchProducts = categoryId 
            ? getProductsByCategory(categoryId)
            : getProducts();
            
        fetchProducts
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
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
            <h1>{greeting}</h1>
            {categoryId && <h2>Categoría: {categoryId}</h2>}
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;