// ==========================================
// SWITCH (O "Menu de Escolhas")
// ==========================================

// O Switch é ótimo para quando uma única variável
// pode ter vários nomes ou valores fixos.
// É mais organizado que usar um monte de "if/else if".

let statusPagamento = "PAID";

switch (statusPagamento) {
  case "PENDING":
    console.log("Aguardando o dinheiro cair...");
    break; // O 'break' é o "freio". Sem O break, o código continua rodando os de baixo!

  case "PAID":
    console.log("Dinheiro na conta! Pagamento aprovado.");
    break;

  case "FAILED":
    console.log("Ops! Algo deu errado no pagamento.");
    break;

  default: // SE NENHUM DE CIMA FUNCIONAR, ESSE VAI
    console.log("Status desconhecido. Entre em contato com o suporte.");
}

/* UM RESUMO DE COMO FUNCIONA: 
  - Pense no Switch como um interruptor de luz ou um menu de elevador.
  - Não esqueça o 'break'! Se você tirar o break do "PAID", 
    ele vai imprimir o "PAID" e o "FAILED" logo em seguida.
  - O 'default' é o seu plano B, ele sempre roda se nada der certo antes.
*/
