// Crie uma função que receba uma string e retorne seu comprimento. (#9)

function comprimentoString() {
    
    // Solicita a string ao usuário
    let str = prompt("Digite uma string:"); // str é usado para guardar o total da string
  
    // Retorna o comprimento da string
    let comprimento = str.length; // str.lenght retorna o número de caracteres na string.
        alert("O comprimento da string é: " + comprimento);
}
comprimentoString();