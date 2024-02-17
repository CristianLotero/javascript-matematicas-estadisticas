
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

    let listaOrdenada = lista.sort((a,b) => a - b)
    console.log(listaOrdenada)
    if(!esParOImpar(listaOrdenada)) {
        const indexMitadListaPar = [];
        indexMitadListaPar.push(listaOrdenada.length / 2 - 1);
        indexMitadListaPar.push(listaOrdenada.length / 2);
        const medianaListaPar = [listaOrdenada[indexMitadListaPar[0]],listaOrdenada[indexMitadListaPar[1]]];
        // console.log(indexMitadListaPar);
        // console.log(medianaListaPar);
        return promedio(medianaListaPar);
    } else {
        const indexMitadListaImpar = Math.floor(listaOrdenada.length / 2);
        const medianaListaImpar = listaOrdenada[indexMitadListaImpar]
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}


function calcularModa(arr) {
        let orderedArr = arr.sort((a,b)=>a-b);

        orderedArr.forEach((element, index, arr) => {
            if (element === arr[index + 1]){
            }
        });
    }









