let idades = [18, 25, 32, 9, 45]; // ARRAY COM 6 ELEMENTOS
// LEMBRA DO ÍNDICES 0,1,2,3,4,5

// let idade = 18;
// let idade2 = 19;
// let isMaiorDeIdade = idade >= 18;
// let isMaiorDeIdade2 = idade2 >= 18;

// EVITARIA ESSA EXTENÇÃO DE CÓDIGO

// VOID => quando a função não retorna nada
// RETURN => quando a função retorna algo
function verificaSeMaiorIdade(idade) {
  return idade >= 18; // true ou false
}

function somarIdades(somatorio, idade) {
  return somatorio + idade;
}

// indice => iterador
// idade.length => tamanho do array
// i++ => incrementando o iterador
let somaDasIdades = 0;
for (indice = 0; indice < idades.length; indice++) {
  let idade = idades[indice];
  console.log(idade, verificaSeMaiorIdade(idade));
  somaDasIdades = somarIdades(somaDasIdades, idade); // somatorio , idade
  //   if (verificaSeMaiorIdade(idade)) {
  //     console.log(`Essas idade são +18: ${idade}`);
  //   } else {
  //     console.log(`Esses são -18 ${idade}`);
  //   }
}

console.log("A soma das idades é: ", somaDasIdades);
