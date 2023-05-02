/*
1. João, um pescador, gostaria de controlar o rendimento diário de seu trabalho.

Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento
de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$4,00 por quilo
excedente. João precisa que você faça um script que leia o peso de peixes de João e
verifica se há ou não excesso. Se houver, gravar na variável "excesso" e na variável 
"multa" o valor da multa que João deverá pagar.
*/

const limite = 50 // limite em kg definido
const valorDaMulta = 4 // valor da multa em R$ definido
const pesoDePeixes = 60 // peso de peixes de João

let excesso = pesoDePeixes > limite ? pesoDePeixes - limite : 0
let multa = excesso * valorDaMulta

console.log("Excesso: ", excesso) 
console.log("Multa: R$", multa)






