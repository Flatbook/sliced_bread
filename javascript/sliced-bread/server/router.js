const express = require('express')

const homeController = require('./controllers/homeController.js')
const drinkController = require('./controllers/drinkController.js')
const orderController = require('./controllers/orderController.js')

const router = express.Router()

router.get('/', homeController.homeGet)

router.get('/get-best-drink', drinkController.bestDrink)
router.post('/place-order', orderController.placeOrder)
router.get('/order/:id', orderController.getOrder)

module.exports = router