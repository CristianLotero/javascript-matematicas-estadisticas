
class Platzi {
    static esImpar() {}
    static esPar() {}
    static esLoQueQuereSer() {}
}

const colorize = (...args) => ({
    black: `\x1b[30m${args.join(' ')}`,
    red: `\x1b[31m${args.join(' ')}`,
    green: `\x1b[32m${args.join(' ')}`,
    yellow: `\x1b[33m${args.join(' ')}`,
    blue: `\x1b[34m${args.join(' ')}`,
    magenta: `\x1b[35m${args.join(' ')}`,
    cyan: `\x1b[36m${args.join(' ')}`,
    white: `\x1b[37m${args.join(' ')}`,
    bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
    bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
    bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
    bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
    bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
    bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
    bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
    bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
  });


const PlatziMath = {}


// let arrayPrecios = [12, 76, 283, 505, 29, 35, 842, 96, 778 , 9, 240]
// let arrayPrecios2 = [4566, 3216546, 6546126, 658554]

PlatziMath.promedio = (valores) => {
    let total = 0;
    for (let element of valores) {
        total += element;
    }
    return (total / valores.length)
}

// console.log(promedio(arrayPrecios))
// console.log(promedio(arrayPrecios2))



// function moduloDe(valor, divisor) {
//     return valor % divisor;
// }

// console.log(moduloDe(10,2.34))

PlatziMath.esParOImpar = function esParOImpar(lista) {
    return (lista.length % 2);
}


PlatziMath.calcularMediana = function calcularMediana(lista) {

    let listaOrdenada = [...lista]
    listaOrdenada.sort((a,b) => a - b)
    console.log(listaOrdenada)
    if(!PlatziMath.esParOImpar(listaOrdenada)) {
        const indexMitadListaPar = [];
        indexMitadListaPar.push(listaOrdenada.length / 2 - 1);
        indexMitadListaPar.push(listaOrdenada.length / 2);
        const medianaListaPar = [listaOrdenada[indexMitadListaPar[0]],listaOrdenada[indexMitadListaPar[1]]];
        // console.log(indexMitadListaPar);
        // console.log(medianaListaPar);
        return PlatziMath.promedio(medianaListaPar);
    } else {
        const indexMitadListaImpar = Math.floor(listaOrdenada.length / 2);
        const medianaListaImpar = listaOrdenada[indexMitadListaImpar]
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}


PlatziMath.calcularModaSinObjeto = function calcularModaSinObjeto(arr) {
    let orderedArr = arr.sort((a,b)=>a-b);
    console.log(orderedArr)
    let modaCounter = 0;
    let actualCounter = 0;
    let moda;
    function counter(element, index, arr) {
        actualCounter += 1;
        if (element !== arr[index + 1]) {
            console.log(actualCounter)
            if (actualCounter > modaCounter){
                modaCounter = actualCounter;
                moda = element;
            }
            actualCounter = 0;
        }
        
    }
    orderedArr.forEach((element,index,arr) => counter(element,index,arr)); 
    return (`la moda de este array es: ${moda}`);
}


PlatziMath.calcularModaPlatzi = function calcularModaPlatzi(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if(listaCount[elemento]){
        listaCount[elemento] += 1;
        }else{
        listaCount[elemento] = 1;
        }
    }

    // console.log(listaCount)
    const listaArray = Object.entries(listaCount);
    // console.log(listaArray);
    console.log(`Y ahora la lista ordenada: `)
    console.log(PlatziMath.ordenarListaBidimensional(listaArray));
    // console.log(`la moda de la lista es: `)
    // console.log(listaArray[listaArray.length - 1]);
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(lista) {
    let listaOrdenada = lista.sort((a,b) => a[1]-b[1]);
    return listaOrdenada;
}

PlatziMath.mediaTruncada = function mediaTruncada(arr,discard) {
    const copyOfArr = [...arr];
    copyOfArr.sort();
    const valuesToDiscard = (arr.length * discard / 100)/2;
    console.log(valuesToDiscard)
    console.log(copyOfArr)
 
    PlatziMath.ruleOutExtremes(Math.round(valuesToDiscard),copyOfArr)
    console.log(colorize(copyOfArr).bgYellow)
    console.log(copyOfArr.reduce((total,element)=>element += total)/copyOfArr.length)
}

PlatziMath.ruleOutExtremes = function ruleOutExtremes(times,arr){
    let recursiveRuleOut= () => {
        arr.pop();
        arr.shift();
        return ruleOutExtremes((times - 1),arr);
    }
    return !times ? undefined : recursiveRuleOut(times,arr);  
}

 