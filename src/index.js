import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CountryList from "./components/countryList";
import CountryInfo from "./components/countryInfo";
import CountryData from "./components/countryData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CountryData />
  </React.StrictMode>,
  rootElement
);
