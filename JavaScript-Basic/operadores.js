// ==========================================
// OPERADORES DE INCREMENTO E DECREMENTO
// ==========================================
console.log("--- Incremento e Decremento ---");

let count = 0;

count++; // Incrementa 1: (0 + 1 = 1)
count++; // Incrementa 1: (1 + 1 = 2)
count--; // Decrementa 1: (2 - 1 = 1)

console.log("Resultado final do count:", count); // Saída: 1

// ==========================================
// OPERADORES DE COMPARAÇÃO
// ==========================================
console.log("\n--- Comparação ---");

// ==  (Igualdade Ampla): Compara apenas o valor, converte tipos se necessário.
// === (Igualdade Estrita): Compara valor E tipo. Recomendado como boa prática.

console.log("1 === '1' (Estrito):", 1 === "1"); // false (Número vs String)
console.log("1 == '1'  (Amplo):  ", 1 == "1"); // true  (Valores iguais)

// ==========================================
// OPERADOR TERNÁRIO
// ==========================================
console.log("\n--- Operador Ternário ---");

// Sintaxe: condição ? true : false

const comparacaoEstrita = 1 === "1" ? "Igual" : "Diferente";
console.log("Resultado Estrito:", comparacaoEstrita); // Diferente

const comparacaoAmpla = 1 == "1" ? "Igual" : "Diferente";
console.log("Resultado Amplo:  ", comparacaoAmpla); // Igual

// ==========================================
// ESTRUTURA CONDICIONAL IF/ELSE
// ==========================================
console.log("\n--- Estrutura IF/ELSE ---");

const idade = 18;

if (idade >= 18) {
  console.log("Status: Maior de idade");
} else {
  console.log("Status: Menor de idade");
}
