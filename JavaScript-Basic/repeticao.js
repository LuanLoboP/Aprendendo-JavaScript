// ==========================================
// FOR (Sempre que você sabe o limite)
// ==========================================

// O FOR é tipo uma corrida com volta marcada:
// -> Começo: let i = 0
// -> Objetivo: i < 5 (até onde vou)
// -> Passo: i++ (de quanto em quanto eu pulo)

for (let i = 0; i < 5; i++) {
  console.log("Volta número:", i);
}

// ==========================================
// WHILE (Sempre que depende de uma condição)
// ==========================================

// O WHILE é assim > "enquanto a condição for verdade, eu rodo":
let c = 0;

while (c < 5) {
  // UM PONTO IMPORTANTE -> A ordem do incremento muda tudo!
  c++; // Primeiro somo 1, depois mostro (vai de 1 até 5)

  console.log("Contagem do While:", c);

  /* LEMBRA!! 
     Se você esquecer o 'c++', o código entra em "Loop Infinito".
     O navegador vai dar uma travada porque ele nunca para de rodar!
  */
}

// ==========================================
// DO...WHILE (Faz primeiro, pergunta depois)
// ==========================================

// Diferente do While, esse aqui garante que o código rode
// PELO MENOS UMA VEZ, mesmo se a condição for falsa de cara.

let contador = 10;

do {
  console.log("Eu rodo pelo menos uma vez antes de parar!");
  contador++;
} while (contador < 5);
// Olha o 10 não é menor que 5, mas ele rodou a primeira vez, depois ele parou.
