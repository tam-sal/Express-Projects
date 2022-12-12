const { readFile, writeFile } = require('fs')
const util = require('util')
//! using the promisify method of util
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const firstPath = './content/first.txt'
const secPath = './content/second.txt'

const start = async () => {
  try {
    const first = await readFilePromise(firstPath, 'utf8')
    const second = await readFilePromise(secPath, 'utf8')
    console.log(first, '--', second);
    await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS MY NEW FILE FROM PROMISIFY: 1- ${first} ---> 2- ${second}`)
  }
  catch (error) {
    console.log(error)
  }
}
start()