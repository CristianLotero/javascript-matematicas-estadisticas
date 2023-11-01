
let valorProducto = document.querySelector("#valorProducto");
let porcentajeDescuento = document.querySelector("#porcentaje");
let cupon = document.querySelector("#cupon");
let sugerencia = "";
let cuponString;
const discountButton = document.querySelector("#discountButton");
const outcome = document.querySelector(".outcome");


discountButton.addEventListener("click", ()=>{
    const numberValorProducto = Number(valorProducto.value);
    let outcomeParse ;
    let numberPorcentaje = 0;
    if (!numberValorProducto) {
        outcome.innerHTML = `No se ha ingresado ningun valor`;
        return
    }

    if(cupon.value) {
        cuponString = cupon.value;

        (function parseCupon(cupon){
            cupon === "DESCUENTAZO50" ? numberPorcentaje = 50 
            : cupon === "DESCUENTAZO40" ? numberPorcentaje = 40 
            : cupon === "DESCUENTAZO30" ? numberPorcentaje = 30 
            : cupon === "DESCUENTAZO20" ? numberPorcentaje = 20 
            : alert(`El cupon no es valido, verifiquelo y vuelva a intentarlo`)
        })(cuponString);
    } else {
        sugerencia = "No se pierda los descuentos haciendose socio!!";
    }
    console.log(cuponString === "DESCUENTAZO50");
    console.log(`El campo de cupon tiene como valor : ${cupon.value}`);
    console.log(`"cuponString" tiene como valor : ${cuponString}`);
    console.log(`"numberPorcentaje" tiene como valor : ${numberPorcentaje}`);
    outcomeParse = (numberValorProducto*(100 - numberPorcentaje)/100);
    outcome.innerHTML = `El Valor con el descuento aplicado es: $${outcomeParse}  ${sugerencia}`;


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



