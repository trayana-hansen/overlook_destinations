import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsCard.scss";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/news";
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setNews(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setNews]);

  return (
    <div className="newsContainer">
      {news &&
        news.slice(-3).map((data) => (
          <figure className="productCard" key={data.id}>
            <img
              src={`http://localhost:4000/images/${data.image.filename}`}
              alt="img_news"
            />
            <h2>{data.title}</h2>
            <p>{data.teaser}</p>
          </figure>
        ))}
    </div>
  );
};

export default NewsCard;
