import React from "react";
import "./Home.scss";
import Slider from "./Slider/Slider";
import NewsCard from "./News/NewsCard";

const Home = () => {
  return (
    <div>
      <Slider />
      <NewsCard />
    </div>
  );
};

export default Home;
