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
        news.slice(1, -3).map((data) => (
          <div className="newsCard" key={data.id}>
            <img
              src={`http://localhost:4000/images/${data.image.filename}`}
              alt="img_news"
            />

            <h3>{data.title}</h3>
            <p>{data.teaser}</p>
          </div>
        ))}
    </div>
  );
};

export default NewsCard;
