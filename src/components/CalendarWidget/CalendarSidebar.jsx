import React from "react";

const CalendarSidebar = () => {
  return (
    <div
      id="sidebar"
      className="column box m-3 is-flex is-flex-direction-column is-justify-content-space-between"
    >
      <div className="box has-text-centered p-6">
        <h3>
          <a className="has-text-info" href="./index.html">
            Monthly Expense Memo
          </a>
        </h3>
        <h4 className="is-size-5 has-text-info">
          Understanding Your Lifestyle
        </h4>
      </div>
      <div className="box px-6">
        <p>
          <b>Monthly Summary</b>
        </p>
        <hr />
        <i className="fa-solid fa-utensils"></i>
        <p className="js-food-sum"></p>
        <i className="fa-solid fa-fire-flame-simple"></i>
        <p className="js-utilities-sum"></p>
        <i className="fas fa-house-user"></i>
        <p className="js-housing-sum"></p>
        <i className="fa-solid fa-car"></i>
        <p className="js-travel-sum"></p>
        <i className="fa-solid fa-tv"></i>
        <p className="js-entertainment-sum"></p>
        <i className="fa-sharp fa-solid fa-basket-shopping"></i>
        <p className="js-grocery-sum"></p>
        <i className="fa-solid fa-shirt"></i>
        <p className="js-other-sum"></p>
        <div className="daily-total"></div>
        <hr />
        <p className="total js-total">
          <b></b>
        </p>
      </div>
    </div>
  );
};

export default CalendarSidebar;
