import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CalendarPage from "./pages/CalendarPage";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

import "./assets/styles/app.css";

const App = () => {
  return (
    <Router basename="/budget-memo">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
