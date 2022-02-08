import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import OrderConfirmationPage from "./components/OrderConfirmation";

export interface OrderConfirmation {
  id: number;
  order_id: number;
  first_name: any;
  last_name: any;
  quantity: number;
  city: string;
  province: string;
  country: string;
}

// city: "Montreal"
// country: "Canada"
// first_name: "{\"iv\":\"56HziQGnSESHqvfidVup0g==\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"Ozn/3hv1ZfE=\",\"ct\":\"Keab5ORPTwfLVVRS38OwbXhVWjPi4lNQog==\"}"
// id: 10
// last_name: "{\"iv\":\"56HziQGnSESHqvfidVup0g==\",\"v\":1,\"iter\":1000,\"ks\":128,\"ts\":64,\"mode\":\"ccm\",\"adata\":\"\",\"cipher\":\"aes\",\"salt\":\"Ozn/3hv1ZfE=\",\"ct\":\"Keab5ORPTwfLVVRS38OwbXhVWjPi4lNQog==\"}"
// order_id: 69941
// province: "Quebec"
// quantity: "12"

function App() {
  const [orderNumber, setOrderNumber] = useState<number>();
  const [orderConfirmationDetails, setOrderConfirmationDetails] = useState<
    OrderConfirmation[]
  >([]);
  return (
    <div className="App">
      <Router>
        <div className="footer"></div>
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                orderNumber={orderNumber}
                setOrderNumber={setOrderNumber}
                setOrderConfirmationDetails={setOrderConfirmationDetails}
              />
            }
          />
          <Route
            path={`order-confirmation/order%number/:orderNumber`}
            element={
              <OrderConfirmationPage
                orderConfirmationDetails={orderConfirmationDetails}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
