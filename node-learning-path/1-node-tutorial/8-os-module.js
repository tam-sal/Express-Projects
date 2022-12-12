const os = require('os')

//* system current user info
//? os.userInfo()
const user = os.userInfo()
// console.log(user);

//* methos returns the system uptime in seconds
//? os.uptime()
// console.log(`System uptime is: ${os.uptime()} seconds`)

//* OS Info

const currentOS = {
  osType: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}
//! >>
// {
//   osType: 'Windows_NT',
//   release: '10.0.19043',
//   totalMem: 34236436480,
//   freeMem: 25729794048
// }
console.log(currentOS);