/*let contador = 0;
let intervalID = setInterval(() => {
contador++;
console.log(`Contador: ${contador}`);

}, 3000);

setTimeout(() =>{
    console.log("Hola despues de 3 segundos");

}, 3000)*/


//Ejemplo combinado 

/*let contador = 0;
let intervalID = setInterval(() => {
contador++;
console.log(`Contador: ${contador}`);

}, 1000);

setTimeout(() =>{
    clearInterval(intervalID)
    console.log("temporizador detenido despues de 5 segundos");

}, 5000)*/

//Reloj

function mostrarHora(){
    let reloj = document.getElementById ("reloj");
    let ahora = new Date();
reloj.innerHTML = ahora.toLocaleTimeString(); // ACTUALIZA CON LA HORA ACTUAL
}
let cronometro = setInterval(mostrarHora, 1000)// ACTUALIZA LA HORA EN PANTALLA