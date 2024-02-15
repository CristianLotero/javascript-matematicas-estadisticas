
// let arrayPrecios = [12, 76, 283, 505, 29, 35, 842, 96, 778 , 9, 240]
// let arrayPrecios2 = [4566, 3216546, 6546126, 658554]

let promedio = (valores) => {
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

function esParOImpar(lista) {
    return (lista.length % 2);
}


function calcularMediana(lista) {

    if(!esParOImpar(lista)) {
        const indexMitadListaPar = [];
        indexMitadListaPar.push(lista.length / 2 - 1);
        indexMitadListaPar.push(lista.length / 2);
        const medianaListaPar = [lista[indexMitadListaPar[0]],lista[indexMitadListaPar[1]]];
        // console.log(indexMitadListaPar);
        // console.log(medianaListaPar);
        return promedio(medianaListaPar);
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar]
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}



// Calcular los 2 elementos de la mitad de una lista par (para calcular la mediana)

