let arrayPrecios = [12, 76, 283, 505, 29, 35, 842, 96, 778 , 9, 240]
let arrayPrecios2 = [4566, 3216546, 6546126, 658554]
let total = 0;



let promedio = (valores) => {
    // for (let element of valores) {
        //     total += element;
        // }
        // return (total / valores.length)
    function sumarTodosLosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }
    const totalReduce = valores.reduce(sumarTodosLosElementos)
    console.log(totalReduce);
    return totalReduce / valores.length;
}



console.log(`el promedio de las lista 1 es ${promedio(arrayPrecios)}`)
console.log(`el promedio de las lista 2 es ${promedio(arrayPrecios2)}`)
