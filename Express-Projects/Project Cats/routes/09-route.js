const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

const { addCat, listCats, addAccessory, getAccessories, deleteAccessory, modifyAccessory, addCatAccessory, updateAccessoryPopularity, testCats } = controller
// Escribe la lógica de las rutas acá
//? Function
//* Devuelve un array con todos los accesorios.
//* Si recibe parámetro "type", debe retornar  los accesorios que coincidan con el tipo.
//* Si recibe parámetro "color" debe retornar los accesorios que coincidan con el color
//* Si recibe ambos parámetros, se devuelven los accesorios que coincidan con el color o con el tipo

router.get('/accessories', (req, res) => {
  const { type, color } = req.query
  try {

    const result = getAccessories(type, color)
    res.json(result)
  }
  catch (err) {
    res.status(400).json({ error: err.message })
  }

});

// No modifiques nada debajo de esta línea
module.exports = router;
