import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://covid19.mathdro.id/api/countries/";

const CountryList = () => {
  const [results, setResults] = useState();
  const [countryCode, setCountryCode] = useState();
  const [isoCode, setIsoCode] = useState();
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios(url);
      // setResults(response.data);
      const result = response.data;
      setCountryCode(Object.entries(result["countries"]));
      setIsoCode(Object.entries(result["iso3"]));
    }

    getData();
  }, []);

  useEffect(() => {
    if (countryCode && isoCode)
      setResults(updatedCountries(countryCode, isoCode));
  }, [countryCode, isoCode]);

  // function mergeData() {
  //   const firstArray = Object.entries(countryCode);
  //   const secondArray = Object.entries(isoCode);

  //   const newObject = [];

  //   for (var i = 0; i < firstArray.length; i++) {
  //     for (var j = 0; j < secondArray.length; j++) {
  //       if (firstArray[i][1] === secondArray[j][0])
  //         newObject.push({
  //           country: firstArray[i][0],
  //           code: secondArray[j][1]
  //         });
  //     }
  //   }

  //   return newObject;
  // }

  function updatedCountries(firstArray, secondArray) {
    const newObject = [];

    for (var i = 0; i < firstArray.length; i++) {
      for (var j = 0; j < secondArray.length; j++) {
        if (firstArray[i][1] === secondArray[j][0])
          newObject.push({
            country: firstArray[i][0],
            code: secondArray[j][1]
          });
      }
    }

    return newObject;
  }

  if (!results) return <p>Loading...</p>;
  return (
    <select
      onChange={e => {
        setSelectedCountry(e.target.value);
        console.log(selectedCountry);
      }}
    >
      {results.map((result, idx) => (
        <option key={idx} value={result["code"]}>
          {result["country"]}
        </option>
      ))}
    </select>
  );
};

export default CountryList;
