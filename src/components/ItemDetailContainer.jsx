import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        const url = itemId
            ? `https://dummyjson.com/products/${itemId}`
            : 'https://dummyjson.com/products'

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(e => console.error(e));

    }, [itemId])

    return (
        item ? <ItemDetail item={item} /> : <p>Cargando</p>
    )
}

export default ItemDetailContainer