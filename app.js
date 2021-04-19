const express = require('express')
const app = express()

// set up author routes
const snacksRouter = require('./routes/snacksRouter')

// GET home page
app.get('/', (req, res) => {
 res.send('<h1>Snacks in a Van</h1>')
})

// Handle snacks-management requests
// the author routes are added onto the end of '/snacks-management'
app.use('/snacks-management', snacksRouter)

app.listen(3000, () => {
 console.log('The Snacks in a Van app is listening on port 3000!')
})