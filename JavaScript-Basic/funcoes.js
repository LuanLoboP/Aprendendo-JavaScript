// ===============================
// UMA CONSTANTE DE ARRAY DE IDADES
// ===============================
const idades = [18, 25, 32, 9, 45]; // Array com 5 elementos
// Índices: 0, 1, 2, 3, 4

// ===============================
// FUNÇÕES
// ===============================

// Verifica se a idade é maior ou igual a 18 (Retorna Booleano)
function verificaSeMaiorIdade(idade) {
  return idade >= 18;
}

// Soma as idades acumulando o valor anterior (Retorna Número)
function somarIdades(somatorio, idade) {
  return somatorio + idade;
}

// ===============================
// PROCESSAMENTO (LOOP)
// ===============================
let somaDasIdades = 0;

for (let indice = 0; indice < idades.length; indice++) {
  const idade = idades[indice];
  const eMaior = verificaSeMaiorIdade(idade);

  // Verificação de idade com log e emoji
  if (eMaior) {
    console.log(`Idade: ${idade} | Status: +18 ✅`);
  } else {
    console.log(`Idade: ${idade} | Status: -18 ❌`);
  }

  // Acumulando a soma
  somaDasIdades = somarIdades(somaDasIdades, idade);
}

// ===============================
// RESULTADO FINAL
// ===============================
console.log("-------------------------------");
console.log("Total de elementos:", idades.length);
console.log("A soma de todas as idades é:", somaDasIdades);
console.log("Média das idades:", somaDasIdades / idades.length);
