const express = require('express')

const homeControllers = require('./controllers/homeController.js')

const router = express.Router()

router.get('/', homeControllers.homeGet)

router.get('/get-best-drink', homeControllers.bestDrink)


module.exports = router