import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemList from './ItemList'
import { getItems, getProductsByCategory } from '../firebase/db'
import Loader from './Loader'

function ItemListContainer() {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory(categoryId, setProductos) : getItems(setProductos)

        asyncFunc
            .then(() => {
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })

    }, [categoryId])
    return (
        loading ? <Loader /> : <ItemList productos={productos} />
    )
}

export default ItemListContainer