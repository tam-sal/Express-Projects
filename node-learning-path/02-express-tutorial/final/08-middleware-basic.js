const express = require('express')
const app = express()
const logger = require('./logger.js')

//* req => middleware => res

//! creating a function that will be invoked in all pages in order to avoid repeating our code for every page of the app. This function will work as a middleware, we must MUST apply the NEXT in order to avoid falling back in the spinner on loading the page. IF we don't provide a responde in the middleware, we must plug the next for the middleware to pass the functionality to the next middleware to handle the next task.
//! In short, either provide a response in my middleware, or terminate it with a next() in order to pass it to the next method where it's gonna be invoked and the method will provide the send termination clause. 



//? between the path and the (req,res) we just reference this function as middleware function. logger

// app.get('/', logger, (req, res) => {

//   res.send('Home')
// })

// app.get('/about', logger, (req, res) => {

//   res.send('About')
// })

// app.get('/api/porducts', logger, (req, res) => {
//   res.send('Products')
// })

// app.get('/api/items', logger, (req, res) => {
//   res.send('Items')
// })


// app.all('*', (req, res) => {
//   res.status(400).send('Error Page')
// })


// app.listen(5000, () => {
//   'server is listening to port 5000...'
// })

//* Instead of repeating ourself calling the middleware in every path, we simply apply the express function use in order to apply that middleware across all the paths of our server and we don't have to plug it in each path anymore

//? app.use
//! IMPORTANT: app.use must be placed above all the paths i want to apply that middleware on, otherwise it won't work for the paths placed above of it.
//! example, if I use app.use(logger) above app.get(/api/..) it wil work just for the paths below api/.. and won't work for '/' and '/about'

//! if I want to specify the use of the middleware to a specific path (base) and all its extensions, we provide the 'root' / 'base' path as a first argument to our use function, and the midddleware as a second param
//? app.use('/api', logger) <-- here the logger will be applied only to the base /api path and all its extenstions like, api/products - api/items 


//? app.use('/api', logger) <- Only use with api base

//!   vvvvvv with the omitted path below, we apply the middleware on all paths
app.use(logger)

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
  res.send('Items')
})


app.all('*', (req, res) => {
  res.status(400).send('Error Page')
})


app.listen(5000, () => {
  'server is listening to port 5000...'
})