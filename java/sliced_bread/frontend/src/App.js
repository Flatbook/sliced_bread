import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Checkout } from "./components/pages/Checkout";
import { Order } from "./components/pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
