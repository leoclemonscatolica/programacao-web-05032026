function mostrar_triangulo(){
    numero = parseInt(document.getElementById("numero").value)

    resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    for (let i=1; i <= numero; i++){
        for (let j = 1; j <= i; j++){
            resultado.innerHTML += "*"
        }
        resultado.innerHTML += "<br>"
    }

}