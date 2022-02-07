import React from "react";
import { OrderConfirmation } from "../App";
import sjcl from "sjcl";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./styles/OrderConfirmation.css";

type Props = {
  orderConfirmationDetails: OrderConfirmation[];
};

const OrderConfirmationPage: React.FC<Props> = ({
  orderConfirmationDetails,
}) => {
  // decrypting response received from api
  let password: string = "encryptData71&$";
  var decryptedText = sjcl.decrypt(
    password,
    orderConfirmationDetails[0].first_name
  );

  const name = decryptedText.split(" ");
  const firstName: string = name[0];
  const lastName: string = name[1];
  const { order_id, quantity, city, province, country } =
    orderConfirmationDetails[0];

  return (
    <div className="order-confirmation-container">
      <h2>Thank you for your order!</h2>
      <h4>Your order confirmation number is: </h4>
      <div className="order-confirmation-number">
        <h1>{orderConfirmationDetails[0].order_id}</h1>
      </div>
      <h4 className="notification">
        Please keep this confirmation link for your order status and details. We
        will notify you when your purchase order is ready, Cheers!
      </h4>
      <table>
        <caption>
          <FaAngleDoubleRight />
          Pre-order number: {order_id}
        </caption>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>{quantity}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Province:</td>
            <td>{province}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{country}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderConfirmationPage;
