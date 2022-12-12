//* Modules
//? CommomJS, every file in node is module (by default)
//? Modules - Encapsulated Code (only share the minimum)

const names = require('./4-names')
const sayhi = require('./5-utils')

// sayhi(names.john)
// sayhi('Me')


//! Here we are importing various variables with array and object data structure, both of them will come in an object, each named as I exported them from their module
const data = require('./6-alt-export')
// console.log(data)
// console.log(data.items);
//! if we construct and call/execute/invoke the function at the same file (module), even if we don't export that function, we can import it as it's alread called. fn x(y){}() OR -> x(y)
//! here we would just require the function and it will run with its local variables included
require('./7-mine-grenade') //? >> Sum is: 15