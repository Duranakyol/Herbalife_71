import { Img } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  BsHouseDoorFill,
  BsPersonCircle,
  BsUpcScan,
  BsFillTelephoneFill,
  BsFileTextFill,
} from "react-icons/bs";

function myNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Img
            className="myLogo"
            src="https://1000logos.net/wp-content/uploads/2019/06/Herbalife.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">
              <BsHouseDoorFill
                style={{ marginBottom: "3px", marginRight: "5px" }}
              />
              Anasayfa
            </Nav.Link>
            <Nav.Link href="/products">
              <BsUpcScan style={{ marginBottom: "3px", marginRight: "5px" }} />
              Ürünler
            </Nav.Link>

            <Nav.Link href="/about">
              <BsFileTextFill
                style={{ marginBottom: "3px", marginRight: "5px" }}
              />
              Hakkimizda
            </Nav.Link>
            <Nav.Link href="/contact">
              <BsFillTelephoneFill
                style={{ marginBottom: "3px", marginRight: "5px" }}
              />
              Iletisim
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Nav.Link href="/login">
              <BsPersonCircle className="personIcon" />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
