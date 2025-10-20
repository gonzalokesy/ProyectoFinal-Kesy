import styles from './ItemListContainer.module.css'

function ItemListContainer({ mensaje }) {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.mainSection}>
                <p>{mensaje}</p>
            </section>
        </main>
    )
}

export default ItemListContainer