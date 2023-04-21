// let array = [true, false, 0, 1, 2, "string aqui", "sejadev"]
//             0    1     2  3  4        5            6
/*
array.pop() // remove o ultimo elemento do array
array.push(1000, "string") // adiciona elementos no array

let newArray = [10, 20, 30]
let i = 0

while (i < newArray.length) {
  i++
}

for (let pos = 0; pos < newArray.length; pos++) {
 // console.log(newArray[pos])
}

// for..in
for (let pos in newArray) {
 // console.log(pos)
 // console.log(newArray[pos])
}

// for..of
for (let arr of newArray) {
 // console.log(arr)
}
/*
  dado um array com X numeros, encontrar a media desses numero
  media = (soma dos elementos) / tamanho
*/

const numbers = [2, 4, 6, 8, 10, 12, 14, 16]
let sum = 0
for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length
console.log(sum)


