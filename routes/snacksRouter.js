const express = require('express')

// add our router 
const snacksRouter = express.Router()

// require the snacks controller
const snacksController = require('../controllers/snacksController.js')

// handle the GET request to get all snacks
snacksRouter.get('/', (req, res) => snacksController.getAllSnacks(req, res))

// handle the GET request to get one snack
snacksRouter.get('/:id', (req, res) => snacksController.getSnackByID(req, res))

// export the router
module.exports = snacksRouter