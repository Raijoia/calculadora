// Colocando caracter no visor da calculadora
function adicionarCaracter(caracter) {
  const valorDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = valorDisplay + caracter
}

// Limpando o visor da calculadora
function limparTela() {
  const valorDisplay = document.querySelector(".display").value = ""
}

// calculando
function calcular() {
  const valorDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = eval(valorDisplay)
}

// invertendo o numero
function inverterNumero() {
  const valorDisplay = document.querySelector(".display").value

  document.querySelector(".display").value = valorDisplay * -1
}