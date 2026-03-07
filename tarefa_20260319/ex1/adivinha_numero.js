

function verificaNumero() {
    const numero = Math.floor(Math.random() * 20) + 1;
    const valor = parseInt(document.getElementById("meuInput").value);
    console.log("O valor digitado foi:", valor);

    const resultadoElemento = document.getElementById("resultado");

    if (valor === numero){
        resultadoElemento.textContent = "Acertou!!!"
    } else {
        resultadoElemento.textContent = "Errou!!!"
    }

}

