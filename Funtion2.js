//Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b);
};

imprimirSoma (2, 3);

//Amazenadno um função arrow em uma variável

const soma = (a, b) => { //Você usa '=' + '>' formando uma seta que representa a função arrow
    return a + b;
};

console.log(soma(3, 5));

//Retorno implícito

const subtracao = (a, b) => a - b;

console.log(subtracao(9, 6));