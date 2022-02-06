import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import OrderConfirmation from "./components/OrderConfirmation";

function App() {
  const [orderNumber, setOrderNumber] = useState<number>();
  return (
    <div className="App">
      <Router>
        <div className="footer"></div>
        <Routes>
          <Route
            path="/"
            element={
              <Hero orderNumber={orderNumber} setOrderNumber={setOrderNumber} />
            }
          />
          <Route
            path={`order-confirmation/order%number/:orderNumber`}
            element={<OrderConfirmation orderNumber={orderNumber} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
