
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

