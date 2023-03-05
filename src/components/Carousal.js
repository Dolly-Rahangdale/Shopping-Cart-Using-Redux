// https://unsplash.com/explore
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UncontrolledExample() {
  return (
    <Carousel style={{ objectFit:"contain !important" }}>

      <Carousel.Item>
        <img
          className="d-block w-100" style={{ height: "33rem", filter:"brightness(40%)" }}
          src="../images/ecommerce.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shopping through Credit Cards</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Form className="d-flex" style={{ zIndex: 10 }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success" >Search</Button> */}
            <Button variant="danger">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../images/shopping.jpg" style={{ height: "31rem", filter:"brightness(40%)"  }}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Ecommerce Shopping</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Form className="d-flex" style={{ zIndex: 10 }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{ height: "31rem", filter:"brightness(40%)"  }}
          src="../images/stock.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Stock Market</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Form className="d-flex" style={{ zIndex: 10 }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>        
          </Form>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}

export default UncontrolledExample;