
let valorProducto = document.querySelector("#valorProducto");
let porcentajeDescuento = document.querySelector("#porcentaje");
let cupon = document.querySelector("#cupon");
const discountButton = document.querySelector("#discountButton");
const outcome = document.querySelector(".outcome")

discountButton.addEventListener("click", ()=>{
    if(cupon.value) {
        let cuponString = cupon.value;
        console.log(cuponString);
        console.log(typeof(cuponString));
        function parseCupon(cuponString){
            cuponString == "DESCUENTAZO50"? 
        }
    }
    
    // const numberValorProducto = Number(valorProducto.value);
    // const numberPorcentaje = Number(porcentajeDescuento.value);
    // if (!numberValorProducto || !numberPorcentaje) {
    //     outcome.innerHTML = `No se ha ingresado ningun valor`;
    //     return
    // }
    
    // if (numberPorcentaje > 100) {
    //     outcome.innerHTML = `No se puede ingresar descuento superior a 100%`;
    //     return
    // }


    // const outcomeParse = (numberValorProducto*(100 - numberPorcentaje)/100);

    // outcome.innerHTML = `El Valor con el descuento aplicado es: $${outcomeParse}`;

});



