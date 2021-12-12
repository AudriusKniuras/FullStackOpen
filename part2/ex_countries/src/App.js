import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherFormatter(props) {
  const country = props.country;
  const [weather, setWeather] = useState({})

  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`)
      .then(response => setWeather(response.data))
  }, [api_key, country.capital])
  if (Object.keys(weather).length === 0) {
    return (
      <div>
        <p>Fetching weather data...</p>
      </div>
    )
  } else {
    console.log(weather)
    const url = weather.weather[0].icon
    console.log("icon url", url)
    return (
      <div>
        <h2>Weather in {country.capital}</h2>
        <p><b>Temperature:</b> {weather.main.temp} C</p>
        <p><b>Feels like:</b> {weather.main.feels_like} C</p>
        <p><b>{weather.weather.main}</b></p>
        <img alt="weatherIcon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
        <p><b>Wind: </b>{weather.wind.speed} m/s</p>
      </div>
    )
  }
}

function CountryFormatter(props) {
  const country = props.country;

  const languages = Object.values(country.languages)
  const flag = country["flags"]["png"]

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={flag} alt="" />
      <WeatherFormatter country={country} />
    </div>
  )
}

function CountryExpander(props) {
  const country = props.country;
  const [visible, setVisible] = useState(false);

  const handleShowbutton = () => {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  if (!visible) {
    return (
      <div>
        {country.name.common} <button onClick={handleShowbutton}>Show</button>
      </div>
    )
  } else {
    return (
      <div>
        {country.name.common} <button onClick={handleShowbutton}>Hide</button>
        <CountryFormatter country={country} />
      </div>
    )
  }
}

function Filter(props) {
  const countriesToShow = props.countryResult.filter((country) =>
    country.name.common.includes(props.countryInput)
  );

  if (props.countryResult.length === 0) {
    return (
      <p>Getting countries...</p>
    )
  }

  if (countriesToShow.length < 10 && countriesToShow.length !== 1) {
    return (
      <div>
        {countriesToShow.map((country) => (
          <CountryExpander key={country.name.common} country={country} />
        ))}
      </div>
    );
  } else if (countriesToShow.length > 1) {
    return (
      <div>
        <p>Too many countries to show</p>
      </div>
    )
  } else {
    return (
      <CountryFormatter country={countriesToShow[0]} />
    )
  }
}

function App() {
  const [countryInput, setCountryInput] = useState("");
  const [countryResult, setCountryResult] = useState([]);

  const handleChangeCountry = (event) => {
    setCountryInput(event.target.value);
  };

  useEffect(() => {
    const eventHandler = (response) => {
      setCountryResult(response.data);
    };
    axios.get("https://restcountries.com/v3.1/all").then(eventHandler);
  }, []);

  return (
    <div>
      Find country:{" "}
      <input value={countryInput} onChange={handleChangeCountry} />
      <Filter countryResult={countryResult} countryInput={countryInput} />
    </div>
  );
}

export default App;
