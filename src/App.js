import "./styles.css";
import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    //code loads
    const getCountriesList = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));

          setCountries(countries);
        });
    };
    getCountriesList();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);

    //console.log(countryCode);
  };

  return (
    <div className="App">
      <div className="app__header">
        <h1>Covid-19 tracker</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats"></div>

      {/* info */}
      {/* info */}
      {/* info */}

      {/* Table */}

      {/* Map */}
    </div>
  );
}
