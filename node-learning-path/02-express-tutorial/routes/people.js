const express = require('express')
const router = express.Router()
let { people } = require('../data.js')
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
} = require('../controllers/people.js')


//* GET METHOD

router.get('/', getPeople)
//? router.route('/').get(people)

//* POST Method

router.post('/', createPerson)
//? router.route('/').post(createPerson)

router.post('/postman', createPersonPostman)


//* PUT Method
router.put('/:id', updatePerson)

//* DELETE Method

router.delete('/:id', deletePerson)

module.exports = router