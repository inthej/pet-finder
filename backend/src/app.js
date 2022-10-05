require('dotenv').config()
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send('Hi')
})

require('./routes/search.route')(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})