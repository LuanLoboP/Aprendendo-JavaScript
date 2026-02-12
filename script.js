// ===============================
// VARIÁVEIS E CONCATENAÇÃO
// ===============================

let nome = "Luan";
console.log("Olá " + nome + "!");

let idade = "24"; // String
console.log(idade);

// ===============================
// NULL E VERIFICAÇÃO CONDICIONAL
// ===============================

// let endereco = null; // null = ausência intencional de valor
// console.log(endereco);

let endereco = "Rua das Conchas";

if (endereco == null) {
  console.log("Este não existe endereço: ");
} else {
  console.log("Este é o endereço: ", endereco);
}

// console.log("multiplicação: ", endereco * 2);
// Se fosse null, retornaria 0 em operações matemáticas

// ===============================
// COMPARAÇÃO E COERÇÃO EM CONDIÇÕES
// ===============================

// Mesmo sendo string, o JavaScript faz coerção
// idade ("24") será convertida para número na comparação

if (idade >= 18) {
  console.log("é maior de idade: " + idade + " anos");
} else {
  console.log("Não é maior de idade!");
}

// let MaiordeIdade = idade >= 18;
// console.log("É maior de idade: " + MaiordeIdade);

// ===============================
// UNDEFINED
// ===============================

// undefined = variável declarada, mas sem valor atribuído

let telefone; // UNDEFINED (não foi definido um valor)

// console.log("Telefone", telefone);
// console.log("multiplicação: ", telefone * 2);
// undefined em operação matemática retorna NaN (Not a Number)

if (telefone) {
  console.log("Multiplicação: ", telefone * 2);
} else {
  console.log("Não existe telefone");
}

// ===============================
// VALORES TRUTHY E FALSY
// ===============================

// No console do navegador:
// - Valores brancos geralmente são strings
// - Valores roxos geralmente são números

// null e undefined → são FALSY (false em contexto booleano)
// 0 e "" (string vazia) → também são FALSY
// Strings não vazias e números diferentes de 0 → são TRUTHY

// Em contextos com tipos diferentes:
// O JavaScript faz coerção de tipos automaticamente,
// convertendo valores para um tipo comum quando necessário.

// ===============================
// EXEMPLOS DE COERÇÃO AUTOMÁTICA
// ===============================

console.log("5" + 1); // "51" (concatenação de string)
console.log("5" - 1); // 4 (number)
console.log("5" * 2); // 10 (number)
console.log("5" / 2); // 2.5 (number)

// ===============================
// COERÇÃO EXPLÍCITA DE TIPOS
// ===============================

// Conversões feitas manualmente pelo programador

let numero = 1; // No console aparece como número (roxo)

let numeroString = String(numero);
// Converte número para string

let numeroNumero = Number(numeroString);
// Converte string para número

let segundoNumero = (123).toString();
// Outra forma de converter número para string

console.log(typeof numero, numero);
console.log(numeroString);
console.log(numeroNumero);
console.log(segundoNumero);

// ===============================
// CONVERSÃO INVÁLIDA
// ===============================

// O que acontece ao converter uma string não numérica?

let stringInvalida = "Luan";
let stringInvalidaNumber = Number(stringInvalida);

console.log(stringInvalidaNumber);
console.log(typeof stringInvalidaNumber, stringInvalidaNumber);
// Resultado: number NaN (Not a Number)
