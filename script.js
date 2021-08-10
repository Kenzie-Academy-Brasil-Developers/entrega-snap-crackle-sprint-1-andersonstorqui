function snapCrackle (maxValue){
    let concatenar = ''
    for(let i = 1; i < maxValue;i++){
        
        if(i % 2 === 0) {
            concatenar += i + ','
        } if(i % 2 === 1){
            concatenar +=  'Snap' + ' ,'
        } if (i % 5 === 0){
            concatenar +=  'Crackle' + ' ,'
        } if(i % 2 === 1 && i % 5 === 0){
            concatenar += 'Snap Crackle' + ','
        } 
    } return concatenar
}

snapCrackle(12)









// function verificandoNumerosPrimos (numeros){
//     let guardarResultado = ""
//     for(let i = 1; i < numeros; i++){
//         if(i % 2 === 0){
//             guardarResultado += 'Prime'
//         } if (i % 3 === 0){
//             guardarResultado += 'Prime'
//         } if (i % 5 === 0){
//             guardarResultado += 'Prime'
//         } if(i % 7 === 0){
//             guardarResultado += 'Prime'
//         } if (i % 11 === 0){
//             guardarResultado += 'Prime'
//         }
//     }
//     return guardarResultado
// }

// verificandoNumerosPrimos









function snapCracklePrime (maxValue){
    let concatenar = ''
    for(let i = 1; i < maxValue;i++){
        
        if(i % 2 === 0) {
            concatenar += i + ','
        } if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i % 11 === 0){
            concatenar += 'Prime'
        } if(i % 2 === 1){
            concatenar +=  'Snap' + ' ,'
        } if (i % 5 === 0){
            concatenar +=  'Crackle' + ' ,'
        } if(i % 2 === 1 && i % 5 === 0){
            concatenar += 'Snap Crackle' + ','
        } 
    } return concatenar
}

snapCracklePrime(15)