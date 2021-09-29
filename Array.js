const valores = [1.2, 7.5, 4.9, 10.5];
console.log(valores[0], valores[2]);
console.log(valores[4]);

valores[4] = 11; //Adiciona um elemento ao array
console.log(valores);
console.log(valores.length); //Mostra quantos elementos tem o array

valores.push({id: 3}, false, null, 'teste'); //Adiciona novos elementos ao array
console.log(valores);

console.log(valores.pop());
delete valores[0]; //Deleta o elemento 'número'
console.log(valores);

console.log(typeof valores);