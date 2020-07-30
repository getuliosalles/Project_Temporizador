var inicio = false, hora_inicio, init_cronom, hora_atual, time_past, hora, minut, seg, miliseg

document.getElementById('comecar_parar').onclick = function(){

    if(!inicio){
        inicio = true
        document.getElementById('comecar_parar').innerHTML = 'Parar'

        if(!hora_inicio){
        hora_inicio = new Date().getTime()
        }else{
            hora_inicio = new Date().getTime() - time_past
        }

        init_cronom = window.setInterval(function(){
            hora_atual = new Date().getTime()
            time_past = hora_atual - hora_inicio

            hora = Math.floor(time_past / 3600000)
            resto = time_past - (hora * 3600000)

            minut = Math.floor(resto / 60000)
            resto -= (minut * 60000)

            seg = Math.floor(resto / 1000)
            resto -= (seg * 1000)

            miliseg = resto



            document.getElementById('cronometro').innerHTML = time_past


        },10)

    }else{
        inicio = false
        window.clearInterval(init_cronom)
        document.getElementById('comecar_parar').innerHTML = 'Começar'
    }
}

document.getElementById('zerar').onclick = function(){
    time_past = 0
    hora_inicio = new Date().getTime()
    document.getElementById('cronometro').innerHTML = time_past
}