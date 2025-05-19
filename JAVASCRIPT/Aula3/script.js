/* 1 - Função Nomeada */
/* Calculadora de desconto*/

function calcularDesconto(valorOriginal, percentualDesconto){
     /*LOCAL*/
     const desconto = valorOriginal * (percentualDesconto/100)
     return valorOriginal - desconto
}
let precoOriginal = 100
let precoComDesconto = calcularDesconto(precoOriginal, 10)
console.log("Preço com desconto (função nomeado): R$", precoComDesconto)

/*2-Função Anônima*/
const mensagemFinal = function(nomeProduto, valorFinal){
    return `O Produto ${nomeProduto} sai por R$ ${valorFinal.toFixed(2)}`
}
console.log(mensagemFinal("Camiseta", precoComDesconto))

/* 3- Função com escopo local e global */
let taxa = 5;
function aplicarTaxa(valor){
    let taxa = 10
    return valor + taxa
}
console.log("Valor final com a taxa R$", aplicarTaxa(90))
console.log("Taxa: ", taxa)

/*4 - Arrow Function */
const calcularDesconto2 = (numero) => numero * 2
console.log("Dobro de 8:", calcularDesconto2(8))