//* best partice invocation
const express = require('express')
const app = express()

//* alternative approach is to require and call express in oneliner
//? const app = require('express')()

//* app.get -> Read Data
//* app.post -> Insert Data
//* app.put -> Update Data
//* app.delete -> Delete Data
//* app.all -> works with all 
//* app.use -> middleware
//* app.listen -> listen to server

app.get('/', (req, res) => {
  res.status(200)
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200)
  res.send('About Page')
})

//! 404 default case
app.all('*', (req, res) => {
  res.status(404)
  res.send('<h1> resource not found </h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000..!')
})
