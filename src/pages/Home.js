import React from "react";
import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
import "../components/Carousel.css";
import "../components/Cards.css";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Cards />
    </div>
  );
}
