import CartWidget from "./CartWidget"
import Logo from "../assets/images/logo.png"
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <header className={styles.encabezado}>
            <img className={styles.logo} src={Logo} alt="Logo de la tienda" />
            <nav>
                <ul className={styles.navList}>
                    <li><a className={styles.navLink} href="">Procesadores</a></li>
                    <li><a className={styles.navLink} href="">Tarjetas de video</a></li>
                    <li><a className={styles.navLink} href="">Motherboards</a></li>
                </ul>
            </nav>
            <CartWidget />
        </header >
    )
}

export default NavBar