// ==========================================
// VARIÁVEIS EM JAVASCRIPT
// ==========================================

// ------------------------------------------
// LET (A variável que muda)
// ------------------------------------------
// Use o 'let' para coisas que você sabe que vão mudar de valor.
// Ele só funciona dentro do "bloco" (entre as chaves { }) onde foi criado.

let altura = 1.64;

altura = 1.7; // Ok, mudou o número
altura = "Luan"; // O JS aceita trocar número por texto (Tipagem Dinâmica)

console.log("Altura atualizada:", altura);

// ------------------------------------------
// CONST (A "caixa" lacrada)
// ------------------------------------------
// Use 'const' para valores que nunca devem mudar.
// É obrigatório dar um valor pra ela na hora que cria.

const pi = 3.14;
const horasNoDia = 24;

// pi = 3.15; // Se tentar mudar, o código vai quebrar e vai gerar um erro!!!!

console.log("Valor fixo de PI:", pi);

// ------------------------------------------
// 3. VAR (O jeito antigo e "bagunçado")
// ------------------------------------------
// O 'var' é perigoso porque ele "vaza" de dentro dos blocos.
// Hoje em dia, quase não se usa mais. Prefira sempre LET ou CONST.

var nomeItem = "Note";

// Exemplo do perigo do VAR (Escopo):
for (var i = 0; i < 2; i++) {
  var segredo = "Vazei!";
}

// Com VAR, consigo ver o 'i' e o 'segredo' aqui fora!
// Se fosse LET, daria erro de "não definido", o que é mais seguro.
console.log("O 'i' vazou para fora do for:", i);
console.log("O 'segredo' vazou:", segredo);

/* UM RESUMO PRA LEMRAR DO CONTEXTO:
   - Comece tudo com CONST. 
   - Se precisar mudar o valor depois, troque para LET.
   - Esqueça que o VAR existe (deixe ele só para entender códigos antigos).
*/
