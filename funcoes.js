// ===============================
// ARRAY DE IDADES
// ===============================

let idades = [18, 25, 32, 9, 45]; // Array com 5 elementos
// Índices do array: 0, 1, 2, 3, 4

// ===============================
// EXEMPLO SEM ARRAY (CÓDIGO MAIOR)
// ===============================

// let idade = 18;
// let idade2 = 19;
// let isMaiorDeIdade = idade >= 18;
// let isMaiorDeIdade2 = idade2 >= 18;

// Usar array evita essa extensão de código

// ===============================
// CONCEITOS IMPORTANTES
// ===============================

// void  => quando a função não retorna nada
// return => quando a função retorna algum valor

// ===============================
// FUNÇÕES
// ===============================

// Verifica se a idade é maior ou igual a 18
function verificaSeMaiorIdade(idade) {
  return idade >= 18; // Retorna true ou false
}

// Soma as idades acumulando o valor anterior
function somarIdades(somatorio, idade) {
  return somatorio + idade;
}

// ===============================
// LOOP PARA PERCORRER O ARRAY
// ===============================

// indice => variável iteradora
// idades.length => tamanho do array
// indice++ => incrementa o iterador

let somaDasIdades = 0;

for (indice = 0; indice < idades.length; indice++) {
  let idade = idades[indice];

  console.log(idade, verificaSeMaiorIdade(idade));

  // somatorio atual + idade atual
  somaDasIdades = somarIdades(somaDasIdades, idade);

  // Exemplo de estrutura condicional
  // if (verificaSeMaiorIdade(idade)) {
  //   console.log(`Essas idade são +18: ${idade}`);
  // } else {
  //   console.log(`Esses são -18 ${idade}`);
  // }
}

// ===============================
// RESULTADO FINAL
// ===============================

console.log("A soma das idades é: ", somaDasIdades);
