import React from "react";
import PropTypes from "prop-types";

const WeatherItem = ({ label, id, icon }) => {
  return (
    <div className="column my-2 is-flex is-flex-direction-column is-justify-content-space-between">
      <h3 className="has-text-grey">{label}</h3>
      {icon ? (
        <img id="weather-icon" src="" alt="Weather Icon" />
      ) : (
        <div id={id} className="weather-icon has-text-link"></div>
      )}
    </div>
  );
};
WeatherItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default WeatherItem;
