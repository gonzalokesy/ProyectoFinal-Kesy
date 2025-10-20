import Badge from '@mui/joy/Badge';
import styles from './CartWidget.module.css'
function CartWidget() {
    return (
        <div className={styles.cartContainer}>
            <Badge badgeContent={2}>
                <figure className={styles.cartIcon}>🛒</figure>
            </Badge>
        </div>
    )
};

export default CartWidget