function snapCrackle (maxValue){
    let concatenar = ''
    for(let i = 1; i <= maxValue;i++){
        
        if(i % 2 !== 0 && i % 5 === 0){
            concatenar += 'Snap Crackle' + ', '
        }  
        else if(i % 2 !== 0){
            concatenar += 'Snap' + ', '
        } 
        else if (i % 5 === 0){
            concatenar += ' Crackle' + ', '
        }
        else{
            concatenar +=  i +  ', '
        } 
    } return concatenar
}

snapCrackle()








function verificandoNumerosPrimos (numeros){
    let contador = 0
    let guardarResultados = 0
    //numeros = 5
    //escrever um for pra dividir os numeros por todos os numeros
    //verificar se só existem duas divisões perfeitas 
    //5 / 1 = 5, 5 / 2 = 2.5 , 5 / 3  = 1.7 , 5 / 4 = 1.2, 5 / 5 = 1
    for(let i = 1; i <= numeros; i++){
        if(numeros % i === 0){
            contador += 1
        } 
    } 
    if(contador <= 2){
        guardarResultados += contador
    }
    return guardarResultados
}




function snapCracklePrime (maxValue){
    let concatenar = ''
    for(let i = 1; i <= maxValue;i++){
        if(i % 2 !== 0 && i % 5 === 0){
            concatenar += 'Snap Crackle' + ', '
        }  
        else if(i % 2 !== 0){
            concatenar += 'Snap' + ', '
        } 
        else if (i % 5 === 0){
            concatenar += ' Crackle' + ', '
        }
        else if(verificandoNumerosPrimos(i)){
            concatenar += 'Prime' + ', '
        }
        else{
            concatenar +=  i +  ', '
        } 
    } return concatenar
}

snapCracklePrime()
