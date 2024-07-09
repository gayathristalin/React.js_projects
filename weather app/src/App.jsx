import React, { useState } from "react";
import clearicon from "../public/clearicon.jpg";
import "./App.css";
import humidity from "../public/humidity.png";
import wind from "../public/wind.png";
import fewclouds from "../public/fewclouds.jpg";
import scatteredcloud from "../public/scattered clouds.jpg";
import brokencloud from "../public/brokenclouds.jpg";
import showerrain from "../public/shower rain.jpg";
import rain from "../public/rain.jpg";
import thunderstorm from "../public/thunderstorm.jpg";
import snow from "../public/snow.jpg";

const Weather = ({ icon, temp, city, humid, windd, country, lat, long }) => {
  return (
    <div>
      <div className="image">
        <img
          src={icon}
          alt="clear sky"
          style={{ height: "200px", width: "200px" }}
          className="image"
        />
      </div>
      <p className="temp">{temp}°C </p>
      <p className="city">{city}</p>
      <p className="country">{country}</p>

      <div className="cord">
        <div>
          <span> Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span> Longitude</span>
          <span>{long}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img
            src={humidity}
            alt=""
            style={{ width: "30px", height: "30px" }}
          />
          <div className="data">
            <div className="humid-percent">{humid}%</div>
            <div className="text"> Humidity</div>
          </div>
        </div>
        <div className="element">
          <img
            src={wind}
            alt="wind speed"
            style={{ width: "35px", height: "35px" }}
          />
          <div className="data">
            <div className="wid-percent">{windd} kmph</div>
            <div className="text"> Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const api_key = "6ad6c7e8d2fcf9b86af6bf210dcc7603";
  const [text, setText] = useState("");
  const [icon, setIcon] = useState(clearicon);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState(0);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humid, setHumid] = useState(0);
  const [windd, setWindd] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cityNotAvailable, setCityNotAvailable] = useState(false);

  const Weathericons = {
    "01d": clearicon,
    "01n": clearicon,
    "02d": fewclouds,
    "02n": fewclouds,
    "03d": scatteredcloud,
    "03n": scatteredcloud,
    "04d": brokencloud,
    "04n": brokencloud,
    "09d": showerrain,
    "09n": showerrain,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
  };
  const search = async () => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.main.temp);
      if (data.cod === "404") {
        console.log("city not found");
        setCityNotAvailable(true);
        setLoading(false);
        return;
      }
      console.log(data.main.temp);
      setTemp(data.main.temp);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLong(data.coord.lon);
      setHumid(data.main.humidity);
      setWindd(data.wind.speed);
      setCity(data.name);
      setCityNotAvailable(false);

      const weathericoncode = data.weather[0].icon;
      setIcon(Weathericons[weathericoncode] || clearicon);
    } catch {
    } finally {
      setLoading(false);
    }
  };
  const changes = (e) => {
    setText(e.target.value);
  };
  const keydown = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          className="cityinput"
          value={text}
          placeholder="search city"
          onChange={changes}
          onKeyDown={keydown}
        />
        <div className="search-icon">
          <svg
            onClick={search}
            className="searchimg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            <path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z" />
          </svg>
        </div>
      </div>

      {loading && <div className="loading">Loading....</div>}
      {cityNotAvailable && (
        <div className="city-not-available">City Not Found</div>
      )}
      {!cityNotAvailable && !loading && (
        <Weather
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          long={long}
          humid={humid}
          windd={windd}
        />
      )}
      <p className="copyright">
        Designed by <span>Gayathri</span>
      </p>
    </div>
  );
};

export default App;
