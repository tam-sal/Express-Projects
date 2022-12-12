const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
// No modifiques nada arriba de esta línea

const { addCat, listCats, addAccessory, getAccessories, deleteAccessory, modifyAccessory, addCatAccessory, updateAccessoryPopularity, testCats } = controller

//? Function

//* Agrega un nuevo gato, verificando que no exista anteriormente su nombre.
//* Debe tener una propiedad <age> que inicialmente debe ser '1 year'.
//* Debe tener una propiedad <color> que inicialmente es un array vacío.
//* Debe tener una propiedad <accessories> que inicialmente es un arrayvacío.
//* El gato o gata debe guardarse como un objeto con el siguiente formato:
//* { name, age: '1 year', color: [], accessories: [] }
//* En caso exitoso debe retornar el objeto, osea el gato creado'.
//* En caso de haber un gato existente, no se agrega y debe arrojar elError ('El gato o gata ya existe') >> ver JS throw Error
// Escribe la lógica de las rutas acá
router.post('/cat', (req, res) => {
  const { name } = req.body
  try {
    const cat = addCat(name)
    return res.status(200).json({ "cat": cat })
  } catch (err) {
    res.status(400).json({ error: 'El gato o gata ya existe' })
  }
});

// No modifiques nada debajo de esta línea
module.exports = router;
