function carregar(){
        var msg = document.getElementById('msg')
        var img = document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas!`
        if(hora >= 0 && hora <12){
                //Bom dia
                msg.innerHTML += ` <strong>Bom dia!<strong>`
                img.src = 'images/morning_image.png'
                document.body.style.background = '#e2cd9f'
        }else if(hora >=12 && hora < 18){
                //Boa tarde
                msg.innerHTML += ` <strong>Boa tarde!<strong>`
                img.src = 'images/afternoon_image.png'
                document.body.style.background = '#b9846f'
        }else{
                //Boa noite
                msg.innerHTML += ` <strong>Boa noite!<strong>`
                img.src = 'images/night_image.png'
                document.body.style.background = '#515154'
        }
}

