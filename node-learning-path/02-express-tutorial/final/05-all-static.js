const express = require('express')
const path = require('path')

const app = express()
//* alternative approach is to require and call express in oneliner
//? const app = require('express')()


//* Setup static middleware -> here we are calling all the files that dont need to change, ie css images and js, even index html as it's what's rendered by default by express

// setup static and middleware
app.use(express.static('./public'))

//! this is the way to send 'dynamic' assets with send assets, however in our case, the html is a static file, so we can also add it to our public folder where all static resources lay.
//! What about the route? by default the express.static lands on the index.html file
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//   adding to static assets
//   SSR
// })

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
