const { createReadStream } = require('fs')

const stream1 = createReadStream('./content/big.txt')
//? to read the data, we add the second param {encoding: 'utf8'}
//? last value of the buffer = remainder
//? highWaterMark - control size
//? this defines the stop of ech buffer, so we can end up with the path and the params object
//* const stream = createReadStream(path, {highWaterMark: 90000, encoding: 'utf8'})
//? default size of the buffer is 64kb

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })

//? The highWaterMark defines the break point on the buffer, so we can divide the process of the reading for big files, the last value of the buffer is the remainder


//! Source: https://nodejs.org/api/fs.html#class-fsreadstream

stream.on('data', (result) => {
  console.log(result)
})

//? we can add the error as well just in case reading stream is interruptted for some reason
stream.on('error', (err) => { console.log(err) })