let paymentStatus = "PAID";

switch (paymentStatus) {
  case "PENDING":
    console.log("Pagamento pendente");
    break;
  case "PAID":
    console.log("Pagamento concluído");
    break;
  case "FAILED":
    console.log("Pagamento falhou");
    break;
  default:
    console.log("Status do pagamento não específicada");
}
