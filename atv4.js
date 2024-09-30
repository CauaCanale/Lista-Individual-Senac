// 4- Crie uma função que retorne a maior entre duas notas fornecidas.  (#5)

function maiorNota() {
    // Solicita as duas notas ao usuário
    let nota1 = parseInt(prompt("Digite a primeira nota:"));
    let nota2 = parseInt(prompt("Digite a segunda nota:"));
  
    // Retorna a maior nota
    let maior = (nota1 > nota2) ? nota1 : nota2;
    alert("A maior nota é: " + maior);
  }
  
  maiorNota();