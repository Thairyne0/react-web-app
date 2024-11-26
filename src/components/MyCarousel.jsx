import "../asset/css/myCarousel.css";
import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import estateImage1 from "../asset/img/estate1.jpeg";
import estateImage2 from "../asset/img/estate2.jpeg";
import estateImage3 from "../asset/img/estate3.jpg";
import { Container } from "react-bootstrap";

class MyCarousel extends Component {
  render() {
    return (
      <Container fluid className=" d-none d-sm-block">
        <Carousel>
          <Carousel.Item>
            <img
              src={estateImage1}
              alt="estate1"
              className="carousel img-fluid"
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h3>Casa a Montragone</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={estateImage2} alt="carousel estate2" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h3>Casa a Crispano</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={estateImage3} alt="carousel estate3" />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h3>Casa a Caivano</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default MyCarousel;
