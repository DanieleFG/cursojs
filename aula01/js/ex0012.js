//Aula - 12 Condições parte 2
// var idade = 68
// if(idade < 16) {
//     console.log('Não vota, menor que 16 anos')
// } else {
//     if(idade >= 16 && idade < 18) {
//         console.log('Voto opcional entre 16 e 18 anos')
//     } else if(idade >= 65){
//         console.log('Voto opcional, idoso(a)')
//     } else {
//         console.log('Voto Obrigatorio, MAIOR DE IDADE')
//     }
// } 


//var data = 4
 //var agora = new Date()
 // var data = agora.getHours()
 
// if(data < 12 && data >=6){
    //     console.log(`Manhã horario ${data}:00 `)
// }else if(data < 6 && data >1 ) {
    //     console.log (`Madrugada horario ${data}:00`)
    // } else if (data >=12 && data < 18) {
        //     console.log(`Tarde horario ${data}:00`)
        // }else {
            //     console.log(`Noite horario ${data}:00`)
            // }
            
//  ### SWITCH CASE 

var agora = new Date()
var diaSem = agora.getDay()
var dia = agora.getDate()
//console.log(diaSem)
switch(diaSem) {
    case 1:
        console.log(`Segunda dia : ${dia}`)
        break

    case 2:
        console.log(`Terça dia : ${dia}`)
        break

    case 3:
        console.log(`Quarta dia : ${dia}`)
        break
    case 4:
        console.log(`Quinta dia : ${dia}`)
        break
    case 5:
        console.log(`Sexta dia : ${dia}`)
        break
    case 6:
        console.log(`Sabado dia : ${dia}`)
        break
    case 0:
        console.log(`Domingo dia : ${dia}`)
        break
    default:
        console.log('Opção invalida')
        break
}