require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.get('/', (req, res) => {
  res.send('Hi')
})

require('./routes/book.route')(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})