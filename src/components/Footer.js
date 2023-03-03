import { Img } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "react-bootstrap";
import "../assets/styles/Footer.css";
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
    <div className="footerRow">
      <div className=" links">
        <Navbar.Brand href="/">
          <Img
            className="myLogo"
            src="https://1000logos.net/wp-content/uploads/2019/06/Herbalife.png"
          />
        </Navbar.Brand>
        <div className="text">HERBALIFE_71</div>
      </div>
      <div className="mittel">
        <h6>
          <FaHome size={20} style={{ marginRight: "2rem" }} />
          <span> Hüseyin Kahya Mah. Rauf Denktas Bulvari/E1</span>
        </h6>

        <h6>
          <FaPhone size={20} style={{ marginRight: "2rem" }} />
          <span> +905389775966</span>
        </h6>

        <h6>
          <FaMailBulk size={20} style={{ marginRight: "2rem" }} />
          <a href="mailto:felmas616@gmail.com">felmas616@gmail.com</a>
        </h6>
      </div>
      <div className="rechts">
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
      </div>
    </div>
  );
}

export default Footer;
