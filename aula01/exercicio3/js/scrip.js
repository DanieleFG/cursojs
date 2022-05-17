function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano- Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var img = document.createElement('img')

        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <10) {
                img.setAttribute('src', 'img/criancah.jpg')
            }else if(idade<21 ){
                img.setAttribute('src', 'img/jovenh.jpg')
                
            }else if(idade< 50){
                img.setAttribute('src', 'img/coroah.jpg')                
            }else{                
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10) {
                img.setAttribute('src', 'img/crianaam.jpg')
            }else if(idade<21 ){
                img.setAttribute('src', 'img/joven.jpg')                
            }else if(idade< 50){
                img.setAttribute('src', 'img/coroa.jpeg')                
            }else {
                img.setAttribute('src', 'img/idosa.jpg')       

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero}  com ${idade}<br>`
        res.appendChild(img)
        img.style.width = "400px"
        img.style.borderRadius = "50%"

    }
}