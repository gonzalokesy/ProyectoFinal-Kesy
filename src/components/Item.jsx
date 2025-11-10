import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';
import styles from '../styles/Item.module.css'

function Item({ item }) {
    return (
        <Card className={styles.cardMain} >
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>{item.title}</Card.Title>
                <Card.Text className={styles.cardText}>
                    {item.description}
                </Card.Text>
                <Button className={styles.btnMain} as={Link} to={`/item/${item.id}`}>Ver más</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;