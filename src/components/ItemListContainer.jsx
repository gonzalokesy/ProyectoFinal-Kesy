import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemList from './ItemList'

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const url = categoryId
            ? `https://dummyjson.com/products/category/${categoryId}`
            : 'https://dummyjson.com/products'

        fetch(url)
            .then(res => res.json())
            .then(data => setProductos(data.products))
            .catch(e => console.error(e));

    }, [categoryId])
    return (
        <ItemList productos={productos} />
    )
}

export default ItemListContainer