import React, { Fragment, useState } from "react";
import CountryInfo from "./countryInfo";
import CountryList from "./countryList";

const CountryData = () => {
  const [currentCountry, setCurrentCountry] = useState();

  const handleCountryChange = value => {
    setCurrentCountry(value);
  };
  return (
    <Fragment>
      <CountryInfo
        onCountryChange={handleCountryChange}
        selectedCountry={currentCountry}
      />
      <CountryList
        onCountryChange={handleCountryChange}
        selectedCountry={currentCountry}
      />
    </Fragment>
  );
};

export default CountryData;
