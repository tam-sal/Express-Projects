const utils = require('../utils');
/*⚠️ No modificar nada arriba de esta línea ⚠️

  3️⃣ ***** EJERCICIO 3 ***** - updateCar 3️⃣:

  //* Debes buscar un coche recibido por parámetro dentro del array de utils.cars y actualizar las propiedades: new y price. También agrégale una nueva propiedad llamada "electric".
  //* Si no encuentras el coche debes arrojar un error que diga: "No se encontro el coche solicitado".
  //* Si alguna de las propiedades del coche que recibimos es undefined, debe arrojar un error que diga: "Faltan datos a completar".

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "electric", ésta no se encuentra en examples.json.
  */

const updateCar = (car) => {
  let { cars, brands } = utils
  let newCarId = car.id
  let foundCar = cars.find(c => c.id === newCarId)

  if (!foundCar) throw new Error('No se encontro el coche solicitado')

  console.log('passed car ', car);
  if (car.model === undefined || car.color === undefined || car.price === undefined || car.new === undefined || car.electric === undefined)
    throw new Error('Faltan datos a completar')

  foundCar.price = car.price
  foundCar.new = car.new
  foundCar.electric = car.electric;

  for (let c = 0; c < cars.length; c++) {
    if (cars[c].id == foundCar.id) {
      cars[c] = foundCar;
      break;
    }
  }


  let isFound = false;
  for (let b = 0; b < brands.length; b++) {
    for (let c = 0; c < brands[b].cars.length; c++) {
      if (brands[b].cars[c] === foundCar.id) {
        brands[b].cars[c] = foundCar;
        isFound = true;
        break;
      }
    }
    if (isFound)
      break;
  }

  return foundCar;
}

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updateCar;
