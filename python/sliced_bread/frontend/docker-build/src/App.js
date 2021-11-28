import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/order/:confirmationUID"
              element={<OrderConfirmation isDetailedOrder />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
