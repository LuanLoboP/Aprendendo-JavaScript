// ===============================
// OPERADORES DE INCREMENTO E DECREMENTO
// ===============================

// Operador ++  => incremento (+1)
// Operador --  => decremento (-1)

let count = 0;

count++; // 0 + 1
count++; // 1 + 1
count--; // 2 - 1

console.log("Count é igual a : ", count);

// ===============================
// OPERADORES DE COMPARAÇÃO
// ===============================

// >=  => maior ou igual
// <=  => menor ou igual

// ==  => compara apenas o valor (com coerção de tipos)
// === => compara valor E tipo (sem coerção de tipos)

console.log("EXEMPLO DO === ", 1 === "1");

// ===============================
// OPERADOR TERNÁRIO
// ===============================

// Estrutura:
// condição ? valorSeVerdadeiro : valorSeFalso

console.log(
  "CONDICIONAL(TERNÁRIO) EM UMA ÚNICA LINHA",
  1 === "1" ? "igual" : "diferente",
); // diferente

console.log("----------------");

console.log(
  "CONDICIONAL(TERNÁRIO) EM UMA ÚNICA LINHA",
  1 == "1" ? "igual" : "diferente",
); // igual

// ===============================
// ESTRUTURA CONDICIONAL IF/ELSE
// ===============================

// Estrutura:
// if (condição) {
//   bloco se verdadeiro
// } else {
//   bloco se falso
// }

if (1 == "1") {
  console.log("Igual");
} else {
  console.log("Diferente");
}
