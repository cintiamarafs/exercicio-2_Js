function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value)> ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            gênero = 'Homem'
           if (idade >= 0 && idade < 10) {
               //criança
               img.setAttribute('src', 'menino.png')
           }else if (idade < 21) {
            img.setAttribute('src', 'jovemh.png')
               //jovem
           } else if (idade < 50){
               //Adulto
               img.setAttribute('src', 'homem.png')
           } else {
               //idoso
               img.setAttribute('src', 'idoso.png')
           }
               } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
                //criança
            }else if (idade < 21) {
                img.setAttribute('src', 'jovemm.png')
                //jovem
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
      
    }
}