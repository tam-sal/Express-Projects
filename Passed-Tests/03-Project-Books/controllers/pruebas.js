// const books = [
//   {
//     "id": "adhkj123adsh3s1gsfud22",
//     "name": "Harry Potter",
//     "author": "JK Rowling",
//     "stock": 3,
//     "available": true,
//     "rating": 3,
//     "admission": "2020-01-01T00:00:00.000Z",
//     "genre": "Fantasy"
//   },
//   {
//     "id": "adhkj901adsbbs1gsfud7a",
//     "name": "El Señor De Los Anillos",
//     "author": "J.R.R.Tolkien",
//     "stock": 1,
//     "available": true,
//     "rating": 5,
//     "admission": "2018-02-01T00:00:00.000Z",
//     "genre": "Adventure"
//   }
// ]
const utils = require('../utils')
const { generateBook } = utils
let books = []

for (let idx = 0; idx < 20; idx++) {
  books.push(generateBook())
}
// console.log(books);


const classifyBooks = () => {
  // ⚠️ No modificar nada arriba de esta línea ⚠️

  if (!books.length) throw new Error('No hay libros disponibles')

  let genres = new Set()
  for (let i = 0; i < books.length; i++) {
    let genre = books[i].genre
    genres.add(genre)
  }
  genres = [...genres]
  let initialValue = []
  let final = Object.fromEntries(genres.map(g => [g, initialValue]))
  let keys = Object.keys(final)
  for (let i = 0; i < books.length; i++) {
    let book = books[i]
    let genre = book.genre
    let obj = { book: book.name, genero: genre }
    for (let j = 0; j < keys.length; j++) {
      let key = keys[j]
      if (key === genre) {
        if (final[key].map(el => el.nombre !== book.name)) {
          final[key] = value

        }
        else {
          final[key] = [...value, obj]
        }
      }
    }
  }

  return final


}

console.log(classifyBooks());