
const { PREFIX_ORDER_ID } = require("../constants/constants");

exports.generateOrderId = () => {
  return `${PREFIX_ORDER_ID}${Date.now()}`;
}
