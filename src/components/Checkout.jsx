import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import CartContext from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

function Checkout() {
    const { totalPrice, cart, clearCart } = useContext(CartContext)
    const total = totalPrice
    const itemCart = cart
    const navigate = useNavigate()

    const handleSubmnit = async (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.formName.value
        const phone = form.formPhone.value
        const email = form.formEmail.value

        const order = {
            buyer: { name, phone, email },
            total: total,
            items: itemCart,
            date: new Date()
        }

        try {
            // Dejo esto por aquí por si gusta romper el proceso de finalización de compra para ver el alerta.
            // Para romper quite el comentario y disfrute.
            //throw new Error("¡Error simulado para probar la alerta!");
            const id = await createOrder(order)

            await Swal.fire({
                title: '¡Compra exitosa! 🎉',
                text: `Tu número de orden es: ${id}`,
                icon: 'success',
                confirmButtonText: 'Genial, volver al inicio'
            });

            clearCart();

            navigate('/');

        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al procesar tu compra. Intenta nuevamente.',
                icon: 'error'
            });
        }
    }

    return (
        <Container className="py-5" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4">Finalizar Compra</h2>

            <Form className='border p-3 rounded' onSubmit={handleSubmnit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Gonzalo Kesy"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Ej: 11 1234 5678"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        required
                    />
                </Form.Group>

                <div className="d-grid gap-2 mt-4">
                    <Button variant="primary" size="lg" type="submit">
                        Finalizar Compra
                    </Button>
                </div>
            </Form>
        </Container>
    )
}


export default Checkout;