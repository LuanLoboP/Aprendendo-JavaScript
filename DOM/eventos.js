// OBJECT DOCUMENT => Objeto nativo do JS que representa a página HTML
// Permite manipular os elementos da página (DOM)
let divContainer = document.querySelector("#div1");
let h1Element = document.getElementsByTagName("h1"); // RETORNA UM ARRYA, POR ISSO BUSQUEI O INDEX, POIS PODE TER MAIS DE UM h1 NA PÁGINA HTML
let inputElement = document.querySelector("#input1");

console.log(h1Element); // PRINTA UMA LISTA, DOS h1 DA PÁGINA.
console.log(inputElement.value);

let h3Element = document.createElement("h2");
let h3text = document.createElement("h2");
h3Element.textContent = "teste de h2";
h3text.textContent = "teste de h2 2!";

divContainer.setAttribute("class", "classe2000");
// document.body.removeChild(divContainer);

//divContainer.appendChild(h3Element); // COLOCA O ELEMENTO NA PÁGINA

document.body.appendChild(h3Element);
document.body.appendChild(h3text);

// DOCUMENT OBJECT MODEL (DOM)

document.body.style.backgroundColor = "Lightblue";
divContainer.style.backgroundColor = "yellow";

let button = document.querySelector("#button");

function showMessage() {
  console.log("Button clicked!");
  alert("Button clicked!");
}

button.addEventListener("click", showMessage);

// button.addEventListener("click", function () {
//   // ACIONEI O addEventLiestner E COMO ARGUMENTO EU PASSEI UMA FUNÇÃO ANÔNIMA, SEM NOME POIS FICA COMO ARGUMENTO
//   alert("Button clicked!");
// });

// function buttonClicked() {
//   alert("Button was clicked!");
// }
