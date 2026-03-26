let cont = 0

btn_in = document.getElementById("btn_in")
btn_de = document.getElementById("btn_de")
resultado = document.getElementById("contador")

resultado.textContent = cont

btn_in.onclick = function incrementar(){
    cont ++
    resultado.textContent = cont
}

btn_de.onclick = function decrementar(){
    if(cont === 0){
        alert("Contador já em 0")
    }
    else{
        cont --
        resultado.textContent = cont    
    }   
}

    

