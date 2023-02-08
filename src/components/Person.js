import React from "react";
import profilePhoto from "./profilePhoto.jpg";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

function PersonNeu() {
  const Persons = [
    {
      isim: "Süreyya Akyol",
      telefon: "0538 977 59 96",
      email: "felmas61@gmail.com",
      resim:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      isim: "Büsra Pekin",
      telefon: "0538 977 59 96",
      email: "felmas61@gmail.com",
      resim:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      isim: "Fahriye Evcen",
      telefon: "0538 977 59 96",
      email: "felmas61@gmail.com",
      resim:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      isim: "Seda Bakan",
      telefon: "0538 977 59 96",
      email: "felmas61@gmail.com",
      resim:
        "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
  ];
  return (
    <div className="personContainer">
      {Persons.map((person) => (
        <div className="personNeu">
          <div className="image">
            <img src={profilePhoto} alt="profile" />
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
          <button className="myBtn">E-Mail yaz</button>
        </div>
      ))}
    </div>
  );
}

export default PersonNeu;
