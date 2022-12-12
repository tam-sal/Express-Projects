const http = require('http')
const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('hello world')
})

//! .listen is ASYNC
server.listen(5000, () => {
  console.log('Server is listening to port: 5000...')
})