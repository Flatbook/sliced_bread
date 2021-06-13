const { drinks } = require("../data/drinks");

exports.homeGet = async (req, res) => {
  res.send('Hello')
}

exports.bestDrink = async (req, res) => {
  const theBest = drinks.find(drink => drink.isBest);
  res.json(theBest);
}