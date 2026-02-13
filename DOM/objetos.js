// OBJETO

// Coleção de dados chave:valor
// LISTA EU BUSCO UM VALOR PELO ÍNDICE
// EM UMA COLEÇÃO DE DADOS EU BUSCO POR CHAVE
// UM OBJETO NÃO É ITERÁVEL, NÃO CONSIGO FAZER UM LOOP SOBRE CADA ELEMENTO DO OBJETO

// OBJETO PESSOA
const pessoa = {
  nome: "João",
  idade: 56,
  profissao: "Desenvolvedor Sênior",
  possuiFaculdade: true,
  irmaos: [
    {
      nome: "Ana", // OBJETO 1
      idade: 32,
      profissao: "Ciber Segurity",
      possuiFaculdade: true,
    },
    {
      nome: "Luiz", // OBJETO 2
      idade: 19,
      profissao: "estágio google",
      possuiFaculdade: true,
    },
  ],
  endereco: {
    rua: "Das Conchas",
    numero: 100,
  },
};

// ACESSANDO OS VALORES
// for (const attr of Object.keys(pessoa)) {
//   console.log("Retorno do for of: ", attr);
//   console.log("Valores: ", pessoa[attr]);
// }
// console.log("");

// // ACESSANDO TANTO CHAVE E VALOR VINDO COMO PAR ( nome:"João" )
// for (const [key, value] of Object.entries(pessoa)) {
//   console.log(key, value);
// }
// OU, USANDO UMA VÁRIAVEL
for (const parzinho of Object.entries(pessoa)) {
  console.log(parzinho[0], parzinho[1]); // parzinho[0] => CHAVE(key), parzinho[1] => VALOR(value)
}

// console.log(pessoa.irmaos[0].nome); // PARA PRINTAR VALORES DOS OBJETO ( irmaos )

// console.log(pessoa); // IMPRIMO TODOS OS DADOS
// console.log(pessoa.nome); // IMPRIMO UM DADO EM ESPECÍFICO

// pessoa.nome = "Maria"; // ATUALIZANDO ESSE VALOR DO OBJETO
// console.log(pessoa.nome);

//////////////////////////
// console.log("");

// //Como iterar sobre um array

// // for com iterador.
// let frutas = ["banana", "maça", "melância", "melão", "goiaba"];

// for (i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// console.log("");

// // for of => PERCORRE O ARRAY, CRIO A VÁRIAVEL QUE VAI ITERAR O ARRAY (fruta of frutas)
// for (const fruta of frutas) {
//   console.log(fruta);
// }
