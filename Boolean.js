let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; //O valor '1' se comporta como verdadeiro se fizer uma negação duas vezes
console.log(!!isAtivo); //Cada '!' é uma "negação", ou seja, duas negações e se torna uma "afirmação"

console.log("Os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'qualquer coisa');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log((isAtivo = true));

console.log("\nOs falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("\nFinalizando...");
console.log(!! ('' || null || 0 || ' ')); //O resutaldo será verdadeiro, porque pelo menos um dos "objetos" é verdadeiro

const nome = '';
console.log(nome || "Desconhecido"); //Caso 'nom' não esteja válido usa a informação seguinte

const nome1 = 'Kennedy';
console.log(nome1);