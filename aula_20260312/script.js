// buscar o elemento via javascript
let meuElemento = document.getElementById("paragrafo"); // id
console.log(meuElemento.textContent); // pega o conteúdo da tag

// buscar o elemento HTML pela classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for(let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}

// buscar elemento pela tag
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

// criar o elemento HTML
let destino = document.getElementById("elemento"); // buscando o elemento HTML
let p = document.createElement("p"); // criar o elemento HTML
p.textContent = "Parágrafo criado via JavaScript";
destino.append(p); // adicionar ao DOM;

// criar a nossa lista
let lista = document.getElementById("lista");
let ul = document.createElement("ul");
let itens = ["Arroz", "Feijão", "Suco"];
for(let i=0; i < itens.length; i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
lista.append(ul);

// função somar
function somar(){
    // pegar os dois números digitados pelo usuário
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida; 
}

// eventos = botão
let botao = document.getElementById("botao1");
botao.onclick = function(){
    alert("Clicou!");
    botao.textContent = "Você Clicou!";
    botao.style.backgroundColor = "red";
}