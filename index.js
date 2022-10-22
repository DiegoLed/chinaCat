const boton = document.querySelectorAll('.btn');
console.log(boton);
console.log(boton[1]);

const dato = document.getElementById("nombre");
console.log(dato);


//////////////////////////////////////////////////
const animal = {
    nombre: "China",
    duenio: "Diego Ledesma",
    raza: "Galgo",
    edad: 4,
    actividad: ["correr","jugar","hace pozos"],
    comida: ["balanceada","carne","verduras"],
    visita: "01/08/2022",
    vacuna: "Esquema Completo"
}  

console.log("Nombre: ", animal.nombre);
console.log("Dueño: ", animal.duenio);
console.log("Raza: ", animal.raza);
console.log("Edad: ", animal.edad + " años");
console.log("Activdad 1: ", animal.actividad[0]);
console.log("Activdad 2: ", animal.actividad[1]);
console.log("Activdad 3: ", animal.actividad[2]);
console.log("Comida 1: ", animal.comida[0]);
console.log("Comida 2: ", animal.comida[1]);
console.log("Comida 3: ", animal.comida[2]);
console.log("Visita al Veterinario: ", animal.visita);
console.log("vacuna: ", animal.vacuna);


