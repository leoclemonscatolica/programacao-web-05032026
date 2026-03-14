function mostrar_tabuada(){
    numero = parseInt(document.getElementById("numero").value)
    console.log(numero)

    resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    for (let i=1; i < 11; i++){
        resultado.innerHTML += `${numero} x ${i} = ${numero * i} <br>`
    }

}