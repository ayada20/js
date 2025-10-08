


// devuelve undefined
console.log(a);
var a = "hola";

//devuelve un error al no inicializar la variable previamente.
let b = "hola";console.log(b);

//devuelve un error no se puede acceder a la variable sin haberse inicializado previamente
console.log(c);
const c = "hola";


//no da ningun error devuelve el console.log con el mensaje (Hola desde sayHi!)
sayHi();

function sayHi() {
  console.log ("Hola desde sayHi!");
}

//no da ningun error devuelve el console.log con el mensaje(Hola desde sayBya!)
function sayBye() {
  console.log ("Adios desde sayBye!");
}

sayBye();

