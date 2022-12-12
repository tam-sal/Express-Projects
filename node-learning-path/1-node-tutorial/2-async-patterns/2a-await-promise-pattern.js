const { readFile, writeFile } = require('fs')
//! Using a handmade promise to manage my calls with thenable, or call it in an async statement

const firstPath = './content/first.txt'
const secPath = './content/second.txt'
//? Method with thenables using a promise

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        return resolve(data)
      }
    })
  })
}
//! using normal promise
// getText(firstPath)
//   .then(result => console.log(result))
//   .catch(err => console.log(err))


//! normal async await reusing the handmade getText function

const start = async () => {
  try {
    const first = await getText(firstPath)
    const second = await getText(secPath)
    console.log(first, '--', second);
  }
  catch (error) {
    console.log(error)
  }
}
start()