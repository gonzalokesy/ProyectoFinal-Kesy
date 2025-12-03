import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'
import { getItem } from '../firebase/db'
import Loader from './Loader'

function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const { itemId } = useParams()

    useEffect(() => {
        getItem(itemId, setItem)

    }, [itemId])

    return (
        item ? <ItemDetail item={item} /> : <Loader />
    )
}

export default ItemDetailContainer