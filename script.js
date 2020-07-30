var inicio = false

document.getElementById('comecar_parar').onclick = function(){

    if(!inicio){
        inicio = true
        document.getElementById('comecar_parar').innerHTML = 'Parar'
    }else{
        inicio = false
        document.getElementById('comecar_parar').innerHTML = 'Começar'
    }
}