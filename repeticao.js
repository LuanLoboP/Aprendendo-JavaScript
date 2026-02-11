// 3 principais estruturas de repetição em JavaScript

// for (Para cada)
// 3 elementos: let i = 0 -> Variável de controle
// condição: i < 5 -> Enquanto essa condição for verdadeira, o loop contínua
// Incremento: i++ -> Incrementa o valor de i em 1 a cada iteração

for (let i = 0; i < 5; i++) {
  console.log("Valor atual:", i);
}

// While (Enquanto)
let c = 0;
while (c < 5) {
  c++; // COMEÇA DO 1 ATÉ 5
  console.log("Este é o poder do while", c);
  //   c++; // O ITERADOR AQUI SOMA DEPOIS QUE PRINTA, COMEÇANDO 0 ATÉ 0 4
  // SEM O ITERADOR A CONDIÇÃO FICA true, NO CASO INFINITA, AQUI RODADARIA 1 PRA SEMPRE
}
