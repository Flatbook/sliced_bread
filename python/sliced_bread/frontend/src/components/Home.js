import React, { Component } from "react";
import drink from "../assets/drink.jpg";
import sendOrder, { getOrders } from "../services/orderService";
const Chance = require("chance").Chance;

const chance = new Chance();
export default class Home extends Component {
  state = {
    order: {},
  };

  getRandomName = () => {
    return chance.name() + " @" + chance.word();
  };

  renderImage = () => {
    return (
      <img
        class="drinkImage"
        className="rounded float-left img-fluid"
        src={drink}
        alt="Logo"
      />
    );
  };

  renderTitle = () => {
    return (
      <h1 className="text-uppercase text-center my-4">Bevanda aromatica🍹</h1>
    );
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    var keys = [];
    var values = [];
    for (var element of e.target) {
      keys.push(element.id);
      values.push(element.value);
    }
    const result = Object.assign(...keys.map((k, i) => ({ [k]: values[i] })));
    const response = await sendOrder(result);
    console.log(response);
    // this.setState();
  };

  renderForm = () => {
    const name = this.getRandomName();
    return (
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="CustomerName">Do you have a name?</label>
                  <input
                    type="text"
                    class="form-control"
                    id="customerName"
                    aria-describedby="customerNameHelp"
                    defaultValue={name}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="QuantityOfDrinks">
                    How many drink do you want to try?
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="quantityOfDrinks"
                    aria-describedby="quantityOfDrinks"
                    defaultValue={1}
                  ></input>
                </div>
                <div class="form-group">
                  <label for="inputCity">City</label>
                  <input type="text" class="form-control" id="city" required />
                </div>
                <div class="form-group">
                  <label for="inputState">State/Province</label>
                  <input
                    type="text"
                    class="form-control"
                    id="stateOrProvince"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="inputCountry">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    id="country"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Try It
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render = () => {
    return (
      <main className="container">
        <div className="row">
          <div className="col-sm">{this.renderImage()}</div>
          <div className="col-sm d-flex flex-column justify-content-center">
            {this.renderTitle()}
            {this.renderForm()}
            <h2
              class="drinkDescription"
              className="font-italic font-weight-light text-center align-self-end"
            >
              Thirsty? Have the Bevanda Aromatica. The perfect flavors that meet
              the tongue's taste. Made by an AI.
            </h2>
            <h1 className="text-center">🤖</h1>
          </div>
        </div>
      </main>
    );
  };
}
