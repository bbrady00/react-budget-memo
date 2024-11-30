import React from "react";
import "../../assets/styles/button.css";
import ButtonItem from "./ButtonItem";

const ButtonPanel = () => {
  const buttons = [
    { label: "Save", iconClass: "fas fa-save", id: "saveBtn" },
    { label: "Share", iconClass: "fas fa-share", id: "shareBtn" },
    { label: "Export", iconClass: "fas fa-file-export", id: "exportBtn" },
    { label: "Settings", iconClass: "fas fa-cog", id: "settingsBtn" },
  ];

  return (
    <div className="box">
      <h5 className="is-size-5 has-text-left is-uppercase has-text-weight-medium mb-3">
        Actions
      </h5>
      <div className="columns is-mobile">
        {buttons.map((button) => (
          <ButtonItem key={button.id} {...button} />
        ))}
      </div>
    </div>
  );
};

export default ButtonPanel;
