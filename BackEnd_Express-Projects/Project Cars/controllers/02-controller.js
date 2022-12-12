const utils = require('../utils');
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  2️⃣ ***** EJERCICIO 2 ***** - listCars 2️⃣:
  
  🟢 Los clientes pueden reservar con anticipación el color de su coche. Es por esto que necesitamos que filtres 
  y los coches que cumplan con dicho color.
  🟢 Si en la base de datos no hay coches con ese color, devolver un error que diga: "No hay coches con ese color 
  en la base de datos".

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los coches a través de *utils.cars*.
  2) Recibirás el color por parámetro.
*/

const listCars = (color) => {
  const { cars } = utils
  const foundColor = cars.filter(c => c.color === color)
  if (!foundColor.length) throw new Error("No hay coches con ese color en la base de datos")
  return foundColor
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = listCars;
