import React from "react";
import Person from "../components/Person";
import Contact from "../components/Contact";
import "../App.css";

function ContactPage() {
  return (
    <div>
      <div className="person">
        <h1>SÜPERVISÖRLERIMIZ</h1>
      </div>
      <Person />
      <div className="iletisim">
        <Contact />
        <div className="harita">
          <h1>HARITA</h1>
          <iframe
            className="map"
            title="herbalifeHarita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.221565527787!2d33.502566615314294!3d39.846867479435474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4081df01f2473c5b%3A0x2074f9eb797a8caf!2zSGVyYmFsaWZlIEvEsXLEsWtrYWxl!5e0!3m2!1str!2sde!4v1662478892515!5m2!1str!2sde"
            width="700"
            height="640"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
