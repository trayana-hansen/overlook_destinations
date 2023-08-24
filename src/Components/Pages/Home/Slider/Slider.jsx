import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.scss";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src={require("../../../../Assets/Images/center-square-wroclaw.jpg")}
    onDragStart={handleDragStart}
    alt="center-square-wroclaw"
  />,
  <img
    src={require("../../../../Assets/Images/city-houses-reykjavik.jpg")}
    onDragStart={handleDragStart}
    alt="city-houses-reykjavik"
  />,
  <img
    src={require("../../../../Assets/Images/fishmarket-hamborg.jpg")}
    onDragStart={handleDragStart}
    alt="fishmarket-hamborg"
  />,
  <img
    src={require("../../../../Assets/Images/frankfurt-skyline-germany.jpg")}
    onDragStart={handleDragStart}
    alt="frankfurt-skyline-germany"
  />,
  <img
    src={require("../../../../Assets/Images/gdansk-center-church-poland.jpg")}
    onDragStart={handleDragStart}
    alt="gdansk-center-church-poland"
  />,
  <img
    src={require("../../../../Assets/Images/harbour-gothenburg.jpg")}
    onDragStart={handleDragStart}
    alt="harbour-gothenburg"
  />,
  <img
    src={require("../../../../Assets/Images/harbour-tromso.jpg")}
    onDragStart={handleDragStart}
    alt="harbour-tromso"
  />,
  <img
    src={require("../../../../Assets/Images/hjuldamper-silkeborg.jpg")}
    onDragStart={handleDragStart}
    alt="hjuldamper-silkeborg"
  />,
];

const Slider = () => {
  return (
    <AliceCarousel
      mouseTracking
      autoHeight="true"
      autoPlay="true"
      autoPlayInterval="1200"
      disableDotsControls="true"
      infinite="true"
      keyboardNavigation="true"
      disableButtonsControls="true"
      animationDuration="3000"
      items={items}
    />
  );
};

export default Slider;
