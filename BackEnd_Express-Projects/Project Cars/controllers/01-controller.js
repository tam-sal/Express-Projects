const { brands } = require('../utils');
const utils = require('../utils');
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 🚗 HENRY-CARS 🚗 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - addCars 1️⃣:
  🟢 Agregar un coche a utils.cars.
  🟢 Agregar el ID del mismo coche a la marca recibida por parámetros (brand).
  🟢 Si el coche ya existe en la base de datos, arrojar un Error('Este coche ya existe en la base de datos') 
  🟢 Si la marca ya existe en la base de datos, arrojar un Error('Esta marca ya existe en la base de datos')
  🟢 Retornar todos los coches si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los coches mediante *utils.cars*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si el coche que intentas agregar, ya existe en utils.cars.
  4) Investiga acerca de Throw Error() para devolver errores.
  */

const addCars = (car, brand) => {
  const { cars, brands } = utils
  let { id } = car
  const foundCar = cars.find(c => c.id === id)
  if (foundCar) throw new Error('Este coche ya existe en la base de datos')
  let brandName = brand.name
  const foundBrand = brands.find(b => b.name === brandName)
  if (foundBrand) throw new Error('Esta marca ya existe en la base de datos')
  let carsInBrand = brand.cars
  carsInBrand.push(id)
  cars.push(car)
  let branObj = { 'name': brandName, cars: carsInBrand }
  brands.push(branObj)
  return cars
}


// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addCars;
