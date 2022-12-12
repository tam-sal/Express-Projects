//* TS 7:40

const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth.js')


//* static assets
app.use(express.static('./methods-public'))

//* parse form data
app.use(express.urlencoded({ extended: false }))

//* Parse json
app.use(express.json())

//* use routes middleware from base api/people
app.use('/api/people', people)
//* use routes middleware from base /login
app.use('/login', auth)


app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})