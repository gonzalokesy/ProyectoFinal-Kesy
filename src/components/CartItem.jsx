import styles from '../styles/CartItem.module.css';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartItem({ item }) {
    const { removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);

    return (
        <div className={`row align-items-center py-3 ${styles.cartRow}`}>
            {/* Imagen del producto */}
            <div className="col-2 text-center">
                <img src={item.thumbnail} alt={item.title} className={styles.productImage} />
            </div>

            {/* Titulo y ctaegoria del producto */}
            <div className="col-3">
                <h5 className="mb-0 fs-6">{item.title}</h5>
                <small className="text-muted">{item.category}</small>
            </div>

            {/* Cantidad */}
            <div className="col-3 text-center">
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <Button variant="outline-secondary" size="sm" onClick={() => decrementQuantity(item.id)} disabled={item.count <= 1}>-</Button>
                    <span className="fw-bold">{item.count}</span>
                    <Button variant="outline-secondary" size="sm" onClick={() => incrementQuantity(item.id)} disabled={item.count >= item.stock}>+</Button>
                </div>
            </div>

            {/* Precio unitario y subtotal */}
            <div className="col-2 text-center">
                <div className="fw-bold">${item.price * item.count}</div>
                <small className="text-muted">${item.price} c/u</small>
            </div>

            {/* Botón para el tacho de basur acon SVG de w3school */}
            <div className="col-2 text-center">
                <button
                    className="btn btn-link p-0"
                    onClick={() => removeItem(item.id)}
                    title="Eliminar producto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`bi bi-trash ${styles.trashIcon}`} viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default CartItem;