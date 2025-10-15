import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className="ItemList" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '2.5rem',
            padding: '2rem',
            width: '100%'
        }}>
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemList;