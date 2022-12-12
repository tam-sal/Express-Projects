const http = require('http')
//! Event Emitter API
const server = http.createServer()

//! the server with this method will emit the request event behind the scenes
//? 1- emit request event
//? 2- subscribe to it / listen to it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)