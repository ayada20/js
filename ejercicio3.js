 

/*
Ejercicio 3, Acierta los console.log
¿Qué salida tendrán los siguientes console.log?
*/

           // Comparaciones con booleanos
console.log(false + false); //false
console.log(false + true); //true
console.log(true + true);//true


           // Comparaciones con arrays
//console.log([] === []); //false
console.log([] + []); //false
console.log([1, 2] + [3, 4]); //1, 23, 4
console.log([1] + 1); //11
console.log([1] - 1); //0

           // Comparaciones con objetos
console.log({} + {}); //[object Object][object Object]
//console.log({} === {}); //false
//console.log([] === {}); //false


             // Comparaciones especiales
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(null == 0); //false
console.log(null <= 0); //true
console.log(undefined == null); //true

            // Operaciones con NaN
console.log(NaN + 1); //true
console.log(NaN == NaN); //NaN
console.log(NaN === NaN); //false
