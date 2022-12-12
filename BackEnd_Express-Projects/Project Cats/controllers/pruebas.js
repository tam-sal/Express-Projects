const cats = [
  {
    "name": "Fifi",
    "age": "2 months",
    "color": [
      "Black",
      "White"
    ],
    "accessories": []
  },
  {
    "name": "Bubbles",
    "age": "1 year",
    "color": [
      "Gray",
      "Black"
    ],
    "accessories": [{
      "id": 1,
      "color": "Red",
      "type": "Necklace",
      "popularity": "low",
      "description": "Cool necklace that will make your cat unique!"
    }]
  },
  {
    "name": "Bubbles",
    "age": "1 year",
    "color": [
      "Gray",
      "Black"
    ],
    "accessories": [{
      "id": 1,
      "color": "Red",
      "type": "Necklace",
      "popularity": "low",
      "description": "Cool necklace that will make your cat unique!"
    }]
  },
  {
    "name": "Bubbles",
    "age": "1 year",
    "color": [
      "Gray",
      "Black"
    ],
    "accessories": [{
      "id": 2,
      "color": "Red",
      "type": "Necklace",
      "popularity": "average",
      "description": "Cool necklace that will make your cat unique!"
    }]
  },
  {
    "name": "Bubbles",
    "age": "1 year",
    "color": [
      "Gray",
      "Black"
    ],
    "accessories": [{
      "id": 3,
      "color": "Red",
      "type": "Necklace",
      "popularity": "average",
      "description": "Cool necklace that will make your cat unique!"
    }]
  },
  {
    "name": "Bubbles",
    "age": "1 year",
    "color": [
      "Gray",
      "Black"
    ],
    "accessories": [{
      "id": 1,
      "color": "Red",
      "type": "Necklace",
      "popularity": "low",
      "description": "Cool necklace that will make your cat unique!"
    }]
  }
]

const accessories = [
  {
    "id": 1,
    "color": "Red",
    "type": "Necklace",
    "popularity": "low",
    "description": "Cool necklace that will make your cat unique!"
  },
  {
    "id": 2,
    "color": "White",
    "type": "Bracelet",
    "popularity": "low",
    "description": "A simple bracelet for your kitty's legs"
  },
  {
    "id": 3,
    "color": "Blue",
    "type": "Sweater",
    "popularity": "average",
    "description": "A warm sweater that will warm up you kitty during winter days"
  },
  {
    "id": 4,
    "color": "Red",
    "type": "Bun",
    "popularity": "high",
    "description": "This bun will make your cat the most cute one in town!"
  },
  {
    "id": 5,
    "color": "Black",
    "type": "Shoes",
    "popularity": "low",
    "description": "These wonderful pair of shoes will make your kitty the most elegant"
  }
]
//{}
function addCatAccessory(catName, catAccessory) {
  //* Agrega un accesorio a un gatito
  //* Si el gato no existe arrojar un Error ('El gato <nombre_gato> no existe')
  //* Si el gato ya tiene puesto el accesorio, arrojar un Error('El gato <nombre_gato> ya tiene el accesorio puesto') y no lo agrega
  //* Si el accesorio fue agregado correctamente retornar un mensaje: 'El accesorio <tipo_accesorio> fue agregado a <nombre_gato> con exito'

  const foundCat = cats.find(cat => cat.name === catName)
  if (!foundCat) throw new Error(`El gato ${catName} no existe`)
  const idx = cats.indexOf(foundCat)
  const { id } = catAccessory
  if (cats[idx].accessories.find(acc => acc.id === id)) throw new Error(`El gato ${catName} ya tiene el accesorio puesto`)
  cats[idx].accessories.push(catAccessory)
  return `El accesorio ${catAccessory.type} fue agregado a ${catName} con exito`

}

console.log(addCatAccessory("Bubbles", {
  "id": 1,
  "color": "Red",
  "type": "Necklace",
  "popularity": "low",
  "description": "Cool necklace that will make your cat unique!"
}))
console.log(addCatAccessory("Bubbles", {
  "id": 1,
  "color": "Red",
  "type": "Necklace",
  "popularity": "low",
  "description": "Cool necklace that will make your cat unique!"
}))




