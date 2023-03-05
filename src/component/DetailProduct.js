import { Container, Row, Col } from "react-bootstrap";

function DetailProduct(props) {
    const product = props.detail;
    console.log(product);
    return(
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
    );
}

export default DetailProduct;