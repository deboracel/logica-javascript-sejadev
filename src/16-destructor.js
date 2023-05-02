const pessoa = {
  nome: "Débora",
  sobrenome: "Santos",
  idade: 39
}

const {idade, nome} = pessoa
// const nome = pessoa.nome
// const idade = pessoa.idade

/*
const array = [1, 2, 3, 4]
const [a, b] = array
console.log(a)
console.log(b)
*/

const pessoaComMaisDados = {
  ...pessoa
}

console.log(pessoaComMaisDados)