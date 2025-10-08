
//Primer código
//Tenemos una función que saca el nombre completo del usuario con el nombre y apellido
var usuario = {
  name: "Pedro",
  lastName: "Sánchez",
  age: 45,
  profession: "Barro man",
};

console.log(nombreUsuario(usuario));

function nombreUsuario(user) {
  const {name, lastName}=usuario
  const nombrCompleto = "Me llamo " + name + " " + lastName;

  return nombrCompleto;
}


//Segundo código
//Tenemos una función que calcula el salario anual y el nombre del usuario
const secondUser = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};


function anualSalary(salary){
return salary * 12;
}

function messageUser(name, last, anualSalary){
return `me llamo ${name} ${last} y cobro ${anualSalary} € anuales.`

}
console.log(messageUser(secondUser.name, secondUser.last, anualSalary(secondUser.salary)))



//Tercer código
//Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€
const requiredAge = 30;
const nationality = "España";

const user = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

function esExtrangero(user) {
  return (user.age === requiredAge && user.nationality !== nationality) ? "apto" : "no apto";
}
console.log (esExtrangero (user)); 
