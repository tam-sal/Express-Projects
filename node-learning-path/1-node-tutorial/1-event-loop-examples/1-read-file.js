//* npm init and go step by step install for package.json
//* npm init -y default installation
//* npm i + pachageName -> local for the project (recommended)
//* npm i -g +packageName -> Global install (not recommended since packages update)
//! dependencies in package.json are the ones that will be mounted on the server during implementation, here we use npm i <packageName>
//! devDependencies are installed using npm i <packageName> -D 
//! devDependencies are the ones that we want to use only through the dev phase
//* in package.json, we can modify the scripts to run our app, either with the command < npm start > for the app, or <npm run dev> to start our watcher as nodemon as we specified in the package file.
//* Here instead of running the app using node app.js, we simply tell the console we will use npm start intead
//* Also if we are o run on watcher, we specify our watcher after installing it, assign it a name as dev and plug the command we would have run, then we use
//! npm run dev --> instead of nodemon app.js in case nodemon is globally installed
//! npm start --> instead of node app.js
//? "scripts": {
//?   "start": "node app.js",
//?   "dev": "nodemon app.js"
//? },

//* If I want to start and watch the app at the same time, I would simply plug the nodemon as the value of my start
//? "scripts": {
//?   "start": "nodemon app.js"
//? },

//! to uninstall a package npm uninstall <packagename>
//! NUCLEAR APPRAOCH to manually delete NODEMODULES and package-lock.json and delete the dependency manually from package.json and then npm i

const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
console.log('hello people');
console.log('===== Read File Async Callback =====')

const { readFile } = require('fs')
readFile('./content/first.txt', 'utf8', (err, res) => {
  err ? console.log(err)
    :
    console.log(res)
  console.log('First Task Completed')
})
console.log('Next task to begin!')