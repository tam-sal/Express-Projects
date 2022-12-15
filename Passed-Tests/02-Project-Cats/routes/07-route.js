const express = require('express');
const { createTestScheduler } = require('jest');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

// Escribe la lógica de tu ruta GET /cats acá
const { addCat, listCats, addAccessory, getAccessories, deleteAccessory, modifyAccessory, addCatAccessory, updateAccessoryPopularity, testCats } = controller

//? FUNCTION -> listCats
//* Si no se recibe parametro <age> retornar todos los gatos del array 'cats'
//* En caso de recibir el parámetro <age: "1 year">, devuelve sólo los gatos correspondientes a dicho age.
//* Si recibe parámetro <age> pero lo recibe con diferente edad, debe arrojar el Error ('El gato o gata tiene una edad diferente') >> ver JS throw Error

//? TEST
//! GET responde con un array con todos los gatos agregados
//! GET responde con un array de todos los gatos que tengan 1 año recibido por query
//! GET responde con un status 400 y un mensaje El gato o gata tiene una edad diferente

router.get('/cats', (req, res) => {

  const { age } = req.query
  try {
    const result = listCats(age)
    return res.json(result)
  }
  catch (err) {
    return res.status(400).json({ error: err.message })
  }
})

// No modifiques nada debajo de esta línea
module.exports = router;
