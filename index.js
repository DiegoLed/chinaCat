
//////////////////////////////////////////////////
const animal = {
    nombre: "China",
    duenio: "Diego Ledesma",
    raza: "Galgo",
    edad: 4,
    actividad: ["Correr"," jugar"," hace pozos"],
    comida: ["Balanceada"," carne"," verduras"],
    visita: "Ultima visita: 01/08/2022",
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


const botonNombre = document.querySelector(".nombre");
botonNombre.addEventListener("click", function(){
    let tituloNombre = botonNombre.textContent;
    if(tituloNombre == "Nombre de tu Mascota"){
        botonNombre.textContent =  animal.nombre;
    } else {
        tituloNombre = "Nombre de tu Mascota";
        botonNombre.textContent =  tituloNombre;
    }
});

const botonDuenio = document.querySelector(".duenio");
botonDuenio.addEventListener("click", function(){
    let tituloDuenio = botonDuenio.textContent;
    if(tituloDuenio == "Dueño/a de Mascota"){
        botonDuenio.textContent =  animal.duenio;
    } else {
        tituloDuenio = "Dueño/a de Mascota";
        botonDuenio.textContent =  tituloDuenio;
    }
});

const botonRaza = document.querySelector(".raza");
botonRaza.addEventListener("click", function(){
    let tituloRaza = botonRaza.textContent;
    if(tituloRaza == "Raza"){
        botonRaza.textContent = animal.raza;
    }else{
        tituloRaza = "Raza";
        botonRaza.textContent = tituloRaza;
    }
})

const botonEdad = document.querySelector(".edad");
botonEdad.addEventListener("click", function(){
    let tituloEdad = botonEdad.textContent;
    if(tituloEdad == "Edad"){
        botonEdad.textContent = animal.edad;
    }else{
        tituloEdad = "Edad";
        botonEdad.textContent = tituloEdad;
    }
})

const botonActividades = document.querySelector(".actividad");
botonActividades.addEventListener("click", function(){
    let tituloActividad = botonActividades.textContent;
    if(tituloActividad == "Actividades"){
        botonActividades.textContent = animal.actividad;
    }else{
        tituloActividad = "Actividades";
        botonActividades.textContent = tituloActividad;
    }
})


const botonComida = document.querySelector(".comida");
botonComida.addEventListener("click", function(){
    let tituloComida = botonComida.textContent;
    if(tituloComida == "Comida"){
        botonComida.textContent = animal.comida;
    }else{
        tituloComida = "Comida";
        botonComida.textContent = tituloComida;
    }
})

const botonVisita = document.querySelector(".visita");
botonVisita.addEventListener("click", function(){
    let tituloVisita = botonVisita.textContent;
    if(tituloVisita == "Visita al veterinario"){
        botonVisita.textContent = animal.visita;
    }else{
        tituloVisita = "Visita al veterinario";
        botonVisita.textContent = tituloVisita;
    }
})

const botonVacunas = document.querySelector(".vacuna");
botonVacunas.addEventListener("click", function(){
    let tituloVisita = botonVacunas.textContent;
    if(tituloVisita == "Vacunas"){
        botonVacunas.textContent = animal.vacuna;
    }else{
        tituloVisita = "Vacunas";
        botonVacunas.textContent = tituloVisita;
    }
})