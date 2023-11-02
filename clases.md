___
___
>*Jueves 26/10/23*
___
___


![video](https://i.imgur.com/Hi9CAsr.png)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/51501-formulas-matematicas-en-javascript/

* Fórmulas matemáticas en JavaScript (2/30)

![coding](https://i.imgur.com/mCL7CBV.jpg) ---> math.html , math.js

```javascript
console.group(`Cuadrado`)

  //...el grupo de lo que quieras imprimir

console.groupEnd(`Cuadrado`)

```

___
___
>*Viernes 27/10/23*
___
___

![video](https://i.imgur.com/Hi9CAsr.png)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/51502-math-en-javascript/

Math en JavaScript (3/30)

para las potencias se utiliza esta sintaxis `<**>`  :

```javascript

    const areaCirculo = (radioCirculo ** 2 ) * PI;
```

para la potencia tambien podemos llamar a la funcion `<Math.pow()>`

```javascript
     const radioAlcuadrado = Math.pow(radio, 2);
```

![lectura](https://i.imgur.com/KihMexy.jpg)--->https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed

 # ↓<br>
Number.prototype.toFixed():

* El método toFixed() formatea un número usando notación de punto fijo.

___
___
>*Sabado 28/10/23*
___
___

![video](https://i.imgur.com/Hi9CAsr.png)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/51503-reto-altura-de-un-triangulo/

 # ↓<br>
Reto: altura de un triángulo (4/30)

* Sabiendo lo que miden los 3 lados, _encuentra la altura_.
* Debe ser un _triángulo escaleno_ (todos los lados diferentes).
---

![lectura](https://i.imgur.com/KihMexy.jpg)--->https://www.neurochispas.com/wiki/altura-de-un-triangulo-escaleno/

└---> Altura de un Triángulo Escaleno – Fórmulas y Ejercicios
# ↓ 

Altura de un triángulo escaleno si es que conocemos todos sus lados
Cuando conocemos las longitudes de todos los lados del triángulo, podemos calcular la altura usando una fórmula que es derivada de la fórmula de Herón, la cual es usada para calcular el área:

# h= (a/2) &radic; ​S(S−a)(S−b)(S−c)

en donde; 

* a, b, c son las longitudes de los lados del triángulo
* S es el semiperímetro, el cual es igual a S = (a + b +c) / 2 
* h es la altura perpendicular a la base

![alturaTrianguloEscaleno](https://www.neurochispas.com/wp-content/uploads/2021/03/diagrama-de-altura-de-un-triangulo-escaleno.png)

```javascript
function calcularAlturaTrianguloEscaleno(a, b, c) {
    function calcularSemiperimetro (a, b, c) {
        return ((a + b + c) / 2)
    };
    return altura = (2 / a) * Math.sqrt((calcularSemiperimetro(a, b, c) * (calcularSemiperimetro(a, b, c) - a) * (calcularSemiperimetro(a, b, c) - b) * (calcularSemiperimetro(a, b, c) - c)))
}
```
![test](https://i.imgur.com/TLYynOB.jpg)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/55618-playground-calcula-la-altura-de-un-triangulo-escal/

# ↓

Playground: Calcula la Altura de un Triángulo Escaleno (5/30)

En este desafío debes calcular la altura sin decimales de un triángulo escaleno (todos sus lados son distintos) o false en caso de que los parámetros recibidos no cumplan los requisitos del triángulo escaleno.

Input:

* trianguloEscaleno(16,8,10)
* strianguloEscaleno(6,6,6)

Output:

* 4
* false

---
```javascript
export function solution(a, b, c) {
  if (a != b && b != c && c != a) {
    function calcularSemiperimetro(a, b, c) {
      return ((a + b + c) / 2)
    };
    return Math.floor((2 / a) * Math.sqrt((calcularSemiperimetro(a, b, c) * (calcularSemiperimetro(a, b, c) - a) * (calcularSemiperimetro(a, b, c) - b) * (calcularSemiperimetro(a, b, c) - c))))
  } else {
    return false
  }
}
```
# ↓

# Exitoso

___
___
>*Domingo 29/10/23*
___
___

![video](https://i.imgur.com/Hi9CAsr.png)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/51504-como-calcular-porcentajes/

# ↓ <br>
Cómo calcular porcentajes (6/30)

```javascript
let valorProducto = document.querySelector("#valorProducto");
let porcentajeDescuento = document.querySelector("#porcentaje");
const discountButton = document.querySelector("#discountButton");
const outcome = document.querySelector(".outcome")

discountButton.addEventListener("click", ()=>{

    let numberValorProducto = Number(valorProducto.value);
    let numberPorcentaje = Number(porcentajeDescuento.value);

    let outcomeParse = (numberValorProducto*(100 - numberPorcentaje)/100);

    outcome.innerHTML = `El Valor con el descuento aplicado es: $${outcomeParse}`;
});
```
___
___
>*Lunes 30/10/23*
___
___


![video](https://i.imgur.com/Hi9CAsr.png)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/51505-calculando-descuentos-con-javascript/

# └---> Calculando descuentos con JavaScript (7/30)

* Condicionales para restringir campos sin completar, y porcentaje mayor a 100%: <br>

```javascript
      if (!numberValorProducto || !numberPorcentaje) {
        outcome.innerHTML = `No se ha ingresado ningun valor`;
        return
    }
    
    if (numberPorcentaje > 100) {
        outcome.innerHTML = `No se puede ingresar descuento superior a 100%`;
        return
    }
```

# RETO-EJERCICIO:
*realizar un `<input>` que acepte cupones para validar descuentos.

___
___
>*Martes 31/10/23*
___
___

# RETO-EJERCICIO:
*realizar un `<input>` que acepte cupones para validar descuentos.

```javascript
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
    });
```
___
___
>*Jueves 01/11/23*
___
___

![video](https://i.imgur.com/Hi9CAsr.png)--->https://platzi.com/new-home/clases/3435-javascript-practico-matematicas/51506-cupones-de-descuento/

└---> Cupones de descuento (8/30)

# RETO-EJERCICIO:
* Guardar en un array u objeto la clave-valor de los cupones y los descuentos, y encontrar forma de validar a partir de ese array/objeto.