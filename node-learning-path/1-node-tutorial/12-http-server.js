const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Landing page..!!')
  }

  else if (req.url === '/about') {
    res.end('About page')
  }

  else {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`<h3>Page does't exist</h3>
    <a href='/'> Go to home page </a>`)
  }

})

server.listen(5000)