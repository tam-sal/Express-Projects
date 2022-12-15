const { generateBook } = require('../utils');
const utils = require('../utils');
/*
   6️⃣ ***EJERCICIO 6*** - classifyBooks 6️⃣
   ❕ CONSIGNA ❕
   1 - Retorna un nuevo objeto clasificado por genero a partir de los generos existentes
   📢 PUNTOS A TENER EN CUENTA 📢
   - Si no hay libros disponibles, arrojar un Error('No hay libros disponibles')
   - Vas a necesitar extraer los géneros de los libros para obtenerlos
   EJEMPLO --> 
   Dado el siguiente siguiente array:
   //*   [{
   //*      name: 'Sol',
   //*      genre: 'Horror'
   //*   }, {
   //*      name: 'Luna',
   //*      genre: 'Fantasia'
   //*   }, {
   //*      name: 'Tierra',
   //*      genre: 'Fantasia'
   //*   }]
   //!-------------------------------
//* clasifyBooks() retorna --> {
//*      Horror: [{ name: 'Sol', genre: 'Horror' }],
//*      Fantasia: [{ name: 'Luna', genre: 'Fantasia' }, { name: 'Tierra', genre: 'Fantasia' }]
//*   }
  Nota: Estos datos son de ejemplo, en los tests vendran otros campos.
  */
const classifyBooks = () => {
   // ⚠️ No modificar nada arriba de esta línea ⚠️
   let { books } = utils
   if (!books.length) throw new Error('No hay libros disponibles')
   let genresInBooks = books.map(b => b.genre)
   genresInBooks = [...new Set(genresInBooks)]
   let final = {}
   genresInBooks.forEach(element => {
      final[element] = []
   });
   for (let i = 0; i < books.length; i++) {
      let book = books[i]
      let bookgenre = books[i].genre
      for (const key in final) {
         if (key === bookgenre) {
            final[key].push(book)
         }
      }
   }
   return final
}


//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = classifyBooks;
