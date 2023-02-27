import React from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import "../assets/styles/Carousel.css";
import "../assets/styles/Cards.css";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Cards />
    </div>
  );
}
