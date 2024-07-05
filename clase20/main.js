//** Clase 20 */

let persona = {
	nombre: "Juan",
	edad: 30,
	ciudad: "Buenos Aires",
	habilidades: ["JavaScript", "Node.js", "PHP"]
};

//Mostrar por consola
console.log(persona);

//Mostrar los datos usando el DOM

let container = document.getElementById('datosPersonas');
let html = `
<h2> Datos Personales </h2>
<p> Nombre: ${persona.nombre}</p>
<p> Edad: ${persona.edad}</p>
<p> Ciudad: ${persona.ciudad}</p>
<p> Habilidades: ${persona.habilidades}</p>
`
container.innerHTML = html;

//Actualizar una propiedad

persona.profesion = "Desarrollador";
html += `<p> Profesion: ${persona.profesion} </p>`

container.innerHTML = html;
console.log(persona);

//Propiedad existente

persona.edad = 42;

//
html = html.replace(`<p> <strong>Edad: </strong> ${persona.edad - 1} </p>`, `<p> <strong> Edad: <strong> ${persona.edad} </p>`)
container.innerHTML = html;
console.log(persona);


//Mostrar el objeto JSON actualizado en la consola
console.log(persona);
container.innerHTML = html;
console.log(persona);

//Eliminar propiedad

delete persona.ciudad;

//actualizar la pagina

html = html.replace(`<p><strong>Ciudad:</strong> ${persona.edad} </p>`, `<p> <strong> Edad: <strong> ${persona.edad} </p>`, '')
container.innerHTML = html;
console.log(persona);

//Acceder a los datos
console.log(persona.nombre);
console.log(perdsona.habilidades.forEach(habilidad => {
	console.log(habilidad)
}));
