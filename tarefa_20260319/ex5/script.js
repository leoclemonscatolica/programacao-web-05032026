function mostrar_triangulo(){
    
    numero = parseInt(document.getElementById("numero").value)

    resultado = document.getElementById("resultado")

    resultado.innerHTML = ""

    let conta = 0;


    for (let i=1; i <= numero; i++){
        numero_conta = ""
        for (let j = 1; j <= i; j++){
            numero_conta += 1
        }
        resultado.innerHTML += `${numero_conta}`
        conta += parseInt(numero_conta)
        console.log(conta)
        if (i != numero){
            resultado.innerHTML += " + "
        }
    }
    resultado.innerHTML += ` = ${conta}`

}