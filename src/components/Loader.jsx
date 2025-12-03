import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <Spinner animation="border" variant="primary" role="status">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </div>
    );
}

export default Loader;