const escolhas = ["Pedra", "Papel", "Tesoura"];

function verificaVencedor() {
    const indiceAleatorio = Math.floor(Math.random() * escolhas.length);
    escolhaPc = escolhas[indiceAleatorio];

    const select = document.getElementById("meuSelect");
    const opcaoEscolhida = select.value;
    
    const resultadoElemento = document.getElementById("resultado");

    if (opcaoEscolhida === escolhaPc){
        resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. Empate!`;
        return;
    }

    switch (opcaoEscolhida) {
        case "Pedra": 
            if (escolhaPc === "Papel"){
                resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. PC Ganhou!`
            } else {
                resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. Você Ganhou!`
            } break;
        case "Papel": 
            if (escolhaPc === "Pedra"){
                resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. Você Ganhou!`
            } else {
                resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. PC Ganhou!`
            } break;
        case "Tesoura": 
            if (escolhaPc === "Pedra"){
                resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. Você Ganhou!`
            } else {
                resultadoElemento.textContent = `Escolha PC: ${escolhaPc}. PC Ganhou!`
            } break;

    }

}


