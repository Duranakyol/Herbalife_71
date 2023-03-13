import React from "react";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import yaseminHanim from "../assets/img/yaseminhanim.jpg";
import süreyyahanim from "../assets/img/süreyyahanim.jpg";
import hacikaplan from "../assets/img/hacikaplan.jpg";
import abdulkadir from "../assets/img/abdulkadir.jpg";

function PersonNeu() {
  const Persons = [
    {
      isim: "Süreyya Akyol",
      telefon: "0538 977 59 96",
      email: "felmas616@gmail.com",
      resim: süreyyahanim,
    },
    {
      isim: "Abdulkadir Akyol",
      telefon: "0538 211 92 45",
      email: "Keydrr71@icloud.com",
      resim: abdulkadir,
    },
    {
      isim: "Yasemin Kaplan",
      telefon: "0530 642 34 59",
      email: "sehribankpln.71@gmail.com",
      resim: yaseminHanim,
    },
    {
      isim: "Haci Kaplan",
      telefon: "0505 920 82 86",
      email: "hasehsu@hotmail.com",
      resim: hacikaplan,
    },
  ];
  return (
    <div className="personContainer">
      {Persons.map((person) => (
        <div className="personNeu">
          <div className="image">
            <img src={person.resim} alt="profile" />
          </div>
          <div className="name">
            <div>
              <b>{person.isim}</b>
            </div>
            <div className="unvan">Süpervisör</div>
            <div className="numara">
              <BsFillTelephoneFill
                style={{ marginRight: "5px", marginBottom: "5px" }}
              />
              {person.telefon}
            </div>
            <div className="email">
              <BsFillEnvelopeFill
                style={{ marginRight: "5px", marginBottom: "5px" }}
              />
              {person.email}
            </div>
          </div>
          <a href="mailto:felmas616@gmail.com">
            <button className="myBtn">E-Mail yaz</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PersonNeu;
