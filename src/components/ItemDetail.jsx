import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

function ItemDetail({ item }) {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <img src={item.thumbnail} alt={item.title} className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2>{item.title}</h2>
                    <p className="text-muted">{item.category}</p>
                    <p>{item.description}</p>
                    <h3 className="text-primary">${item.price}</h3>
                    <ItemCount valorInicial={0} />
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;