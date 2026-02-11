// Variáveis

// let é usadao para variáveis que podem mudar de valor
// let tem escopo de bloco

let altura = 1.64;
altura = 1.7;
altura = "Luan";
console.log(altura);

// const ele não pode ser delarada sem um valor inicial

const pi = 3.14;
const horasDia = 24;

//pi = 3.15; //
// Uncaught TypeError: Assignment to constant variable.

console.log(pi);
console.log(horasDia);

// var é usado para declarar variáveis que podem mudar de valor
// var tem escopo global ou função
var nomeVar = "Note";
console.log("Nome var: ", nomeVar);

// CONSIGO ACESSAR ESSA VARIÁVEL FORA DO ESCOPO DO FOR, COM LET NÃO CONSEGUIRIA, IRIA MOSTRAR (not defined)
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
