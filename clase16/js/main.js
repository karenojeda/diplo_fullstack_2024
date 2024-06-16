/** Clase 16: Funciones js

function saludar(nombre, apellido, edad){
    console.log ("Hola ", nombre, apellido, "tu edad es ", edad)
}

saludar("Cosme", "Fulanito", 5);
saludar("Harry", "Potter", 25);
saludar("Ron", "Weasley", 15);



//Declaracion de la funcion
function sumar(num1, num2){
    return num1 + num2;
}

//Llamada de La Funcion con Los argumentos

sumar(5, 6);

let resultado = sumar(9, 12);
console.log(resultado);

 

//Funcion anonima y le asignamos una variable
let suma = function(num1, num2){
    return num1 + num2;

} 

let resultado = suma(12, 10);
console.log(resultado);


//Scope

function multiplicar(num1, num2){
    const num3 = 10;
    console.log(num3)
    return(num1 + num2) *num3;
}

let resultado = multiplicar(10, 2)
console.log(resultado)

console.log(document.head)
console.log(document.body)
console.dir(document.head)
console.dir(document.body)*/



//Seleccion de elementos del DOM querySelector

let titulo = document.querySelector('#titulo');
let parrafos = document.querySelectorAll('.parrafo');
let cambiarTextoBtn = document.querySelector('#cambiarTexto');
let cambiarColorBtn = document.querySelector('#cambiarColor');
let cambiarClaseBtn = document.querySelector('#cambiarClase')


console.log(titulo);
console.log(parrafos);
console.log(titulo);
console.log(cambiarTextoBtn);


//Funcion para cambiar texto del titulo

function cambiarTexto(){
    titulo.textContent = 'Texto nuevo';
}

//Funcion para cambiar todos los parrafos seleccionados

function cambiarColor() {
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('cambiarColor');

    });
}


function cambiarClase(){
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('nuevaClase');

    });
}
//Asignar evento CLICK a los botones

cambiarTextoBtn.addEventListener('click', cambiarTexto);
cambiarColorBtn.addEventListener('click', cambiarColor);
cambiarClaseBtn.addEventListener('click', cambiarClase);








