import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function ItemCount({ valorInicial }) {
    const [count, setCount] = useState(valorInicial);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="d-flex flex-column align-items-center mt-3 border p-3 rounded" style={{ width: '250px' }}>
            <div className="mb-3 d-flex align-items-center">
                <Button variant="outline-secondary" onClick={handleDecrement}>-</Button>
                <span className="mx-4 fs-5">{count}</span>
                <Button variant="outline-secondary" onClick={handleIncrement}>+</Button>
            </div>
            <Button variant="primary">
                Agregar al Carrito
            </Button>
        </div>
    );
}

export default ItemCount;