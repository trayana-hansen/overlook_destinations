import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Slider.scss";

const handleDragStart = (e) => e.preventDefault();

/* Make an array with all the images to be used in the carousel*/
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
    /* Render the carousel component*/
    <AliceCarousel
      /* Enable mouseTracking*/
      mouseTracking
      /* Enable auto height adjustment for the carousel component*/
      autoHeight="true"
      /* Enable autoplaying*/
      autoPlay="true"
      /* Set the interval for changing between images*/
      autoPlayInterval="1200"
      /* Desable dots controls*/
      disableDotsControls="true"
      /* Make the images run in a loop*/
      infinite="true"
      /* Enable control from arrows on keyboard*/
      keyboardNavigation="true"
      /* Disable buttons control*/
      disableButtonsControls="true"
      /* Duration of animation*/
      animationDuration="3000"
      /* Define the images used*/
      items={items}
    />
  );
};

export default Slider;
