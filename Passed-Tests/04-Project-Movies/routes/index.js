'use strict'

const models = require('../models/model')
const express = require('express')
const { route } = require('../app')
// const { response } = require('../app')


const router = express.Router()
const { addUser,
  listUsers,
  switchPlan,
  addSerie,
  listSeries,
  play,
  watchAgain,
  rateSerie } = models

// Escriban sus rutas acá
// Siéntanse libres de dividir entre archivos si lo necesitan
// Hint:  investigá las propiedades del objeto Error en JS para acceder al mensaje en el mismo.
//* GET POST USERS Routes - Test 07

router.get('/users', (req, res) => {
  try {
    const result = listUsers()
    return res.json(result)
  } catch (error) {
    res.status(400).send({ err: error.message })
  }
})

router.post('/users', (req, res) => {
  const { email, name } = req.body
  try {
    const result = addUser(email, name)
    return res.status(201).json({ msg: result })
  }
  catch (err) {
    return res.status(400).json({ error: err.message })
  }
})

//* PATCH Test 08
router.patch('/users/plan', (req, res) => {
  const { user } = req.query
  try {
    const result = switchPlan(user)
    return res.json({ msg: result })
  } catch (err) {
    return res.status(404).json({ error: err.message })
  }
})


//* GET series Test 09
router.get('/series', (req, res) => {
  const result = listSeries()
  return res.json(result)
})

//* POST series Test 09
router.post('/series', (req, res) => {
  const serieObj = req.body
  const vals = Object.values(serieObj) //[office, 9, regular, 2000]

  try {
    const result = addSerie(...vals)
    return res.status(201).json({ msg: result })

  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }
})

//* GET by category Test 10
router.get('/series/:category', (req, res) => {
  const { category } = req.params

  try {
    const result = listSeries(category)
    return res.json(result)

  } catch (err) {
    return res.status(404).json({ error: err.message })

  }
})

//* GET play Test 11
router.get('/play/:serie', (req, res) => {
  const { serie } = req.params
  const { user } = req.query

  try {
    const result = play(serie, user)
    return res.json({ msg: result })

  } catch (err) {
    return res.status(404).json({ error: err.message })

  }
})

//* GET watchAgain Test 12
router.get('/watchAgain', (req, res) => {
  const { user } = req.query

  try {
    const result = watchAgain(user)
    return res.json(result)
  }
  catch (err) {
    res.status(404).json({ error: err.message })
  }
})

//* POST rating Test 13
router.post('/rating/:serie', (req, res) => {
  const { serie } = req.params
  const emailScore = req.body
  const vals = Object.values(emailScore)

  try {
    const result = rateSerie(serie, ...vals)
    return res.json({ msg: result })
  }
  catch (err) {
    return res.status(404).json({ error: err.message })
  }

})












module.exports = router