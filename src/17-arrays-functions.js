const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

// forEach: passa por todos os elementos do array
array.forEach((elemento, posicao) => {
  //console.log(`${elemento} - posicao ${posicao}`)
})

// find: retorna o elemento
const valor = array.find(elemento => elemento === 10)

// findIndez: retorna a posição do elemento
const index = array.findIndex((elemento) => elemento === 10)

// some: retorna true se pelo menos um numero satisfazer a condição
const some = array.some(elemento => elemento >= 10)

// every: retorna true se todos os numeros respeitarem a condição
const every = array.every(elemento => elemento >= 1)

const newArray = [1, 2, 3, 4, 5]
//splice: corta o array, o primeiro parametro e o inicio(posiçã)e o segundo e a 
//quantidade (quantas posições)
console.log(newArray.splice(2,2))

//map: alterar os valores dentro do array seguindo uma regra
console.log(newArray.map((elemento) => {
  return elemento * 2
}))


//filter: filtrar os elementos dentro do array
console.log(newArray.filter((elemento) => {
  return elemento % 2 === 1
}))

//reduce: reduz o array para algum outro elemento
console.log(newArray.reduce((acunulado, elemento) => {
  return acunulado + elemento
}, 0))
