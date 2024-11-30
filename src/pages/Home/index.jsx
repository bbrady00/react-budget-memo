import React from "react";
import Today from "../../components/Today/Today"; // Adjust paths as necessary
import CalendarWidget from "../../components/CalendarWidget/CalendarWidget";
import Weather from "../../components/Weather/Weather";
import ButtonPanel from "../../components/Button/ButtonPanel";

const Home = () => {
  return (
    <div className="container mt-6">
      <header className="box has-text-centered p-6">
        <h1 className="is-size-3 has-text-info">Monthly Expense Memo</h1>
        <p className="has-text-grey">Understanding Your Lifestyle</p>
      </header>
      <main>
        <div className="columns">
          <div className="column is-8">
            <Today />
            <CalendarWidget />
          </div>
          <div className="column is-4">
            <Weather />
            <ButtonPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
