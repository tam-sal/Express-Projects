const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(morgan('tiny'))

app.get('/', (req, res) => {

  res.send('Home')
})

app.get('/about', (req, res) => {

  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})


app.all('*', (req, res) => {
  res.status(400).send('Error Page')
})


app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})