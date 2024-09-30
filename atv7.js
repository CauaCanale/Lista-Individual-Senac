// 7. Escreva uma função que verifique se um número é positivo, negativo ou zero. (#8)


function verificarNumero() {
  // Solicita o número ao usuário
  let Numero = prompt("Digite o número:");

  // Verifica se o número é positivo
  if (Numero > 0) {
    alert("O número fornecido é positivo");
  } 
  // Verifica se o número é negativo
  else if (Numero < 0) {
    alert("O número fornecido é negativo");
  } 
  // Verifica se o número é zero
  else if (Numero == 0) {
    alert("O número fornecido é zero");
  }
}
verificarNumero();
