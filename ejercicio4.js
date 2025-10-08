/*
Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.
*/

//Primer código
//Tenemos una función que saca el nombre completo del usuario con el nombre y apellido
var usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const {nombre, apellido}=usuario
  const nombrCompleto = "Me llamo " + nombre + " " + apellido;

  return nombrCompleto;
}


//Segundo código
//Tenemos una función que calcula el salario anual y el nombre del usuario
const user1 = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

function userData(user1) {
 // const annualSalary = user1.salary * 12;
//const fullName = `${user1.name} ${user1.last}`;
const {name, last, salary}=user1
  return `Me llamo ${name}  y cobro ${salary*12}€ al año`;
}

console.log(userData(user1));


//Tercer código
//Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€


const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  return (user.age === 30 && user.nationality !== "España") ? "apto" : "no apto";
}
console.log(esExtrangero(user)); 
