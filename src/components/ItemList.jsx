import Item from "./Item"
import styles from "../styles/ItemList.module.css"


function ItemList({ productos }) {
    return (
        <main>
            <section className={styles.contenedorGrid}>
                {productos.map((product) => (
                    <Item key={product.id} item={product} />
                ))}
            </section>
        </main>
    )
}

export default ItemList