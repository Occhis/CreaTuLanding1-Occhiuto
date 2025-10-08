import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className="Item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to={`/item/${product.id}`}>
                <button className="btn-primary" style={{ marginTop: 'auto' }}>
                    Ver detalle
                </button>
            </Link>
        </div>
    );
}

export default Item;