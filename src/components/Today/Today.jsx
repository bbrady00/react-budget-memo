import React from "react";
import "../../assets/styles/today.css";

const Today = () => {
  return (
    <div className="box">
      <h5 className="is-size-5 has-text-left is-uppercase has-text-weight-medium mb-3">
        Today
      </h5>
      <div className="columns is-mobile is-multiline">
        <div className="column is-one-third-mobile has-text-centered">
          <p className="is-uppercase has-text-grey-light">Income</p>
          <p className="has-text-link" id="income"></p>
        </div>
        <div className="column is-one-third-mobile has-text-centered">
          <p className="is-uppercase has-text-grey-light">Expenses</p>
          <p className="has-text-link" id="expenses"></p>
        </div>
        <div className="column is-one-third-mobile has-text-centered">
          <p className="is-uppercase has-text-grey-light">Balance</p>
          <p className="has-text-link" id="balance"></p>
        </div>
      </div>
    </div>
  );
};

export default Today;
