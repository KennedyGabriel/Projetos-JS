const escola = "Tra1n";

console.log(escola.charAt(4)); //Exibe somente o caractere 'número'
console.log(escola.charAt(5)); //Quando não existe o caractere 'número' o sistema imprime um espaço vazio
console.log(escola.charCodeAt(3));  //Exibe o código do caractere escolhido
console.log(escola.indexOf("3")); //Exibe  o índice do caractere escolhido

console.log(escola.substring(1)); //Exibe do caractere 'número' até o caractere final
console.log(escola.substring(0 , 3)); //Exibe do caractere inicial até o caractere final sem incluir o caractere final

console.log('My '.concat(escola).concat("!")); //String concatenando com a constante
console.log(escola.replace(1 , 'i')); //Troca o 'caractere antigo' pelo 'caractere novo'