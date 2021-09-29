//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2); //Nesse caso aparecerá NaN
imprimirSoma(2, 4, 7, 1, 10, 40); //O programa fará a soma dos dois primeiros números e irá ignorar o restante

//Função com retorno

function soma(a, b = 9){
    return a + b
};

console.log(soma(2, 3));
console.log(soma(2));