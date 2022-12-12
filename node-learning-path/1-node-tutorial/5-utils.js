const sayHi = (name) => {
  console.log(`Hello there ${name}`);
}

//* since we are exporting just one const, we don't need to use { } in exports

module.exports = sayHi 