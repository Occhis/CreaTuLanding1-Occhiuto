import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    console.log(
      `Se agregaron ${quantity} unidades de ${product.name} al carrito`
    );
  };

  return (
    <div className="ItemDetail">
      <img src={product.image} alt={product.name} />
      <div className="item-detail-info">
        <h1>{product.name}</h1>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-stock">
          <strong>Stock disponible:</strong> {product.stock}
        </p>

        <div className="item-detail-actions">
          {quantityAdded === 0 ? (
            <ItemCount stock={product.stock} onAdd={handleOnAdd} />
          ) : (
            <button className="btn-primary full-width">Finalizar compra</button>
          )}

          <Link to="/" className="btn-secondary full-width">
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;