const { generateOrderId } = require("../utils/utils");

// TODO: move to save in json file
let orders = [];

exports.placeOrder = async (req, res) => {

  // TODO: validation
  const { name, city, state, country, quantity, drink_id } = req.body;

  const order = {
    name,
    city,
    state,
    country,
    quantity,
    drink_id,
    order_id: generateOrderId(),
    order_date: new Date()
  };

  orders.push(order);

  res.json(orders);
}

exports.getOrder = async (req, res) => {
  const order = orders.find(order => order.order_id === req.params.id);

  if(!order) {
    res.send("invalid order! ");
  }
  res.json(order);
}