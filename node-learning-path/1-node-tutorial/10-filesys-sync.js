const { readFileSync, writeFileSync } = require('fs')
console.log('Start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
//* console.log(first, second)

writeFileSync('./content/result-sync.txt',
  `Result: first ${first} and the second: ${second} `,
  { flag: 'a' }) //! here we are appending to the exisitng content in the file

console.log('done with the task')
console.log('Starting the next one')
