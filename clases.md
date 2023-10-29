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