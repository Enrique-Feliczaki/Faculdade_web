function contarPalavrasLongas(array) {
  return array.filter(palavra => palavra.length > 5).length;
}

console.log(contarPalavrasLongas(["cachorro", "sol", "banana", "avião", "computador"]));
