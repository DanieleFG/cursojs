let num = [5, 8,3,1]
//console.log(num)
num[4] = 25
///console.log(num)
num.push(7) //adiciona o elemento no final do array
//console.log(num.length)  // saber o comprimento do array
console.log(num.sort())  // ordenar os valores   do array
/*
for(cont = 0; cont <= 4; cont++) {
    console.log(num[cont])
}

for(n in num) { //n é o indice 
    console.log(num[n])
}
*/
let pos = num.indexOf(25)
if(pos == '-1') {

    console.log('Esse número não consta no array')
} else {
    console.log(pos)

}