console.log("Teste em javascript");

// variáveis
var animal = 'gato';
console.log(animal)

let nomeCompleto = "Leo Clemons Sampaio"
console.log(nomeCompleto)

var valor1;
const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor1 = 15;
// valor0 = 14; -- Cont não pode ser atribuido

// verificação de tipos:
console.log(typeof valor1);

//algoritmo: entrada + processamento + saida
var nome = window.prompt("Nome: ");
// console.log("Seja bem-vindo " + nome + ", aproveite!");
console.log(`Seja bem-vindo ${nome}, aproveite!`); // template literal
document.writeln(`Seja bem-vindo ${nome}, aproveite!`);

// operadores aritméticos: + - * / **
// 2 + 4 * 2

// operadores de comparação: < > <= >= == != === !==

console.log(5 == '5'); // igualdade -> olha apenas os valores (ignora o tipo)
console.log(5 === '5'); // estritamente igual