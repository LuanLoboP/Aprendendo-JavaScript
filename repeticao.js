// ===============================
// 3 PRINCIPAIS ESTRUTURAS DE REPETIÇÃO EM JAVASCRIPT
// ===============================

// ===============================
// FOR (Para)
// ===============================

// O for possui 3 partes principais:
// 1️⃣ Variável de controle → let i = 0
// 2️⃣ Condição → i < 5 (enquanto for verdadeira, o loop continua)
// 3️⃣ Incremento → i++ (incrementa 1 a cada iteração)

for (let i = 0; i < 5; i++) {
  console.log("Valor atual:", i);
}

// ===============================
// WHILE (Enquanto)
// ===============================

// Executa enquanto a condição for verdadeira

let c = 0;

while (c < 5) {
  c++; // Incrementa antes de imprimir (vai de 1 até 5)

  console.log("Este é o poder do while", c);

  // Se o incremento fosse depois do console.log:
  // c++;
  // Começaria imprimindo 0 até 4

  // ⚠️ Sem o incremento, a condição permaneceria true
  // Isso causaria um loop infinito (rodaria para sempre)
}
