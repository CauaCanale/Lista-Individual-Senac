// 9. Faça uma função que retorne o quadrado de um número. (#12)

function quadrado() {
    // Solicita o número ao usuário
    let num = parseInt(prompt("Digite um número:"));
  
    // Calcula o quadrado do número
    let quadrado = num * num;
  
    // Exibe o resultado
    alert("O quadrado do número é: " + quadrado);
  }
  
quadrado();