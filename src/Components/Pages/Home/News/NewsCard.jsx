import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./NewsCard.scss";

const NewsCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/news")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error when fetching", error));
  }, []);
  return <div className="cardWrapper"></div>;
};

export default NewsCard;
