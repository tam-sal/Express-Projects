const strWithNums = (arg) => {
  return /\d/.test(arg)
}

const cars = [
  {
    "id": "adhkj123adsh3s1gsfud22",
    "model": "X5",
    "color": "Blue",
    "price": 20300,
    "new": false
  },
  {
    "id": "ada32j2312lk3j12ndas5d",
    "model": "207",
    "color": "White",
    "price": 20300,
    "new": false
  }
]

const brands = [
  {
    "name": "BMW",
    "cars": [
      "adhkj123adsh3s1gsfud22"
    ]
  },
  {
    "name": "Mercedez Benz",
    "cars": [
      "ada32j2312lk3j12ndas5d"
    ]
  }
]
// console.log(brands)
const utils = require('./utils');
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
  if (!newCarId || !car.model || !car.color || !car.price || !car.new || !car.electric) throw new Error('Faltan datos a completar')

  const idx = cars.indexOf(foundCar)

  foundCar.price = car.price
  foundCar.new = car.new
  foundCar.electric = car.electric
  Object.assign(cars[idx], foundCar)


  // for (let i = 0; i < brands.length; i++) {
  //   let carsInBrands = brands[i].cars
  //   for (let j = 0; j < carsInBrands.length; j++) {
  //     if (carsInBrands[j] === newCarId) {
  //       carsInBrands[j] = newCarId
  //     }
  //   }
  // }

  brands[idx].cars.push(newCarId)
  return foundCar

}

const { generateCar, generateBrand } = utils
const newC = (generateCar())
const newB = (generateBrand());

cars.push(newC)
console.log(cars);
updateCar(newC)
console.log(cars)

// console.log(updateCar({
//   "id": "ada32j2312lk3j12ndas5d",
//   "model": "207",
//   "color": "White",
//   "price": 5000,
//   "new": true,
//   "electric": true
// }))
// console.log(cars)
// console.log(brands)