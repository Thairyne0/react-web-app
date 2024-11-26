import { Component } from "react";
import products from "../data/scifi.json";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

class MyCards extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5 mb-5 row-gap-3 justify-content-center">
          {products.slice(0, 8).map((product) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={product.asin}
                className="d-flex justify-content-center"
              >
                <Card className="h-100">
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.category}</Card.Text>
                    <Button variant="primary">{product.price}$</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default MyCards;
