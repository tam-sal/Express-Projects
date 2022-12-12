const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

const { addCat, listCats, addAccessory, getAccessories, deleteAccessory, modifyAccessory, addCatAccessory, updateAccessoryPopularity, testCats } = controller

// Escribe la lógica de las rutas acá
router.put('/accessories/update-popularity', (req, res) => {
  const { id } = req.body
  try {
    const result = updateAccessoryPopularity(id)
    return res.json({ message: result })
  }
  catch (error) {
    return res.status(404).json({ error: error.message })

  }
});

// No modifiques nada debajo de esta línea
module.exports = router;
