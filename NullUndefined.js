let valor; //Não inicializada
console.log(valor);

valor = null; //Ausência de valor
console.log(valor);
//console.log(valor.toString()); //Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.55;
console.log(produto);

produto.preco = undefined; //Evite definir undefined
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);

produto.preco = null; //Sem preço
console.log(!!produto.preco);
console.log(produto);