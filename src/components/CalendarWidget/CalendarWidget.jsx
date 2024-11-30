import React from "react";
import "../../assets/styles/calendarWidget.css";
import CalendarModal from "./CalendarModal";
import CalendarSidebar from "./CalendarSidebar";

const CalendarWidget = () => {
  return (
    <div className="columns is-centered mt-5">
      <div className="column is-8 is-narrow box m-3" id="cframe">
        <div id="calendar" className="mx-6">
          <div id="calendarHeader" className="is-flex gap-4 pb-5"></div>
          <div
            id="calendarBody"
            className="is-flex is-flex-wrap-wrap pt-4"
          ></div>
        </div>
      </div>
      <CalendarModal />
      <CalendarSidebar />
    </div>
  );
};

export default CalendarWidget;
