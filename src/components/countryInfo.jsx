import React, { useState, useEffect } from "react";
import CountryInfoStats from "../utils/countryInfoStats";
import axios from "axios";

const urlOneCountry = country =>
  `https://covid19.mathdro.id/api/countries/${country}`;
const urlWorld = "https://covid19.mathdro.id/api/";
const [confirmed, recovered, deaths, lastUpdate] = [
  "confirmed",
  "recovered",
  "deaths",
  "lastUpdate"
];

const CountryInfo = ({ onCountryChange, selectedCountry }) => {
  // const [result, setResult] = useState();
  const { data, status, loading } = CountryInfoStats(
    !selectedCountry ? urlWorld : urlOneCountry(selectedCountry)
  );

  // useEffect(() => {
  //   setResult();
  //   async function getData() {
  //     const response = await axios(
  //       !selectedCountry ? urlWorld : urlOneCountry(selectedCountry)
  //     );
  //     setResult(response.data);
  //   }
  //   getData();
  // }, [selectedCountry]);

  if (loading) return <p>Loading...</p>;
  if (status !== 200) return <p>{data}</p>;

  return (
    <div>
      <div>
        <h3>Confirmed</h3>
        <span>{data[confirmed].value}</span>
      </div>
      <div>
        <h3>Deaths</h3>
        <span>{data[deaths].value}</span>
      </div>
      <div>
        <h3>Recovered</h3>
        <span>{data[recovered].value}</span>
      </div>
      <p>Last Update:</p>
      <span>{data[lastUpdate]}</span>
    </div>
  );
};

export default CountryInfo;
