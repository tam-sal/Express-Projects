const utils = require("../utils");
/*
    5️⃣ ***EJERCICIO 5*** - takeBook 5️⃣
      ❕ CONSIGNA ❕
     1 - Retornar un libro del array de books según su id junto a su fecha de prestación
     2 - Si la cantidad de libros a pedir supera el stock arrojar un Error('La cantidad de libros solicitados supera el stock')
     3 - Si el libro no es encontrado, arrojar un Error('Libro no encontrado')
     4 - Si no se recibe una cantidad de libros a retirar, arrojar un Error('Cantidad requerida')
      📢 PUNTOS A TENER EN CUENTA 📢
      - Recibes los parámetros: id de libro (id) y la cantidad de libros a solicitar (quantity).
      - La fecha de prestación debe ser hoy.
      - Además, debes contemplar que la cantidad de libros a pedir, sea menor o igual al stock disponible.
      - Recuerda que los mensajes de error deben ser exactamente como pide el enunciado
      - Recuerda que puedes acceder al array products a través de utils.products
      - Vas a necesitar utilizar varios métodos del objeto Date() para asignar la fecha de devolución
  */
const takeBook = (id, quantity) => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️
  let { books } = utils
  if (!quantity) throw new Error('Cantidad requerida')
  const foundBook = books.find(book => book.id === id)
  if (!foundBook) throw new Error('Libro no encontrado')
  const { stock } = foundBook
  if (quantity > stock) throw new Error('La cantidad de libros solicitados supera el stock')
  const date = new Date().toLocaleDateString()

  return { 'book': foundBook, 'returnDate': date }
}


// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = takeBook;
