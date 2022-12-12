const router = require('express').Router();
const addCars = require('../controllers/01-controller');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  7️⃣ ***** EJERCICIO 7 ***** - POST /cars 7️⃣:
  
  🟢 Integrar la función addCars que desarrollaste previamente (Ejericio 1) para agregar un nuevo auto en la 
  base de datos.
  📌 Responder un objeto con una propiedad "msg": <la base de datos con el coche agregado>.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás los argumentos necesarios para ejecutar esa función addCars mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.post('/cars', (req, res) => {
  const car = { ...req.body.car }
  const brand = { name: req.body.brand.name, cars: req.body.brand.cars }
  //* const carObj = { id: car.id, model: car.model, color: car.color, price: car.price, new: car.new }
  //* const brandObj = { name: brand.name, cars: brand.cars }

  try {
    const result = addCars(car, brand)
    return res.status(201).json({ msg: result })
  }
  catch (error) {
    return res.status(400).json({ err: error.message })

  }
})

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
