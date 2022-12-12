
const express = require('express')
const app = express()
const { people } = require('./data.js')


//* static assets
app.use(express.static('./methods-public'))

//* parse form data
app.use(express.urlencoded({ extended: false }))

//* Parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})



//* POST Method

app.post('/api/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json(
        {
          success: false,
          msg: 'please provide name'
        })
  }
  res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  !name ? res.status(400).json({ sucess: false, msg: 'please provode name value' })
    : res
      .status(201)
      .json({ success: true, data: [...people, name] })
})


//* PUT Method
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res.status(404).json({ success: false, msg: `ID: ${id} does not exist!` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

//* DELETE Method

app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))

  if (!person) {
    return res.status(404).json({ success: false, msg: `ID ${req.params.id} : does not exist!` })
  }

  const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  return res.status(200).json({ success: true, data: newPeople })
})



app.listen(5000, () => {
  console.log('server is listening to port 5000...')
})