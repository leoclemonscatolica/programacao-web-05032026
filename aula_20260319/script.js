// trabalhar com eventos

// propriedades
let botao1 = document.getElementById("botao1");

// manipuladores de eventos 
botao1.onclick = function(){
    alert("Primeiro de evento");
}

// // segunda ação
// botao1.onclick = function(){
//     botao1.textContent = "Texto Alterado!"
// }

let botao2 = document.getElementById("botao2");
botao2.onmouseout = function(){
    alert("Teste")
    botao2.style.backgroundColor = "red"
}

botao2.ondblclick = function(){
    botao2.style.backgroundColor = "green"
}

let campoEntrada = document.getElementById("campo")
let resultado = document.getElementById("resultado")

campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        resultado.innerHTML = campoEntrada.value
        campoEntrada.value = ""
    }
}

//addEventListener

let botao3 = document.getElementById("botao3")
mensagem1 = document.getElementById("mensagem1")
mensagem2 = document.getElementById("mensagem2")

botao3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro evento"
})

botao3.addEventListener("click", function(){
    mensagem2.textContent = "Segundo evento"
})

