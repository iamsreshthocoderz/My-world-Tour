import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import "../Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCoutries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
        const handleVisitedCountry = country =>{

          console.log("opkay");
          console.log(country);
            const newVisitedCountries = [...visitedCoutries,country];
            setVisitedCountries(newVisitedCountries);
   
        }

        const handleVisitedFlags = flag => {
          const newVisitedFlags = [...visitedFlags, flag];
          setVisitedFlags(newVisitedFlags);
        }

        // remove  item from an array in a state
  return (
    <div >
      <h3>Countries: {countries.length}</h3>
      {/* visited country  */}
      <div>
        <h5>Visited countries: {visitedCoutries.length}</h5>
        <ul>

        </ul>
      </div>
      <div className="flag-countainer">
        {
          visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
        }
      </div>
      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags} ></Country>
        ))}
      </div>
    </div>
    
  );
};

export default Countries;
