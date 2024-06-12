/**Clase 15: Bucles en JS*/

/*let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limon",
    "Kiwi"
];

console.log(frutas[0].length)
frutas[0].length;
frutas[1].length;
frutas[2].length;
frutas[3].length;
frutas[4].length;
frutas[5].length;
frutas[6].length;

//While

let valor = 0;

while (valor <= 15) {
    console.log('El valor de i: ' + valor);
    valor = valor + 1;
}
 
Decremento

let numero = 100;

while (numero > 0) {
    document.write('Te queda de saldo : ', numero, "<br>");
    numero = numero - 5;
}

let i = 6;

do {
    console.log("Valor de i: ", i);
    i = i + 1;
} while (i < 5);



//Ejercicio

let numero = 100;
while (numero > 0){
    document.write("Solo faltan : ", numero, " pasos por caminar", "<br>");
    numero = numero -1;
    if (numero == 0){
        document.write("Solo faltan : ", numero, " paso por caminar", "<br>");
    }
}


//Practica while

let pasos = 100;
while (pasos > 0 ){
    if(pasos === 1){
        document.write('Solo falta ', pasos, " paso por caminar <br>");
    } else {
        document.write('Solo faltan ', pasos, " pasos por caminar <br>");
    }

    pasos = pasos -1 ;
}

//CICLO FOR

for(let i = 0; i <= 10; i++ ){
    alert(i)



for(let i = 1; i <= 5; i++ ){
    //Solicitar en cada repeticion un nombre

    let ingresarNombre = prompt("Ingrese un nombre")

    //Informa el turno asignado

    alert ("Turno nro " + i + " Nombre: "+ingresarNombre)
}


// Propiedad LENGTH del array

let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limon",
    "Kiwi"
];

for(let i = 0; i <= frutas.length; i++){
    let fruta = frutas[i];
    console.log( fruta , 'tiene ', fruta.length, 'letras');
}


//ForEach

let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosMagicos.forEach(function(indice, objetosMagicos){
    console.log("Objeto con forEach es: ", indice, objetosMagicos);
})

objetosMagicos.forEach((objetosMagicos, indice) =>
    console.log("Objeto con forEach , con funcion flecha, es: ", objetosMagicos, indice))

// Map - Generar un nuevo array basado en las transformaciones del array original

let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosMagicos.map((objetosMagicos) => {
    console.log("Objeto con map: " + objetosMagicos )
}); 
const numeros = [1, 2, 3, 4, 5, 6, 10];
const porDos = numeros.map((x) => x  *2 );
const porCien = numeros.map((x) => x * 100 );

console.log(numeros);
console.log("Por dos ", porDos);
console.log("Por dos ", porCien);

const numeros = [1, 2, 3, 4, 5, 6, 10];
const encontrado = numeros.find(elemento => elemento > 4);
console.log(encontrado);

const nombres = ["Harry", "Hermione", "Ron"];
const nombreEncontrado = nombres.find(elemento => elemento === "Harry");
console.log("El nombre encontrado es ", nombreEncontrado);*/

const numeros = [1, 2, 3, 4, 5, 6, 10];
const numMayoresCinco = numeros.filter((n) => n >= 5 );
console.log(numMayoresCinco);


const palabras = ["manzanas", "banana", "uva", "frutillas", "naranja"];

const palabraBuscada = "na";

const palabrasClave = palabras.filter((palabra) => palabra.includes(palabraBuscada))

console.log(palabrasClave);

//El metodo 'includes' verifica si una subcadena o elemento estas presenta en una cadena o en un array. En este caso, la usamos para corroborar que "na" este presente en las palabras