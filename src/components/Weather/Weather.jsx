import React from "react";
import "../../assets/styles/weather.css";
import WeatherItem from "./WeatherItem";

const Weather = () => {
  const weatherData = [
    { label: "Temperature", id: "temp-data" },
    { label: "Wind", id: "wind-data" },
    { label: "Humidity", id: "humidity-data" },
    { label: "Feels Like", id: "feels-like-data" },
    { label: "Chance of Rain", id: "rain-data" },
    { label: "Condition", id: "conditions", icon: true },
  ];

  return (
    <div className="box">
      <h5 className="is-size-5 has-text-left is-uppercase has-text-weight-medium mb-3">
        Weather
      </h5>
      <div id="weather-container" className="columns">
        {weatherData.map((item) => (
          <WeatherItem
            key={item.id}
            label={item.label}
            id={item.id}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Weather;
