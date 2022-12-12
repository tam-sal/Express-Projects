console.log('===== Read File Async Callback =====')

const { readFile } = require('fs')
readFile('./content/first.txt', 'utf8', (err, res) => {
  err ? console.log(err)
    :
    console.log(res)
  console.log('First Task Completed')
})
console.log('Next task to begin!')

//! setTimeout ///
console.log('===== Set Time Out Async Callback =====')
console.log('This will run BEFORE the readfile because it entered the call stack last')

console.log('first')
setTimeout(() => {
  console.log('second')

}, 0);
console.log('thrid');