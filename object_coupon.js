
let valorProducto = document.querySelector("#valorProducto");
let cupon = document.querySelector("#cupon");
let sugerencia = "";
let cuponString;
const discountButton = document.querySelector("#discountButton");
const outcome = document.querySelector(".outcome");

let totalCouponObj = {};

discountButton.addEventListener("click", () => {
    const numberValorProducto = Number(valorProducto.value);
    let outcomeParse;
    let numberPorcentaje = 0;
});

function createRandomCoupon (cantidad, palabra) {

    for (cantidad in totalCouponObj) {
        // let nombre
        // totalCouponObj
    }
}



// discountButton.addEventListener("click", ()=>{
//     const numberValorProducto = Number(valorProducto.value);
//     let outcomeParse ;
//     let numberPorcentaje = 0;
//     if (!numberValorProducto) {
//         outcome.innerHTML = `No se ha ingresado ningun valor`;
//         return
//     }

//     if(cupon.value) {
//         cuponString = cupon.value;

//         (function parseCupon(cupon){
//             cupon === "DESCUENTAZO50" ? numberPorcentaje = 50 
//             : cupon === "DESCUENTAZO40" ? numberPorcentaje = 40 
//             : cupon === "DESCUENTAZO30" ? numberPorcentaje = 30 
//             : cupon === "DESCUENTAZO20" ? numberPorcentaje = 20 
//             : alert(`El cupon no es valido, verifiquelo y vuelva a intentarlo`)
//         })(cuponString);
//     } else {
//         sugerencia = "No se pierda los descuentos haciendose socio!!";
//     }

//     outcomeParse = (numberValorProducto*(100 - numberPorcentaje)/100);
//     outcome.innerHTML = `El Valor con el descuento aplicado es: $${outcomeParse}  ${sugerencia}`;
// });
