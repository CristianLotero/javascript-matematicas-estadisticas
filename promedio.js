
let arrayPrecios = [12, 76, 83, 50, 29, 35, 84, 96, 78 , 9, 24]

let promedio = (valores) => {
    let total = 0;
    function suma(valores) {
        for (element in valores) {
            total += element;
        }
    }
    return total/2
}

console.log(promedio(arrayPrecios))
