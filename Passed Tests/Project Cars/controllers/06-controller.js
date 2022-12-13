const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - getBrandPrices 6️⃣:

   🟢 Debes retornar la suma del precio de todos los coches de la marca recibida por parámetro.
   🟢 Si recibes el parámetro "unused" con valor true, entonces retorna la suma de precios sólo de los coches 
   que sean nuevos.
   🟢 Si recibes el parámetro "unused" con valor false, entonces retorna la suma de precios sólo de los coches 
   que sean usados.
   🟢 Si la marca no existe, arrojar un error que diga: "Marca no encontrada".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1)El parámetro "unused" puede tener el valor null.
   2) Debes obtener los coches a partir de los IDs almacenados en su marca.
*/

const getBrandPrices = (brand, unused) => {
  const { cars, brands } = utils
  const foundBrand = brands.find(b => b.name === brand)
  if (!foundBrand) throw new Error("Marca no encontrada")
  const idsBrand = foundBrand.cars
  const carsOut = cars.filter(c => idsBrand.includes(c.id))
  const newCars = carsOut.filter(c => c.new === true)
  const usedCars = carsOut.filter(c => c.new === false)
  let sumNew = 0, sumOld = 0

  const newCarsPrices = newCars.map(c => c.price)
  sumNew = newCarsPrices.reduce((acc, val) => {
    return acc + val
  }, 0)

  const usedCarsPrices = usedCars.map(c => c.price)
  sumOld = usedCarsPrices.reduce((acc, val) => {
    return acc + val
  }, 0)

  if (unused === true) {
    return sumNew
  }
  else if (unused === false) {
    return sumOld
  }
  else {
    return sumNew + sumOld
  }


};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = getBrandPrices;
