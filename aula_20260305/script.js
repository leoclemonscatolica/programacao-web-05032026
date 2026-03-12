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

num1 = parseFloat(window.prompt("numero 1: "))
num2 = parseFloat(window.prompt("numero 2: "))

document.writeln(`A soma de ${num1} e ${num2} é ${num1 + num2}`);

// estrutras condicionais: if-else, switch-case
var idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade")
}

var hora = 10;
if (hora < 12) {
    console.log("bom dia");
} else if (hora < 18) {
    console.log("Boa Tarde");
} else {
    console.log("Boa noite");
}

var diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda-feira");
        break;
    case 3:
        console.log("terça-feira");
        break;
    default:
        console.log("escolha uma opção");
}

// estruturas de repetição: for e while

for (let i=0; i<5; i++) {
    console.log("iteração: " + i);
}

var i = 5;

while(i<5){
    console.log("iteração: " + i);
    i++;
}