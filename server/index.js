const express = require('express') // Framework build on Node.
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')

const app = express()
app.use(bodyParser.json())
const controller = require('./products_controller')

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(error => console.log(error))

app.get('/api/product/:id', controller.getOne)
app.get('/api/product', controller.getAll)
app.post('/api/product', controller.create)
app.put('/api/product/:id', controller.update)
app.delete('/api/product/:id', controller.delete)


PORT = 1993
app.listen(PORT, () => {
  console.log(`You are listening on Port ${PORT}`)
})
