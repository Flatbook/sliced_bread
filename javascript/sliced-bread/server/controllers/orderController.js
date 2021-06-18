const { generateOrderId } = require("../utils/utils");

// TODO: move to save in json file
let orders = new Set();

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

  orders.add(order);

  res.json(order.order_id);
}

exports.getOrder = async (req, res) => {
  const order = Array.from(orders).find(order => order.order_id === req.params.id);

  if(!order) {
    res.status(400).json({ error: "Invalid orderId!" });
  }

  res.json(order)
}

exports.getOrders = async (req, res) => {
  res.json(orders);
}