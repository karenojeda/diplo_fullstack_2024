/**Clase 14: Condicionales en JS */

//If else if else
/*
let numero = 3;

if (numero > 3) {
    console.log("El numero es mayor 3");
} else if(numero ===3){
    console.log("El numero es igual a 3")
}
else {
    console.log("Elnumero es menor a 3")
}
console.log ("Continua con la ejecucion")



//Operador condicional ternario
//Else resumido

let edad = 20;
let esMayorEdad;


if (edad > 18){
    esMayorEdad = true;
} else{
    esMayorEdad = false;
}

console.log('Es mayor de edad?', esMayorEdad)


let esMayorEdad = edad > 18 ? true : false
console.log('Es mayor de edad?', esMayorEdad)


//Con OT

let nombre = 'Cosme';

edad >= 18
? console.log(nombre + " es mayor de edad")
: console.log(nombre , " no es mayor de edad")

//SWITCH

let powerRanger = "Green";

switch (powerRanger) {
    case "Red":
        console.log("Red Ranger! Jason");
        break;
    case "Blue":
        console.log("Blue Ranger! Billy");
        break;
    case "Black":
        console.log("Blanck Ranger! Zack");
        break;
    case "Pink":
        console.log("Pink Ranger! Kinberly");
        break;
    case "Yellow":
        console.log("Yellow Ranger! Trini");
        break;
    default:
        console.log("No sos un Power Ranger")                       
}





let day = new Date().getDay()

switch (day) {
    case 1:
        dia = ("Lunes")
        break;
    case 2:
        dia = ("Martes")
        break;
    case 3:
        dia = ("Miercoles")
        break;
    case 4:
        dia = ("Jueves")
        break;
    case 5:
        dia = ("Viernes")
        break;
    case 6:
        dia = ("Sabado")
        break;
    case 0:
        dia = ("Domingo")
        break;

    default: 
        console.log("Dia no disponible");                     
        break;
}

console.log("hoy es", dia)
*/

let edad = prompt("Por favor, ingresa tu edad: ");

if (edad !== null) {
    edad = Number(edad);
    if (!isNaN(edad)) {
        if (edad >= 18) {
        document.write("Sos mayor de edad");
    } else {
        document.write("Sos menor de edad");
    }
} else {
    document.write("Por favor, ingresa un numero valido")
}
} else {
    document.write("No ingresaste ninguna edad");
}