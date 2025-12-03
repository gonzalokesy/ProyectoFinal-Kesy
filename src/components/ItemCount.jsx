import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function ItemCount({ item }) {
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext)

    const handleIncrement = () => {
        if (count < item.stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handledAddToCart = () => addToCart({ ...item, count })

    return (
        <div className="d-flex flex-column align-items-center mt-3 border p-3 rounded" style={{ width: '250px' }}>
            <div className="mb-3 d-flex align-items-center">
                <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
                <span className="mx-4 fs-5">{count}</span>
                <Button variant="outline-secondary" onClick={handleIncrement} disabled={count >= item.stock}>+</Button>
            </div>
            <small className="text-muted mb-2">Stock disponible: {item.stock}</small>
            <Button variant="primary" onClick={handledAddToCart}>
                Agregar al Carrito
            </Button>
        </div>
    );
}

export default ItemCount;