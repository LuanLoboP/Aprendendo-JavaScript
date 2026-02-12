// ===============================
// ESTRUTURA CONDICIONAL: SWITCH
// ===============================

// O switch é utilizado quando temos
// múltiplas possibilidades para uma mesma variável

let paymentStatus = "PAID";

// Estrutura:
// switch (variável) {
//   case "valor1":
//     código
//     break;
//   default:
//     código padrão
// }

switch (paymentStatus) {
  // Caso o status seja "PENDING"
  case "PENDING":
    console.log("Pagamento pendente");
    break; // Interrompe a execução do switch

  // Caso o status seja "PAID"
  case "PAID":
    console.log("Pagamento concluído");
    break;

  // Caso o status seja "FAILED"
  case "FAILED":
    console.log("Pagamento falhou");
    break;

  // Caso nenhum dos valores acima seja atendido
  default:
    console.log("Status do pagamento não específicada");
}
