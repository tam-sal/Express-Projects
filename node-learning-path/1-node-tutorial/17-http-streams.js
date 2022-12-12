const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  //* const text = fs.readFileSync('./content/big.txt', 'utf8')  send 1.5 MB to the client side
  //* res.end(text)
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  fileStream.on('open', () => {
    fileStream.pipe(res)
  })
  fileStream.on('error', err => console.log(err))
})
server.listen(5000)
