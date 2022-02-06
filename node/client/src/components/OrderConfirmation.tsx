import React from "react";
import "./styles/OrderConfirmation.css";

type Props = {
  orderNumber: number | undefined;
};

const OrderConfirmation: React.FC<Props> = ({ orderNumber }) => {
  return (
    <div className="order-confirmation-container">
      <h2>Thank you for your order!</h2>
      <h4>Your order confirmation number is: </h4>
      <div className="order-confirmation-number">
        <h1>{orderNumber}</h1>
      </div>
      <h4 className="notification">
        Please keep this confirmation link for your order status and details. We
        will notify you when your purchase order is ready, Cheers!
      </h4>
      <button
        className="button"
        // onClick={() => setToggleOrder(!toggleOrder)}
      >
        View Order Details
      </button>
    </div>
  );
};

export default OrderConfirmation;
