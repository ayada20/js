
/*
Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log
*/

//undefined
console.log(a);
var a = "hola";

//error al no inicializar la variable previamente.
let b = "hola";console.log(b);

//error no se puede acceder a la variable sin haberse inicializado previamente
//console.log(c);
const c = "hola";


//no da ningun error devuelve el console.log
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();



/*
Ejercicio 3, Acierta los console.log
¿Qué salida tendrán los siguientes console.log?
*/

// Comparaciones con booleanos
console.log(false + false); //false
console.log(false + true); //true
console.log(true + true);//true

// Comparaciones con arrays
//console.log([] === []);
console.log([] + []);
console.log([1, 2] + [3, 4]);
console.log([1] + 1);
console.log([1] - 1);

// Comparaciones con objetos
console.log({} + {});
//console.log({} === {});
//console.log([] === {});

// Comparaciones especiales
console.log(null + 1);
console.log(undefined + 1);
console.log(null == 0);
console.log(null <= 0);
console.log(undefined == null);

// Operaciones con NaN
console.log(NaN + 1);
console.log(NaN == NaN);
 



