// Arrays

// Lista de elementos - Lista de valores
// Uma única variável para ter acesso a vários valores

// SAÍDA: lenght: 0 => Tamanho do Array
// let listaVazia = [];

let listaNum = [1, 2, 3, 4, 5];
let listaNome = ["Luan", "Luana", "Daniel", "Gael"];
let listaAleatoria = [
  "João",
  "Ben",
  "Ana",
  false,
  true,
  null,
  12,
  34,
  45,
  3,
  4.5,
  7.89,
];
console.log(listaAleatoria);

//////////////////////////////////////////////////////////////
// Indice => Posição de um elemento no array [0,1,2,3,4]
// console.log(listaNome[0]); => "Luan"

// listaNum[0];
// listaNum[20] = 32324;
// listaNum.push(90);
// console.log(listaNum);
// console.log("----------------");
// listaNum.pop(); // removeu o 90
// let removido = listaNum.pop();
// console.log(removido); // removeu o 32324

// filter => Percorre uma lista, filtra e retorna o que passou no filtro
// Lembrando o filter ele não altera a lista que esta sendo passada, ele cria uma lista nova

// let filtroNome = listaNome.filter((nome) => nome.startsWith("L"));
// console.log(filtroNome);

// function filtraNomeLetra(nome) {
//   if (nome.startsWith("D")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let listaNova = listaNome.filter(filtraNomeLetra); // Filtra os elementos que começam com "D"
// console.log(listaNova);

// // USO DA arrow function
// let listaNova2 = listaNome.filter((nome) => nome.startsWith("G"));
// console.log(listaNova2);

// // map => Percorre a lista e execulta uma ação, e retorna lista nova
// let listaUperCase = listaNome.map((nome) => nome.toUpperCase()); // Percorre o array e execulta uma ação para cada elemento
// console.log(listaUperCase);

// // foreach => Percorre a loista e execulta uma ação, mas não retorna nada
// listaNome.forEach((nome) => console.log(nome)); // FAZER UM LOOP ENTRE ELES, E PRINTAR. USO O foreach
// // para cada nome => printa(nome)

// // foreach não cria uma lista nova igual o map, ele apenas percorre o array

// // sort => Ordena a lista em ordem alfabética
// // O sort ALTERA O ARRAY ORIGINAL!!! <============
// let listaOrdenada = listaNome.sort();
// console.log(listaOrdenada);
