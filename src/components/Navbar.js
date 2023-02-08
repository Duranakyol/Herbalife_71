import { Img } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <Nav.Link href="/">Anasayfa</Nav.Link>

            <NavDropdown title="Ürünler" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/products">Milkshake</NavDropdown.Item>
              <NavDropdown.Item href="/products">Ögütücüler</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">Hakkimizda</Nav.Link>
            <Nav.Link href="/contact">Iletisim</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default myNavbar;
