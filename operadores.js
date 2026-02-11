// OPERADORES

// operador ++ (incremento) e operador -- (decremento)
let count = 0;
count++; // 0 + 1
count++; // 1 + 1
count--; // 2 - 1
console.log("Count é igual a : ", count);

// >=
// <=
// == ( COMPARA VALOR COM COERÇÃO DE TIPOS)
// === ( COMPARA VALOR O TIPO, SEM COERÇÃO DE TIPOS)
console.log("EXEMPLO DO === ", 1 === "1");
console.log(
  "CONDICIONAL(TERNÁRIO) EM UMA ÚNICA LINHA",
  1 === "1" ? "igual" : "diferente",
); // diferente

console.log("----------------");

console.log(
  "CONDICIONAL(TERNÁRIO) EM UMA ÚNICA LINHA",
  1 == "1" ? "igual" : "diferente",
); // igual

// condicao(1) ?(true) valorVerdadeiro :(false) valorFalso;
if (1 == "1") {
  console.log("Igual");
} else {
  console.log("Diferente");
}
