// Esto es un comentario de una linea

/* 
Esto es un comentario
de varias
lineas
 */

//mandar mensaje en la consola
console.log("Hola mundo");
console.info("Hola mundo");
console.warn("Hola mundo");
console.error("Hola mundo");

//como mostrar en html
document.writeln("Hola mundo")
document.writeln("<h3>Hola mundo</h3>");

/* alert("Esto es una ventana emergente alert") */

//Variables VAR - LET - CONST

const taiga = 'https://tree.taiga.io/projects/';

console.log(taiga);

document.writeln("<p>" + taiga + "</p>");
document.writeln(taiga);

/* const taiga = "hola"; */

//VAR variables mutables, desventaja es que no respeta bloque {}(Scope- Local Global)

var a = 1;

a = 2;

var a = 3; //se redeclara
console.log(a);

//LET variables mutables, ventaja si respeta bloque {} 

let b = 10;

b = 20;

//let b = 30; ❌ error

console.log(b);

//CONST variables inmutables, ventaja respeta bloque

const c = 100;

//c = 200; ❌ error

console.log(c);

//Arrays no me marca error

const numeros = [1, 2, 3];

numeros.push(4)

console.log(numeros);

const nombreUsuario = prompt("Ingresa tu nombre");

console.log(nombreUsuario);

document.writeln(`<br> Bienvenido/a ${nombreUsuario} 🤗 ${a}`);
document.writeln('<br> Bienvenido/a ' + nombreUsuario + '🤗')


//Programa para la suma de dos numeros
let num1 = parseInt(prompt('Ingrese el primer número para sumar'));

let num2 = parseInt(prompt('Ingrese el segundo número para sumar'));

let suma = num1 + num2;

document.writeln(`<br>El resultado de la suma de ${num1} y ${num2} es: ${suma}`)
























