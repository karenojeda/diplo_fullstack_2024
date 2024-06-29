/** Clase 18: DOM */
/*
console.log(document);
console.dir(document);

console.log(document.head);
console.dir(document.head);

console.log(document.body);
console.dir(document.body);


//Metodos para acceder al DOM

let titulo = document.getElementById('titulo');
console.log(titulo)
console.log(titulo.innerHTML)


let nombre = 'Cosme Fulanito';
titulo.innerHTML = "Hola " + nombre;
console.log(titulo.innerHTML);

let parrafos = document.getElementsByClassName('parrafos');
console.log(parrafos)


let parrafosTag = document.getElementsByTagName('p');
console.log(parrafosTag)


//----------------------------------Ejemplo modificacion de select dinamico

const categorias = [];
let entrada = prompt ("Ingresar categoria (Escribir 'ESC'para salir)");
while (entrada.toUpperCase() != 'ESC'){
    categorias.push(entrada.toUpperCase());
    entrada = prompt("Ingresar categoria (Escribir 'ESC' para salir)")
}

console.log(categorias)


//Obtener elemento

let miSelect = document.getElementById('select')


/*
miSelect.innerHTML = '<option>' +categorias[0] + '</option>';
*/

//Recorremos el array para guardarlo en el nodo SELECT
/*for (const categoria of categorias){
    miSelect.innerHTML += '<option>' +categoria + '</option>';
} */

// Creacion de un nuevo Nodo

let titulo1 = document.createElement('h2'); //crear el nodo
titulo1.innerHTML = 'Hola desde JS'; // defino el contenido
document.body.appendChild(titulo1);


//Ejemplo de creacion dinamica de nodos 

class Producto {
    constructor (id, nombre, precio){
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio)
    }
}

const productos=[];
productos.push(new Producto(1, "DONA", 3000))
productos.push(new Producto(2, "TORTA", 2700))
productos.push(new Producto(3, "PAN", 3500))
productos.push(new Producto(4, "CAFE", 5200))

//Recorro el array para crear un nodo por valor

for (const producto of productos){
    let divProducto = document.createElement('div'); // crea el nodo

    divProducto.innerHTML = `<h4> Nombre: ${producto.nombre} </h4>
                             <p> Precio: ${producto.precio} </h4>`
document.body.appendChild(divProducto);
}