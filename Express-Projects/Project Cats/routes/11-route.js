const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea
const { addCat, listCats, addAccessory, getAccessories, deleteAccessory, modifyAccessory, addCatAccessory, updateAccessoryPopularity, testCats } = controller
// Escribe la lógica de las rutas acá
router.post('/accessories', (req, res) => {
  const { id, color, type, popularity, description } = req.body
  const newAcc = { id, color, type, popularity, description }
  try {
    const result = addAccessory(newAcc)
    return res.status(201).json({ message: result })

  }
  catch (err) {

    return res.status(400).json({ error: err.message })
  }
});

// No modifiques nada debajo de esta línea
module.exports = router;
