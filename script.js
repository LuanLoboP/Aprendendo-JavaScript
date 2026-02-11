let nome = "Luan";
console.log("Olá " + nome + "!");

let idade = "24";
console.log(idade);

// let endereco = null; // NULL ( Vazio )
// console.log(endereco);

let endereco = "Rua das Conchas";
if (endereco == null) {
  console.log("Este não existe endereço: ");
} else {
  console.log("Este é o endereço: ", endereco);
}
// console.log("multiplicação: ", endereco * 2); // NULL (retorna zero)

if (idade >= 18) {
  console.log("é maior de idade: " + idade + " anos");
} else {
  console.log("Não é maior de idade!");
}
// let MaiordeIdade = idade >= 18;
// console.log("É maior de idade: " + MaiordeIdade);

let telefone; // UNDEFINED (Não foi defido um valor)
// console.log("Telefone", telefone);

// console.log("multiplicação: ", telefone * 2); // NaN (Not a number=Não é um número)

if (telefone) {
  console.log("Multiplicação: ", telefone * 2);
} else {
  console.log("Não existe telefone");
}

// No console do navegador os valores que estão na cor branca são strings e da cor roxa são números

// Perceba que o valor NULL e UNDEFINED são tratados como falsos em contexto booleanos
// Os valores string e numeros => São tratados como true em contextos booleanos
// O zero(0) e string vazia ("") => São tratados como false em contexto booleano

// Em contextos de interações entre diferentes tipos de valores:
//O que ele faz é uma coersão de tipos, o JavaScript tenta converter os valores para um tipo comum, exemplo => string para numero se eu tentar somar nome = "2" + 2 = 4 ou no caso de condicionais (no caso acima o if) onde pega o valor e transforma em booleano para tratar dentro do if.

console.log("5" + 1); // Da "51" (string) => Ele esta concatenando string
console.log("5" - 1); // 4 (number)
console.log("5" * 2); // 10 (number)
console.log("5" / 2); // 2.5 (number)

// COERÇÃO EXPLÍCITA DE TIPOS
let numero = 1; // NO CONSOLE DO NAVEGADOR O NÚMERO ESTÁ ROXO
let numeroString = String(numero); // ELE TRANSFOMOU O NÚMERO 1 EM STRING
let numeroNumero = Number(numeroString); // PEGOU O NÚMERO QUE ESTAVA EM STRING, E TRANSFORMOU ELE EM NUMBER
let segundoNumero = (123).toString();

console.log(typeof numero, numero);
console.log(numeroString);
console.log(numeroNumero);
console.log(segundoNumero);

// O que acontece quando tento converter uma string ("Luan") em um número
let stringInvalida = "Luan";
let stringInvalidaNumber = Number(stringInvalida);
console.log(stringInvalidaNumber);
console.log(typeof stringInvalidaNumber, stringInvalidaNumber); // number NaN (Not Number)
