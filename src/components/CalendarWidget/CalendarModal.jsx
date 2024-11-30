import React from "react";

const CalendarModal = () => {
  return (
    <div id="modal-calendar" className="modal">
      <div className="modal-background" id="modal-background-calendar"></div>
      <div
        id="modalBody"
        className="modal-content has-background-white box mt-6 p-6"
      >
        <button
          id="exitBtnCalendar"
          className="button is-link is-light is-pulled-right mb-5"
        >
          Cancel
        </button>
        <form>
          <div className="field">
            <label id="modalHeader" className="has-text-grey label">
              Date
            </label>
            <p id="modalDateArea"></p>
          </div>
          <div className="field">
            <label className="label has-text-grey">Category</label>
            <div className="control">
              <div className="select is-fullwidth is-info">
                <select
                  className="has-background-info"
                  id="selectOptionCalendar"
                >
                  <option>Food</option>
                  <option>Utilities</option>
                  <option>Housing</option>
                  <option>Travel</option>
                  <option>Entertainment</option>
                  <option>Grocery</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-grey">Amount</label>
            <div className="control">
              <input
                id="amount-calendar"
                className="input has-background-info"
                type="text"
                placeholder="$"
              />
            </div>
          </div>
          <button id="addBtnCalendar" className="button is-link mt-5">
            Add Log
          </button>
        </form>
      </div>
      <button
        id="closeBulmaModalBtn"
        className="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  );
};

export default CalendarModal;
