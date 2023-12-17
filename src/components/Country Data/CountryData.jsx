import Country from "../Countries/Country/Country";

const CountryData = ({country}) => {
    return (
        <div>
            <p><small>Country Name: {country.name.common} </small></p>
        </div>
    );
};

export default CountryData;