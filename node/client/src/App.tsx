import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="footer"></div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
