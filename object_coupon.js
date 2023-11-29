
let valorProducto = document.querySelector("#valorProducto");

let cupon = document.querySelector("#cupon");
let sugerencia = "";
let cuponString;
let found;
const discountButton = document.querySelector("#discountButton");
const outcome = document.querySelector(".outcome");

const totalCouponObj = [
    {
    cupon: "anioNuevo",
    descuento: 20,
    },
    {
    cupon: "carnaval",
    descuento: 20,
    },
    {
    cupon: "diaDeLaMujer",
    descuento: 30,
    },
    {
    cupon: "malvinas",
    descuento: 30,
    },
    {
    cupon: "invierno",
    descuento: 40, 
    },
    {
    cupon: "independencia",
    descuento: 50,
    },
    {
    cupon: "diaDelNinio",
    descuento: 30,
    },
    {
    cupon: "primavera",
    descuento: 40,
    },
    {
    cupon: "diaDeLaMadre",
    descuento: 50,
    },
    {
    cupon: "finDeAnioDeLocura",
    descuento: 70,
    },
];




discountButton.addEventListener("click", () => {
    let numberValorProducto = Number(valorProducto.value);
    let parseCupon = () => {
        found = totalCouponObj.find(element => element.cupon == cupon.value);
        console.log(found);
    }
    parseCupon();
    
    let resultado = numberValorProducto * ((100 - found.descuento) / 100);

    outcome.innerText = `El resultado es ${resultado}`;
});






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
