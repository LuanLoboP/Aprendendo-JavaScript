// ===============================
// VARIÁVEIS EM JAVASCRIPT
// ===============================

// ===============================
// LET
// ===============================

// let é usado para declarar variáveis que podem mudar de valor
// let possui escopo de bloco (ex: dentro de if, for, etc.)

let altura = 1.64;

altura = 1.7; // Pode alterar o valor
altura = "Luan"; // JavaScript permite trocar o tipo (tipagem dinâmica)

console.log(altura);

// ===============================
// CONST
// ===============================

// const não pode ser declarada sem valor inicial
// Após declarada, não pode ser reatribuída

const pi = 3.14;
const horasDia = 24;

// pi = 3.15;
// Erro: Uncaught TypeError: Assignment to constant variable.

console.log(pi);
console.log(horasDia);

// ===============================
// VAR
// ===============================

// var é usado para declarar variáveis que podem mudar de valor
// var possui escopo global ou de função (não tem escopo de bloco)

var nomeVar = "Note";

console.log("Nome var: ", nomeVar);

// ===============================
// DIFERENÇA DE ESCOPO (VAR NO FOR)
// ===============================

// Com var, a variável pode ser acessada fora do bloco do for
// Com let, isso não seria possível (geraria "not defined")

for (var num = 0; num < 2; num++) {
  var nomeVar = "Luan";
  console.log("Nome var: ", nomeVar);
  console.log("Numero: ", num);
}

for (var num = 0; num < 2; num++) {
  var nomeVar = "Teste";
  console.log("Nome var: ", nomeVar);
  console.log("Numero: ", num);
}
