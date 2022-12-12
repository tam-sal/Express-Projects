const http = require('http')
const { readFileSync } = require('fs')

//* get all files

const homePage = readFileSync('./test.html')

const server = http.createServer((req, res) => {
  //* console.log(req.method)  <----------- here we should see VERBOSE
  const url = req.url

  //? Home Page
  if (url === '/') {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(homePage)
    res.end()
  }


  //? About Page
  else if (url === '/about') {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>About page</h1>')
    res.end()
  }

  //? Not found 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>Page not found!</h1>')
    res.end()
  }
})

server.listen(5000)