import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CountryNav = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/destinations";
    const getData = async () => {
      try {
        const result = await axios.get(url);
        console.log(result);
        setCountry(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [setCountry]);

  return (
    <>
      <div className="countryNav" key={data.id}>

	<Link><li>{data.id}</li></Link>

	  </div>
    </>
  );
};

export default CountryNav;
