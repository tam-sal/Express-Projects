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

//*====================================================

//! Verbose
//* GET: Read Data
//* POST: Insert Data
//* PUT: Update Data
//* DELTE: Delete Data

//? REQUEST MESSAGE
//! GET:
//* www.store.com/api/orders get all orders
//* [HEADERS] -> Optional info about our Request Message (MetaData) -> Object type
//* [BODY] aka Payload: if it's a Get message, we don't need the body since we are targeting the resource directly. If we are adding resources to our server, we will provide that data in the body
//! POST:
//* www.store.com/api/orders ADD place an order (send data)
//! PUT:
//* www.store.com/api/orders/:id update specific order (params + send data)
//! DELETE:
//* www.store.com/api/orders/:id delete order (path params)

//*====================================================================

//? RESPONSE MESSAGE

//! 1- HTTP VER 1.1
//! 2- STATUS CODE -> Result (200 success - 400 Req Error - 404 Not Found)
//! 3- STATUS TEXT ->
//! 4- HEADER info about the response message, ex: text/html, charset=UTF-8
//! content-type: text/html, charset=UTF-8 OR application/json / charset=utf-8
//! 5- BODY
