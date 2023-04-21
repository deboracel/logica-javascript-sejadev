const person = {
  name: "Débora",
  lastName: "Santos"
}

// A letra O da palavra reservada Object é sempre maiuscula
// object.keys(): cria um array com todas as chaves do objeto
//console.log(Object.keys(person))

// object.values(): cria um array com todos os valores do objeto
//console.log(Object.values(person))

// object.entries(): cria um array com um array de objetos e valores
/*
 [[], []]
*/

const livros = {
  'Livro A': 19.90,
  'Livro B': 97.00,
  'Livro C': 20.00
}

const values = Object.values(livros)
const sum = values.reduce((vall, acc) => vall + acc, 0)

console.log(sum)


