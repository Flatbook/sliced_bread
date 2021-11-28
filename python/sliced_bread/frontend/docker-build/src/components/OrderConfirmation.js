import React, { Component } from "react";
import { getOrderConfirmation } from "../services/orderService";
import { useParams } from "react-router-dom";

export class OrderConfirmation extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      order: undefined,
    };
  }

  componentDidMount() {
    console.log(this.props.isDetailedOrder);
    const { confirmationUID } = this.props.isDetailedOrder
      ? this.props.params
      : this.props;
    console.log(confirmationUID);
    getOrderConfirmation(confirmationUID).then((order) => {
      return this.setState({ order });
    });
  }

  renderOrderConfirmation = () => {
    const { isDetailedOrder } = this.props;
    const {
      city,
      country,
      customerName,
      orderNumber,
      quantityOfDrinks,
      stateOrProvince,
    } = this.state.order.data;

    const orderLink = "http://localhost:3000/order/" + orderNumber;
    console.log(this.state.order);
    if (this.state.order !== undefined) {
      return (
        <div className="text-center">
          <h1>Thank you for trying the drink, {customerName}!</h1>
          <h3>Order#:{orderNumber}</h3>
          {isDetailedOrder ? (
            <div>
              <h3># of drinks:{quantityOfDrinks}</h3>
              <h4>
                {city},{stateOrProvince},{country}
              </h4>
            </div>
          ) : (
            <a href={orderLink}>{orderLink}</a>
          )}
        </div>
      );
    } else return <div>not</div>;
  };

  renderNotFound = () => {
    return <div>404 not found</div>;
  };

  render() {
    const { order } = this.state;
    return (
      <div className="d-flex p-2 bd-highlight align-items-center min-vh-30 justify-content-center">
        {order ? this.renderOrderConfirmation() : this.renderNotFound()}
      </div>
    );
  }
}

export default (props) => <OrderConfirmation {...props} params={useParams()} />;
