import React from "react";
import Person from "../components/Person";
import Form from "../components/Form";
import "../assets/styles/ContactPage.css";
import { Col, Row } from "react-bootstrap";

function ContactPage() {
  return (
    <div className="contactPage">
      <div className="person">
        <h1>DİSTRİBÜTÖRLERİMİZ</h1>
        <Person />
      </div>

      <Row className="iletisim">
        <Col>
          <Form />
        </Col>

        <Col className="harita">
          <h1>HARİTA</h1>

          <div className="map">
            <iframe
              title="herbalifeHarita"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12252.986630694371!2d33.507659!3d39.8463051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4081df401e0b5ca9%3A0x220ae1e456edadb8!2sLive%20Life%20Aktif%20Yasam%20Merkezi!5e0!3m2!1str!2sde!4v1681130255103!5m2!1str!2sde"
              width="600"
              height="550"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactPage;
