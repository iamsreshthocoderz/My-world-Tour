import { useState } from 'react';
import './Country.css';
import CountryDetail from '../../Country Detail/CountryDetail';
const Country = ({country , handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags,population,area,cca3 } = country;

    const[Visited, setVisited] = useState(false);

  

    const handleVisited = () => setVisited(!Visited);

    // const passWithParams = () =>
    //     handleVisitedCountry(country);
    
    return (
        <div className={`country ${Visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: Visited ? 'purple': 'block'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>area:{area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={() =>
        handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited ? 'I have Visited this country' : 'I want to going' }
            <hr />
            <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}></CountryDetail>
        </div>
    );
};

export default Country;