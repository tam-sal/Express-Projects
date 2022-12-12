const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

const { addCat, listCats, addAccessory, getAccessories, deleteAccessory, modifyAccessory, addCatAccessory, updateAccessoryPopularity, testCats } = controller



//? Function
//* Modifica un accesorio del array
//* Si el id no existe dentro del array de accesorios arrojar un Error ('Accesorio no encontrado')
//* Si el objeto viene vacio, arrojar un Error ('No se detectaron cambios a aplicar')
//* Una vez modificado el accesorio del array, devolver el accesorio modificado

// Escribe la lógica de las rutas acá
router.put('/accessories', (req, res) => {
  const { id, type, color, description } = req.body

  const obj = { id, type, color, description }
  if (!obj.id) return res.status(404).json({ error: 'No se detectaron cambios a aplicar' })

  try {
    const result = modifyAccessory(obj)
    res.json(result)
  }
  catch (err) {
    return res.status(404).json({ error: err.message })

  }
});

// No modifiques nada debajo de esta línea
module.exports = router;
