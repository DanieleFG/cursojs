function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var corpo = window.document.querySelector('body#corpo')
    var data = new Date()
    // var hora = data.getHours();
    var hora = 20;
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        msg.innerHTML += `<br> Bom dia!!`
        img.src = "img/manha.jpg"
        corpo.style.background = "linear-gradient(180deg, blue, #87CEEB)" 
        
    }else if (hora >= 12 && hora < 18) {
        msg.innerHTML += `Boa tarde!!`
        img.src = "img/tarde.jpg"
        corpo.style.background = "linear-gradient(180deg, red, yellow)" 
    }else {
        msg.innerHTML += `Boa Noite!!`
        img.src = "img/noite.jpg"
        corpo.style.background = "linear-gradient(180deg, #000000, #4682B4)" 
    }
}
