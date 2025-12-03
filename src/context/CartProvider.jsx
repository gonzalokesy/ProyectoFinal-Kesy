import CartContext from './CartContext'
import { useState } from 'react'

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const getCartQuantity = () => cart.reduce(
        (acc, current) => acc + current.count, 0)

    const addToCart = (product) => {
        if (isInCart(product.id)) {
            const newCart = cart.map(prod => {
                if (prod.id === product.id) {
                    return { ...prod, count: prod.count + product.count }
                } else {
                    return prod
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, product])
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => setCart([])

    const totalPrice = cart.reduce((acc, prod) => acc + (prod.price * prod.count), 0);

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const incrementQuantity = (id) => {
        const newCartIncremented = cart.map(prod => {
            if (id === prod.id) {
                if (prod.count < prod.stock) {
                    return { ...prod, count: prod.count + 1 }
                } else {
                    return prod
                }
            } else {
                return prod
            }
        })
        setCart(newCartIncremented)
    }

    const decrementQuantity = (id) => {
        const newCartIncremented = cart.map(prod => {
            if (id === prod.id) {
                return { ...prod, count: prod.count - 1 }
            } else {
                return prod
            }
        })
        setCart(newCartIncremented)
    }


    return (
        <CartContext.Provider value={{ getCartQuantity, addToCart, cart, clearCart, totalPrice, removeItem, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider