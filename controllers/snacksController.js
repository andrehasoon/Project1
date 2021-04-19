//link to snacks model
const snacks = require('../models/snacks')

// handle request to get all snacks
const getAllSnacks = (req, res) => {
    res.send(snacks) // send list to browser
}


// Function to handle a request to a particular snack
const getSnackByID = (req, res) => {

    // search for snack in the database via ID
    const snack = snacks.find(snack => snack.id === req.params.id)
    if (snack){
        res.send(snack) // send back the snack details
    }
    else{
        // you can decide what to return if snack is not found
        // currently, an empty list will be returned
        res.send("snack not found")
        res.send([])
    }
}
module.exports = {
    getAllSnacks, getSnackByID
}