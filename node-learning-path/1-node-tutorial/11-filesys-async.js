const { readFile, writeFile } = require('fs')

//* This is the async method where the code will run with a callback function that will execute after everything has been run and checked.
//* readFile params (filePath, encoding, callback-Fn)
//! if we don't provide the encoding value 'utf8', we will receive Buffer
//? <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 
//? 74 65 78 74 20 66 69 6c 65>  

console.log('start');
readFile(
  './content/first.txt',
  'utf8',
  (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const first = result
    readFile(
      './content/second.txt',
      'utf8',
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        const second = result
        writeFile('./content/result-Async.txt',
          `Result ASYNC: first ${first} and the second: ${second} `,
          (err, result) => {
            if (err) {
              console.log(err)
              return
            }
            console.log('Done with this task');
          })
      })
  })
console.log('starting next task')