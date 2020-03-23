import React, { useState, useEffect } from "react";
import axios from "axios";

const urlOneCountry = "https://covid19.mathdro.id/api/countries/PH";
const urlWorld = "https://covid19.mathdro.id/api/";
const [confirmed, recovered, deaths, lastUpdate] = [
  "confirmed",
  "recovered",
  "deaths",
  "lastUpdate"
];

const CountryInfo = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    async function getData() {
      const response = await axios(urlOneCountry);
      setResult(response.data);
    }
    getData();
  }, []);

  if (!result) return <p>Loading...</p>;

  // return <pre>{JSON.stringify(result, null, 2)}</pre>;
  return (
    <div>
      <div>
        <h3>Confirmed</h3>
        <span>{result[confirmed].value}</span>
      </div>
      <div>
        <h3>Deaths</h3>
        <span>{result[deaths].value}</span>
      </div>
      <div>
        <h3>Recovered</h3>
        <span>{result[recovered].value}</span>
      </div>
      <p>Last Update:</p>
      <span>{result[lastUpdate]}</span>
    </div>
  );
};

export default CountryInfo;
