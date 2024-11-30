import React from "react";
import PropTypes from "prop-types";

const ButtonItem = ({ label, iconClass, id }) => {
  return (
    <div className="column is-one-quarter has-text-centered">
      <button id={id} className="button is-info is-light is-small">
        <span className="icon">
          <i className={iconClass}></i>
        </span>
        <span>{label}</span>
      </button>
    </div>
  );
};

ButtonItem.propTypes = {
  label: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonItem;
