const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

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
  else if (url === '/about.html') {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>About page</h1>')
    res.end()
  }

  //? Styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }

  //? image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }

  //? logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }

  //? Not found
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<h1>Page not found!!!</h1>')
    res.end()
  }
})

server.listen(5000)