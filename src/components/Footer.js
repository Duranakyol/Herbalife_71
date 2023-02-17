import { Img } from "@chakra-ui/react";
import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./Footer.css";
import {
  FaHome,
  FaMailBulk,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="footerRow">
        <Col className=" links">
          <Navbar.Brand href="/">
            <Img
              className="myLogo"
              src="https://1000logos.net/wp-content/uploads/2019/06/Herbalife.png"
            />
          </Navbar.Brand>
          <div className="text">HERBALIFE_71</div>
        </Col>
        <Col className="mittel">
          <h6>
            <FaHome size={20} style={{ marginRight: "2rem" }} />
            <span> Hüseyin Kahya Mah. Rauf Denktas Bulvari, E1</span>
          </h6>
          <div>
            <h6>
              <FaPhone size={20} style={{ marginRight: "2rem" }} />
              <span> +90 538 977 59 66</span>
            </h6>
          </div>
          <div>
            <h6>
              <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
              <a href="mailto:felmas616@gmail.com">felmas616@gmail.com</a>
            </h6>
          </div>
        </Col>
        <Col className="rechts">
          <h5>Sosyal Medyadan bizi takip edebilirsiniz.</h5>
          <h6>Tüm Haklari Saklidir</h6>
          <div>
            <a href="https://www.instagram.com/fitbayanlafitol/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://">
              <FaFacebook />
            </a>
            <a href="https://">
              <FaTwitter />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
