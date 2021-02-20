import React, { useEffect, useState } from "react";

const Weather = ({ data }) => {
  const convertTemperature = (temp) => {
    return Math.round(parseInt(temp) - 273.15, 3);
  };

  return (
    <div>
      <div className="row">
        <h1>{data["name"]}</h1>
      </div>
      <div className="row weather-image">
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            data["weather"][0].icon +
            "@2x.png"
          }
        />
      </div>
      <div className="row">
        <div className="col-6 temp" align="center">
          <b>{convertTemperature(data.main.temp)} &deg;C</b>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col max-min" align="center">
          {convertTemperature(data.main.temp_min)} &deg;C to&nbsp;
          {convertTemperature(data.main.temp_max)} &deg;C
        </div>
      </div>
      <div className="row">
        <h1>{data["weather"][0].main}</h1>
      </div>
    </div>
  );
};

export default Weather;
