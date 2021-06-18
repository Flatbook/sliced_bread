const drinks  = require("../data/drinks.json");

exports.bestDrink = async (req, res) => {
  const theBest = drinks.find(drink => drink.isBest);
  res.json(theBest);
}