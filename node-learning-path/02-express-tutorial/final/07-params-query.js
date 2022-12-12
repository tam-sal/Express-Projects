const express = require('express')
const app = express()
const { products } = require('./data.js')

//!TS 5:50

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map(product => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProducts)
})

//* get single product with dynamic endpoint, route parameter :productID
app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params
  const singlePorduct = products.find((product) =>
    product.id === Number(productID)
  )

  !singlePorduct ? res.status(404).send('<h2>Product not found</h2>')
    : res.json(singlePorduct)
})

//* query params example
app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if (sortedProducts.length < 1) {
    return res.json({ success: true, data: [], message: 'No products matched your search' })

  }
  return res.status(200).json(sortedProducts)

})
