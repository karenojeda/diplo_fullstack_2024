/**Clase 13: Intro JS */

//Hola mundo desde un archivo externo
console.log("Hola Mundo");

/** 
//Variables
var nombre = "Harry";
console.log(nombre)


let nombreLet = "Hermione"; //String
console.log(nombreLet);

let edad = 10; //numerica
const PI = 3.14; 
let tenerMascotas = true; //Boleana
console.log(edad, PI, tenerMascotas)


//Nombre, apellido, edad, mascota?

let miNombre = "Karen"
let miApellido = "Ojeda"
let miEdad = "22"
let miMascota = "true"

//Mostrar en pantalla
console.log(miNombre, miApellido, miEdad, miMascota)


//Operaciones basicas

let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB

console.log(resultadoSuma)
console.log(numeroA + numeroB)

let nombre = "Cosme"
let apellido = "Fulanito"
const ESPACIO = " "
let nombreCompleto = nombre + ESPACIO + apellido
console.log(nombreCompleto)



//Prompt


let entrada = prompt("Ingrese su nombre")
let salida = "Hola " + entrada
alert(salida)


let numero = parseInt(prompt("Ingrese su numero"))
const NUMEROB = 30

let salidaNumero = numero + NUMEROB
alert(salidaNumero)



//Arrays
//Unidimensional
let numeros = [1, 2, 3, 5, 8]
let colores = ["rojo", "verde", "azul"]

console.log(numeros[1])
console.log(colores[0])

//Multidimensionales
let colorMascotas = [
    ['perro', 'marron', 'gris', 'rojo']
    ['gato', 'blanco', 'negro']
    ['pez', 'amarillo']
    ['jirafa', 'naranja']
]
console.log(colorMascotas[1][2])
console.log(colorMascotas[1][1].length)
*/

//Objeto utilizado como array asociativa

let persona = {
    nombre: "Juan",
    edad: 22,
    profesion: "Desarrollador"
};

console.log(persona["nombre"])
console.log(persona.edad)

let empleados = [
{nombre: "Juan", edad: 22, profesion: "Desarrollador"},
{nombre: "Cosme", edad: 32, profesion: "Tester"},
{nombre: "Pepito", edad: 42, profesion: "Frontend"},
];

console.log(empleados[1].nombre);