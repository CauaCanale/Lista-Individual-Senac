// 11. Faça uma função que retorne a raiz quadrada de um número. (#23)

function raizQuadrada() {
    
    // Solicita o número ao usuário
    let num = parseInt(prompt("Digite um número:"));
  
    // Verifica se o número é negativo
    if (num < 0) {
    alert("Erro: Não é possível calcular a raiz quadrada de um número negativo.");
    return;
}
  
    // Exibe o resultado
    alert("A raiz quadrada do número é: " + Math.sqrt(num)); // math.sqrt é usado para calcular a raiz quadrada de um número.
}
raizQuadrada();