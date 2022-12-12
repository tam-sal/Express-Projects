//! using require with appended promises directly, require('fs').promises

const { readFile, writeFile } = require('fs').promises

const firstPath = './content/first.txt'
const secPath = './content/second.txt'


const start = async () => {
  try {
    const first = await readFile(firstPath, 'utf8')
    const second = await readFile(secPath, 'utf8')
    console.log(first, '--', second);
    await writeFile('./content/result-mind-grenade.txt', `THIS IS MY NEW FILE FROM PROMISIFY: 1- ${first} ---> 2- ${second} -- with append flag {flag: 'a'}`, { flag: 'a' })
  }
  catch (error) {
    console.log(error)
  }
}
start()